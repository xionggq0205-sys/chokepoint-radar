# Contributing to Chokepoint Radar

Thanks for your interest! Here's how to contribute.

## 🎯 Ways to Contribute

### Add a New Industry Chain
1. Fork the repo
2. Add your chain data to `src/data/chains.json` following the existing schema
3. Add related stocks to `src/data/stocks.json` with 4-dimension scores
4. Copy both files to `web/src/data/`
5. Submit a PR with title: `[Chain] Your Chain Name`

### Fix or Improve Data
- Found a wrong score? Open an issue with the stock code and your reasoning
- Better CR3 data? PRs welcome with sources

### Code Contributions
1. Fork → Branch → PR
2. `cd web && npm install && npm run dev` to test
3. Keep the dark theme aesthetic
4. TypeScript strict mode — no `any` types

## 📏 Scoring Guidelines

| Score | Meaning |
|-------|---------|
| 5 | Perfect chokepoint characteristic |
| 4 | Strong |
| 3 | Moderate |
| 2 | Weak |
| 1 | No chokepoint characteristic |

**Be conservative** — a score of 5 should mean "this is one of the most extreme examples in the entire A-share market."

## 🌍 Translations

We'd love to support English and other languages. If you want to help:
- Translate chain/stock descriptions in the JSON data
- Add i18n support to the frontend

## 📜 Code of Conduct

Be respectful. We're all here to learn about supply chain bottlenecks.

## ⚠️ Disclaimer

All contributions are for educational purposes. This is not financial advice.
