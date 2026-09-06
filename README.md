<p align="center">
  <a href="https://lumin.guru"><img src="assets/lumin.svg" width="110" alt="Lumin"></a>
</p>

<h1 align="center">Lumin Evals</h1>

<p align="center">
  Reproducible checks on the astrology engine behind <a href="https://lumin.guru">lumin.guru</a>.<br>
  Personalization you can trace.
</p>

<p align="center">
  <a href="https://lumin.guru/benchmarks">Benchmarks</a> ·
  <a href="https://docs.lumin.guru">Docs</a> ·
  <a href="https://developer.lumin.guru">Developer portal</a> ·
  <a href="https://lumin.guru/connect">Connect</a>
</p>

---

## What this is

Lumin computes KP astrology charts and applies the rules of Krishnamurti Paddhati, served to any model as an MCP server. Two questions about the engine can be measured, and this repository measures both: whether the astronomy matches the sky, and whether the engine computes what the printed books say to compute.

Every figure published at [lumin.guru/benchmarks](https://lumin.guru/benchmarks) comes from the data here. The runner re-derives the sky, ayanamsa and house cusp figures against the hosted server, with your own key.

## Run the evals

1. Create a key at [developer.lumin.guru](https://developer.lumin.guru). The free allowance covers the run many times over.
2. Run the checks. Node 20 or later, no dependencies.

```bash
LUMIN_API_KEY=mcp_yourkey npm run evals
```

The runner makes eighteen tool calls, prints one line per check with the figure and the bound, and exits non-zero if any check fails.

```
sky
  pass  Great Conjunction 2020-12-21T18:20:00Z  0.037° of 0.2° allowed
  ...

18 passed, 0 failed
```

## Contents

| Path | What it holds |
| --- | --- |
| [SCORECARD.md](SCORECARD.md) | The scorecard, generated from the data |
| [FINDINGS.md](FINDINGS.md) | Every finding by id, kind, status and date |
| [METHODOLOGY.md](METHODOLOGY.md) | The two questions measured and the three rules behind every check |
| `fixtures/` | The reference values, each with its source |
| `evals/` | The runner and a minimal MCP client |
| `data/` | The scorecard and the findings index |
| `scripts/` | Renders the two generated documents |

## Regenerate the documents

```bash
npm run docs
```

`SCORECARD.md` and `FINDINGS.md` are rendered from `data/` and `fixtures/`, so no figure is ever typed twice.

## About Lumin

Lumin is a calculation and trust layer for astrology. The engine computes the astronomy and the KP tables from scratch, every response carries the rule it applied and the page it came from, and the whole surface is available to Claude and to any MCP client. Start at [lumin.guru](https://lumin.guru).

## License

MIT. Reference values quoted from published sources are cited in place.
