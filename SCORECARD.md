# Scorecard

Exported from the audit record on 2026-09-06. The same figures are drawn at [https://lumin.guru/benchmarks](https://lumin.guru/benchmarks).

## The core, layer by layer

Everything every tool depends on, in dependency order. Each layer is checked against an oracle the code did not produce.

| Layer | Checked against | Result |
| --- | --- | --- |
| Julian day | Meeus, Astronomical Algorithms, example 7.a | Exact |
| Delta T | Published historical values, 1900 to 2020 | Within tolerance |
| Nutation and obliquity | IAU 1980 against Meeus example 22.a, and the Placidus condition | Holds |
| Planets, VSOP87 | 5 observed sky events with published timestamps | Worst 0.065 degrees |
| Moon, ELP2000 | The total solar eclipse of 2017-08-21 | 0.035 degrees |
| Ayanamsa, KP Old | 4 published Reader I table rows and 2 corpus values | Within 1 arcminute |
| Ayanamsa, KP New | 2 published values | To the arcsecond |
| Placidus house cusps | Their own defining equation, re-derived independently at 6 latitudes | 0.16 arcseconds, worst case |
| The 249-sub table | 2 corpus arcs, printed to the second | Exact |
| Sub-sub lords, 2,241 spans | 1 printed arc, 1 printed four-level chain in a second book, and the tiling invariant | Exact |
| Vimshottari dasha balance | 2 worked derivations and a 9-row ready reckoner, Reader 1 | Exact |

## Observed sky events

Each event has a published timestamp, so the engine cannot have influenced it. The figure is the engine's own; the bound is what the engine's test allows for it. `npm run evals` re-derives every row against the hosted server.

| Event | Instant, UT | Measure | Engine figure | Bound |
| --- | --- | --- | --- | --- |
| Great Conjunction | 2020-12-21 18:20:00 | Jupiter to Saturn, separation | 0.037° | 0.2° |
| Venus transit | 2012-06-06 01:29:00 | Venus to Sun, separation | 0.043° | 0.15° |
| Mercury transit | 2019-11-11 15:20:00 | Mercury to Sun, separation | 0.065° | 0.15° |
| Mars opposition | 2020-10-13 23:20:00 | Mars to Sun, elongation | 179.93° | 0.2° |
| Solar eclipse | 2017-08-21 18:26:00 | Moon to Sun, separation | 0.035° | 0.15° |
| Vernal equinox | 2000-03-20 07:35:00 | Sun, tropical longitude | 359.9998° | 0.01° |

## Ayanamsa

KP Old, against the published table and two worked examples, within 1 arcminute.

| Date | Printed | Source |
| --- | --- | --- |
| 1900-01-01 | 22° 22′ | Krishnamurti, KP Reader I, the 1900 base of the table |
| 1950-01-01 | 23° 04′ | Krishnamurti, KP Reader I, table row for 1950 |
| 1967-01-01 | 23° 18′ | Krishnamurti, KP Reader I, table row for 1967 |
| 2000-01-01 | 23° 46′ | Krishnamurti, KP Reader I, table row for 2000; also stated in Casting the Horoscope |
| 1967-09-20 | 23° 18′ | Krishnamurti, KP Reader V, a worked example stating the ayanamsa on that date |
| 1953-07-01 | 23° 06′ | Jyotish Astro Secrets, part 3, a worked example stating the ayanamsa in mid 1953 |

## House cusps

No observation to check against, so the cusps are checked against their own defining equation, re-derived with independent trigonometry at six places on both hemispheres, the equator and Reykjavik. Worst case 0.16 arcseconds.

## The ledger

| Findings | Fixed | Partly fixed | Open |
| --- | --- | --- | --- |
| 64 | 55 | 1 | 8 |

See [FINDINGS.md](FINDINGS.md) for every finding by id.

## The research behind the fixes

| Corpus pages | Questions | Answered | Search keywords | Research reports | Report words |
| --- | --- | --- | --- | --- | --- |
| 5,045 | 22 | 21 | 629 | 22 | 86,954 |

The engine's own suite runs 1,794 tests across 124 files on every change.
