#!/usr/bin/env node
/**
 * Renders SCORECARD.md and FINDINGS.md from data/ and fixtures/. The
 * markdown is generated so that a figure never has to be typed twice.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (p) => JSON.parse(readFileSync(join(root, p), "utf8"));

const scorecard = read("data/scorecard.json");
const audit = read("data/audit.json");
const sky = read("fixtures/sky-events.json");
const ayanamsa = read("fixtures/ayanamsa.json");

const n = (x) => x.toLocaleString("en-US");
const table = (head, rows) =>
  [`| ${head.join(" | ")} |`, `| ${head.map(() => "---").join(" | ")} |`, ...rows.map((r) => `| ${r.join(" | ")} |`)].join("\n");

const measureLabel = { separation: "separation", elongation: "elongation", "tropical-longitude": "tropical longitude" };

const scorecardMd = `# Scorecard

Exported from the audit record on ${scorecard.exportedOn}. The same figures are drawn at [${scorecard.site}](${scorecard.site}).

## The core, layer by layer

Everything every tool depends on, in dependency order. Each layer is checked against an oracle the code did not produce.

${table(["Layer", "Checked against", "Result"], scorecard.layers.map((l) => [l.layer, l.oracle, l.result]))}

## Observed sky events

Each event has a published timestamp, so the engine cannot have influenced it. The figure is the engine's own; the bound is what the engine's test allows for it. \`npm run evals\` re-derives every row against the hosted server.

${table(
  ["Event", "Instant, UT", "Measure", "Engine figure", "Bound"],
  sky.map((e) => [e.label, e.instantUtc.replace("T", " ").replace("Z", ""), `${e.bodies.join(" to ")}, ${measureLabel[e.measure]}`, e.engineFigure, `${e.boundDegrees}°`]),
)}

## Reference ephemerides

Numbers this engine could not have produced without becoming what it is checked against. Each bound is the pinning test's own.

${(() => {
  const r = scorecard.referenceEphemerides;
  if (!r) return "_Not in this export._";
  const h = r.horizons;
  return [
    `${h.source}, geocentric apparent ecliptic longitude at ${h.instants} instants, ${h.span}. Worst residual per body, in arcseconds:`,
    "",
    table(["Body", "Worst", "Bound"], Object.entries(h.bodies).map(([b, v]) => [b, `${v.worst}″`, `${v.boundArcsec}″`])),
    "",
    `${r.swisseph.source}, at the same instants: mean node ${r.swisseph.meanNodeArcsec}″, true node ${r.swisseph.trueNodeArcsec}″, all twelve Placidus cusps and the ARMC ${r.swisseph.cuspArcsec}″.`,
    "",
    `${r.spica.source}, Spica's apparent place at ${r.spica.epochs} epochs 1900 to 2050: the True Chitra ayanamsa within ${r.spica.trueChitraWorstArcsec}″.`,
    "",
    `${r.lahiri.source}, the Lahiri ayanamsa at ${r.lahiri.dates} dates ${r.lahiri.span}: within ${r.lahiri.worstArcsec}″ (bound ${r.lahiri.boundArcsec}″).`,
    "",
    `${r.eclipses.source}, ${r.eclipses.span}: ${r.eclipses.classified} of ${r.eclipses.canon} eclipses classified with their type.`,
  ].join("\n");
})()}

## Ayanamsa

KP Old, against the published table and two worked examples, within ${ayanamsa.toleranceArcminutes} arcminute.

${table(["Date", "Printed", "Source"], ayanamsa.rows.map((r) => [r.date, `${r.degrees}° ${String(r.arcminutes).padStart(2, "0")}′`, r.source]))}

## House cusps

No observation to check against, so the cusps are checked two ways: against their own defining equation, re-derived with independent trigonometry at six places on both hemispheres, the equator and Reykjavik, worst case ${scorecard.placidusWorstErrorArcsec} arcseconds; and against a full Swiss Ephemeris cusp set with its ARMC${scorecard.referenceEphemerides ? `, ${scorecard.referenceEphemerides.swisseph.cuspArcsec} arcseconds` : ""}.

## The ledger

${table(
  ["Findings", "Fixed", "Partly fixed", "Open"],
  [[scorecard.findings.total, scorecard.findings.fixed, scorecard.findings.partlyFixed, scorecard.findings.open].map(String)],
)}

See [FINDINGS.md](FINDINGS.md) for every finding by id.

## The research behind the fixes

${table(
  ["Corpus pages", "Questions", "Answered", "Search keywords", "Research reports", "Report words"],
  [[scorecard.corpusPages, scorecard.research.questions, scorecard.research.answered, scorecard.research.keywords, scorecard.research.reports, scorecard.research.reportWords].map(n)],
)}

The engine's own suite runs ${n(scorecard.tests.count)} tests across ${n(scorecard.tests.files)} files on every change.
`;

const byStatus = (s) => audit.findings.filter((f) => f.status === s);
const findingRows = (rows) =>
  table(["Id", "Raised", "Kind", "Finding", "Through"], rows.map((f) => [f.id, f.raised, f.kind, f.title, f.questions.join(", ") || ""]));

const findingsMd = `# Findings

Every finding the audit has raised against the engine, by status. A finding is a place where the engine and the printed KP books disagreed, or where a rule shipped with no source behind it. "Through" names the research questions the finding raised or was closed by.

## Open (${byStatus("open").length})

${findingRows(byStatus("open"))}

## Partly fixed (${byStatus("partly-fixed").length})

${findingRows(byStatus("partly-fixed"))}

## Fixed (${byStatus("fixed").length})

${findingRows(byStatus("fixed"))}

## Research questions (${audit.questions.length})

${table(["Id", "Status", "Question"], audit.questions.map((q) => [q.id, q.status, q.title]))}
`;

writeFileSync(join(root, "SCORECARD.md"), scorecardMd);
writeFileSync(join(root, "FINDINGS.md"), findingsMd);
console.log("wrote SCORECARD.md and FINDINGS.md");
