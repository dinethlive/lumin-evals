# Methodology

## Two questions, measured

The engine at lumin.guru computes charts and applies the rules of Krishnamurti Paddhati (KP). Two questions about it can be measured, and this repository measures both.

1. Does the astronomy match the sky? Planets, Moon, house cusps and the origin of the tropical zodiac, against observed events with published timestamps.
2. Does the engine compute what the books say to compute? The KP tables and the dasha arithmetic, against printed pages, cited by book and page.

One question is not measured here and not claimed anywhere: whether a reading came true. That is a different question, and nothing in this repository speaks to it.

## Three rules

**Every oracle is external.** A test fixture produced by the code catches drift and can never catch an error that was there from the start. So every check is against something the code did not produce: an observation, a published table, a printed page. The engine's own output is never the reference.

**The claim is computational.** A figure here says how far a computed value sits from a reference value. It says nothing about what the value means for anyone.

**Nothing is typed.** Every figure in the scorecard is re-derived from the source that carries it. Where a figure could not be re-derived, it was left out rather than written down.

## The fixtures

| Fixture | Reference | How it is checked |
| --- | --- | --- |
| `sky-events.json` | Six observed events with published timestamps | The engine's positions at the instant, against the bound its own test allows |
| `ayanamsa.json` | Four published table rows and two worked examples | The engine's ayanamsa on the date, within one arcminute |
| `placidus.json` | The equation that defines a Placidus cusp, and the invariants of every quadrant system | The invariants through the hosted API; the equation in the engine's suite |
| `dasha-balance.json` | Two worked derivations and a ready reckoner, printed in full | Exact, by arithmetic anyone can repeat |

## The ledger

Every disagreement the audit found between the engine and the books is a numbered finding with a kind, a status and a date. [FINDINGS.md](FINDINGS.md) lists them all, with the research questions each one raised or was closed by. When a rule was wrong, the finding says by how much.
