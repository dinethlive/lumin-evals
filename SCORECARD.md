# Scorecard

Exported from the audit record on 2026-09-29. The same figures are drawn at [https://lumin.guru/benchmarks](https://lumin.guru/benchmarks).

## The core, layer by layer

Everything every tool depends on, in dependency order. Each layer is checked against an oracle the code did not produce.

| Layer | Checked against | Result |
| --- | --- | --- |
| Julian day | Meeus, Astronomical Algorithms, example 7.a | Exact |
| Delta T | Published historical values, 1900 to 2020 | Within tolerance |
| Nutation and obliquity | IAU 1980 against Meeus at three epochs, and Swiss Ephemeris at 14 instants | 0.015 arcseconds |
| Planets, VSOP87 | JPL Horizons DE441 at 14 instants, 1900 to 2050, and 5 observed sky events | Worst 0.4 arcseconds |
| Moon, ELP/MPP02 | DE441 at the same instants, and the total solar eclipse of 2017-08-21 | 0.154 arcseconds, worst |
| Lunar nodes, mean and true | Swiss Ephemeris at the same instants, the true node corroborated by Skyfield | 0.12 arcseconds mean, 1 arcseconds true |
| Eclipses, solar and lunar | NASA's canon for 2000 to 2010, every eclipse with its type | 50 of 50 classified |
| Ayanamsa, KP Old | KSK's printed table, 21 rows 1840 to 2001, 2 charts in his hand, 2 corpus values | Within 1 arcminute of his practice |
| Ayanamsa, KP New | 3 published values and the published 1850 row | To the arcsecond |
| Ayanamsa, True Chitra | Spica's apparent place in Swiss Ephemeris at 5 epochs, 1900 to 2050 | 0.32 arcseconds, worst |
| Placidus house cusps | Their own defining equation at 6 latitudes, and a full Swiss Ephemeris set with its ARMC | 0.16 and 0.05 arcseconds |
| The 249-sub table | 2 corpus arcs, printed to the second | Exact |
| Sub-sub lords, 2,187 spans | 1 printed arc, 1 printed four-level chain in a second book, and the tiling invariant | Exact |
| Vimshottari dasha balance | 2 worked derivations and a 9-row ready reckoner, Reader 1 | Exact |

## Observed sky events

Each event has a published timestamp, so the engine cannot have influenced it. The figure is the engine's own; the bound is what the engine's test allows for it. `npm run evals` re-derives every row against the hosted server.

| Event | Instant, UT | Measure | Engine figure | Bound |
| --- | --- | --- | --- | --- |
| Great Conjunction | 2020-12-21 18:20:00 | Jupiter to Saturn, separation | 0.0001° | 0.2° |
| Venus transit | 2012-06-06 01:29:00 | Venus to Sun, separation | 0.0221° | 0.15° |
| Mercury transit | 2019-11-11 15:20:00 | Mercury to Sun, separation | 0.0028° | 0.15° |
| Mars opposition | 2020-10-13 23:20:00 | Mars to Sun, elongation | 179.9947° | 0.2° |
| Solar eclipse | 2017-08-21 18:26:00 | Moon to Sun, separation | 0.0379° | 0.15° |
| Vernal equinox | 2000-03-20 07:35:00 | Sun, tropical longitude | 359.9998° | 0.01° |

## Reference ephemerides

Numbers this engine could not have produced without becoming what it is checked against. Each bound is the pinning test's own.

JPL Horizons DE441, geocentric apparent ecliptic longitude at 14 instants, 1900 to 2050. Worst residual per body, in arcseconds:

| Body | Worst | Bound |
| --- | --- | --- |
| Sun | 0.13″ | 0.5″ |
| Mercury | 0.15″ | 0.5″ |
| Venus | 0.15″ | 0.5″ |
| Mars | 0.2″ | 0.5″ |
| Jupiter | 0.4″ | 1″ |
| Saturn | 0.37″ | 1″ |
| Moon | 0.154″ | 0.5″ |

Swiss Ephemeris, at the same instants: mean node 0.12″, true node 1″, all twelve Placidus cusps and the ARMC 0.05″.

Swiss Ephemeris, Spica's apparent place at 5 epochs 1900 to 2050: the True Chitra ayanamsa within 0.32″.

Swiss Ephemeris, the Lahiri ayanamsa at 17 dates 1800 to 2100: within 0.0085″ (bound 0.05″).

NASA GSFC decade canon, 2000 to 2010: 50 of 50 eclipses classified with their type.

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

No observation to check against, so the cusps are checked two ways: against their own defining equation, re-derived with independent trigonometry at six places on both hemispheres, the equator and Reykjavik, worst case 0.16 arcseconds; and against a full Swiss Ephemeris cusp set with its ARMC, 0.05 arcseconds.

## The ledger

| Findings | Fixed | Partly fixed | Open |
| --- | --- | --- | --- |
| 163 | 147 | 6 | 10 |

See [FINDINGS.md](FINDINGS.md) for every finding by id.

## The research behind the fixes

| Corpus pages | Questions | Answered | Search keywords | Research reports | Report words |
| --- | --- | --- | --- | --- | --- |
| 5,045 | 43 | 42 | 1,312 | 48 | 197,546 |

The engine's own suite runs 3,614 tests across 238 files on every change.
