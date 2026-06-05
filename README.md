# ⚡ Chokepoint Radar

> **A股瓶颈投资信号仪表盘** — 基于 [Serenity 瓶颈投资法](https://x.com/SerenityStock)的可视化工具
> 
> 不买龙头，挖产业链里"缺了它就停摆"的隐形节点

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

## 🎯 What is this?

Chokepoint Radar helps you find **the real bottlenecks** in A-share industry chains — not the overpriced leaders everyone already knows, but the hidden nodes where:

- 🔴 **Physical Necessity** — Can't be substituted, the chain literally stops without it
- 🔴 **Oligopoly** — 2-3 players control 80%+ market share  
- 🔴 **Capacity Rigidity** — Takes 18-24 months to build new production lines
- 🔴 **Small Cap** — Undercovered by institutions, mispriced

Think of it as a **radar for investment chokepoints** — visual, structured, and actionable.

## ✨ Features

- **🗺️ Chain Map** — Visualize entire industry chains from GPU → raw materials, see where the chokepoints are
- **📡 Radar Scoring** — 4-dimension chokepoint scoring (1-5 scale) for each stock, with expandable reasoning
- **📰 Signal Feed** — Real-time signals: capacity constraints, capital flows, certifications, geopolitical events
- **🎨 Dark Dashboard** — Built for traders who stare at screens at 2am

## 🏗️ Architecture

```
chokepoint-radar/
├── web/                    # Next.js 15 + TypeScript
│   ├── src/
│   │   ├── app/           # App Router pages
│   │   ├── components/    # React components
│   │   ├── data/          # Preset JSON data (MVP)
│   │   └── lib/           # Utilities
│   └── public/
├── docs/
│   ├── decisions/         # Architecture Decision Records
│   └── PRD.md            # Product Requirements Document
└── src/data/              # Source data (authoritative)
```

**MVP Strategy**: Pure frontend + preset JSON data. Stock prices via free APIs. No backend needed.

## 🚀 Quick Start

```bash
# Clone
git clone https://github.com/your-username/chokepoint-radar.git
cd chokepoint-radar/web

# Install
npm install

# Run
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — that's it.

## 📊 Included Data

MVP ships with 3 industry chains and 10 stocks:

| Chain | Top Chokepoint Stock | Score |
|-------|---------------------|-------|
| CPO/硅光 | 源杰科技 (CW激光器) | ⚡ 19/20 |
| CPO/硅光 | 云南锗业 (InP衬底) | ⚡ 19/20 |
| 先进封装 | 通富微电 (CoWoS) | 🟡 15/20 |
| AI电力 | 特变电工 (变压器) | 🟡 15/20 |

## 🎮 The Chokepoint Theory

> *"Don't buy the shiny end product. Buy the thing that the shiny product literally cannot exist without — and that only 2 companies on earth can make."*

The scoring system evaluates each stock across 4 dimensions:

| Dimension | Question | Weight |
|-----------|----------|--------|
| Physical Necessity | Can this node be bypassed? | Equal |
| Oligopoly | How concentrated is the supply? | Equal |
| Capacity Rigidity | How fast can new supply come online? | Equal |
| Small Cap | Is it still under the radar? | Equal |

Total score ranges from **4** (no chokepoint characteristics) to **20** (perfect chokepoint). We focus on 15+.

## 🗺️ Roadmap

- [x] Chain map visualization
- [x] 4-dimension scoring cards
- [x] Signal feed
- [ ] Interactive radar charts (ECharts)
- [ ] Real-time stock prices (Sina/Tencent API)
- [ ] Portfolio tracker with risk alerts
- [ ] CLI tool for data updates
- [ ] Community-contributed chains

## 🤝 Contributing

Contributions welcome! Especially:

- **New industry chains** — Know a chain we're missing? Add it to `src/data/chains.json`
- **Signal sources** — Found a great data source? Open an issue
- **Translations** — Help us reach non-Chinese speakers

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## 📄 License

MIT — use it however you want. Not financial advice. DYOR.

---

**⚠️ Disclaimer**: This tool is for educational and research purposes only. All data is illustrative. Nothing here constitutes investment advice. Always do your own research.
