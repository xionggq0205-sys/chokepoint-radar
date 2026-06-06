import Header from "@/components/Header";
import ChainSelector from "@/components/ChainSelector";
import StockRadarGrid from "@/components/StockRadarGrid";
import SignalFeed from "@/components/SignalFeed";
import chainsData from "@/data/chains.json";
import stocksData from "@/data/stocks.json";
import signalsData from "@/data/signals.json";

type ChokeLevel = "low" | "medium" | "high";

interface ChainNode {
  id: string;
  name: string;
  level: number;
  chokeLevel: ChokeLevel;
  description: string;
  cr3: string;
  stocks: string[];
}

interface Chain {
  id: string;
  name: string;
  description: string;
  nodes: ChainNode[];
}

interface StockScores {
  physicalNecessity: number;
  oligopoly: number;
  capacityRigidity: number;
  smallCap: number;
}

interface Stock {
  code: string;
  name: string;
  marketCap: number;
  industry: string;
  chainId: string;
  nodeId: string;
  scores: StockScores;
  scoreReasons: Record<string, string>;
  totalScore: number;
  summary: string;
  tags: string[];
}

interface Signal {
  id: string;
  stockCode: string;
  stockName: string;
  date: string;
  type: string;
  level: "positive" | "negative" | "neutral";
  title: string;
  detail: string;
  source: string;
}

const chains = chainsData.chains as Chain[];
const stocks = stocksData.stocks as Stock[];
const signals = signalsData.signals as Signal[];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        <section>
          <h2 className="text-sm font-medium text-[var(--text-secondary)] mb-3 tracking-wide uppercase">
            产业链 Chokepoint Map
          </h2>
          <ChainSelector chains={chains} />
        </section>

        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-medium text-[var(--text-secondary)] tracking-wide uppercase">
              瓶颈评分雷达 Chokepoint Radar
            </h2>
            <div className="flex items-center gap-4 text-xs text-[var(--text-secondary)]">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                高瓶颈 (15+)
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[var(--yellow)]" />
                中瓶颈 (12-14)
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[var(--text-secondary)]" />
                低瓶颈 (&lt;12)
              </span>
            </div>
          </div>
          <StockRadarGrid stocks={stocks} />
        </section>

        <section>
          <h2 className="text-sm font-medium text-[var(--text-secondary)] mb-3 tracking-wide uppercase">
            最新信号 Signal Feed
          </h2>
          <SignalFeed signals={signals} />
        </section>
      </main>

      <footer className="border-t border-[var(--border)] mt-12 py-6 text-center text-xs text-[var(--text-secondary)]">
        <p>Chokepoint Radar v0.1.0 · 基于 Serenity 瓶颈投资法</p>
        <p className="mt-1">数据仅供参考，不构成投资建议</p>
      </footer>
    </div>
  );
}
