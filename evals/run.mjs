#!/usr/bin/env node
/**
 * Re-derives the sky, ayanamsa and cusp figures on the Lumin scorecard
 * against the hosted server, with your own key.
 *
 *   LUMIN_API_KEY=mcp_... node evals/run.mjs
 *
 * Eighteen tool calls: six sky events, six ayanamsa rows, six places for
 * the cusps. They count against the key's monthly allowance. Exit code 1 if
 * any check fails.
 *
 * What is checked, and how:
 *   sky       get_planets at the event's instant. Separation is the angular
 *             distance between the two bodies' longitudes, which is the same
 *             in the sidereal and tropical frames. The equinox needs the
 *             tropical Sun, which is the sidereal Sun plus the ayanamsa the
 *             response carries.
 *   ayanamsa  get_planets at 00:00 UT on each date; the response's ayanamsa
 *             against the printed row, within one arcminute.
 *   cusps     get_house_cusps at each place; opposite cusps 180 degrees
 *             apart, cusps advancing, twelve houses closing on 360.
 */
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { client } from "./mcp.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const fixture = (name) => JSON.parse(readFileSync(join(here, "..", "fixtures", name), "utf8"));

const sky = fixture("sky-events.json");
const ayanamsa = fixture("ayanamsa.json");
const placidus = fixture("placidus.json");

const mcp = client({ apiKey: process.env.LUMIN_API_KEY });

const results = [];
const record = (group, label, pass, detail) => results.push({ group, label, pass, detail });

/** Angular distance between two longitudes, 0 to 180. */
const distance = (a, b) => {
  const d = Math.abs(((a - b) % 360) + 360) % 360;
  return d > 180 ? 360 - d : d;
};
const fmt = (deg, places = 4) => `${parseFloat(deg.toFixed(places))}°`;

/** Planet longitudes and the ayanamsa for a UT instant, geocentric, so the place does not matter. */
async function planetsAt(instantUtc) {
  const data = await mcp.call("get_planets", {
    birth_datetime: instantUtc.replace("Z", ""),
    latitude: 0,
    longitude: 0,
    utc_offset_minutes: 0,
    ayanamsa: ayanamsa.type,
  });
  const planets = data.planets ?? data;
  const aya = data.derived?.ayanamsa;
  const lon = (body) => {
    const p = planets[body];
    if (!p || typeof p.siderealLongitude !== "number") throw new Error(`${body}: no siderealLongitude in the response`);
    return p.siderealLongitude;
  };
  return { lon, ayanamsa: typeof aya === "number" ? aya : null };
}

async function runSky() {
  for (const e of sky) {
    try {
      const { lon, ayanamsa: aya } = await planetsAt(e.instantUtc);
      let residual;
      if (e.measure === "tropical-longitude") {
        if (aya === null) throw new Error("the response carries no ayanamsa, so the tropical Sun cannot be formed");
        const tropical = (lon(e.bodies[0]) + aya + 360) % 360;
        residual = distance(tropical, e.ideal);
      } else {
        residual = distance(distance(lon(e.bodies[0]), lon(e.bodies[1])), e.ideal);
      }
      record("sky", `${e.label} ${e.instantUtc}`, residual < e.boundDegrees, `${fmt(residual)} of ${fmt(e.boundDegrees, 2)} allowed`);
    } catch (err) {
      record("sky", `${e.label} ${e.instantUtc}`, false, err.message);
    }
  }
}

async function runAyanamsa() {
  for (const row of ayanamsa.rows) {
    const printed = row.degrees * 60 + row.arcminutes;
    try {
      const { ayanamsa: aya } = await planetsAt(`${row.date}T00:00:00Z`);
      if (aya === null) throw new Error("the response carries no ayanamsa");
      const off = Math.abs(aya * 60 - printed);
      record(
        "ayanamsa",
        `${row.date} printed ${row.degrees}°${String(row.arcminutes).padStart(2, "0")}′`,
        off <= ayanamsa.toleranceArcminutes,
        `engine ${fmt(aya, 4)}, ${off.toFixed(2)}′ off, ${ayanamsa.toleranceArcminutes}′ allowed`,
      );
    } catch (err) {
      record("ayanamsa", row.date, false, err.message);
    }
  }
}

async function runCusps() {
  for (const p of placidus.places) {
    try {
      const data = await mcp.call("get_house_cusps", {
        birth_datetime: p.datetimeLocal,
        latitude: p.latitude,
        longitude: p.longitude,
        utc_offset_minutes: p.utcOffsetMinutes,
        ayanamsa: ayanamsa.type,
      });
      const houses = data.houses ?? data.cusps ?? data;
      const cusps = Array.from({ length: 12 }, (_, i) => {
        const h = houses[i] ?? houses[i + 1] ?? houses[`house${i + 1}`] ?? houses[String(i + 1)];
        const v = h?.siderealLongitude ?? h?.longitude;
        if (typeof v !== "number") throw new Error(`cusp ${i + 1}: no longitude in the response`);
        return v;
      });
      let worstOpposite = 0;
      for (let i = 0; i < 6; i++) worstOpposite = Math.max(worstOpposite, Math.abs(distance(cusps[i], cusps[i + 6]) - 180));
      let total = 0;
      let monotonic = true;
      for (let i = 0; i < 12; i++) {
        const span = ((cusps[(i + 1) % 12] - cusps[i]) % 360 + 360) % 360;
        if (span <= 0 || span >= 180) monotonic = false;
        total += span;
      }
      const closes = Math.abs(total - 360) < 1e-6;
      const opposite = worstOpposite < 1e-3;
      record(
        "cusps",
        p.label,
        opposite && monotonic && closes,
        `opposites within ${worstOpposite.toExponential(1)}°, ${monotonic ? "advancing" : "NOT advancing"}, spans sum to ${total.toFixed(6)}°`,
      );
    } catch (err) {
      record("cusps", p.label, false, err.message);
    }
  }
}

function report() {
  const width = Math.max(...results.map((r) => r.label.length));
  let group = "";
  for (const r of results) {
    if (r.group !== group) {
      group = r.group;
      console.log(`\n${group}`);
    }
    console.log(`  ${r.pass ? "pass" : "FAIL"}  ${r.label.padEnd(width)}  ${r.detail}`);
  }
  const failed = results.filter((r) => !r.pass).length;
  console.log(`\n${results.length - failed} passed, ${failed} failed`);
  return failed;
}

await runSky();
await runAyanamsa();
await runCusps();
process.exit(report() ? 1 : 0);
