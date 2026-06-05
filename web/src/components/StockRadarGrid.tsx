"use client";

import clsx from "clsx";

interface Stock {
  code: string;
  name: string;
  marketCap: number;
  industry: string;
  chainId: string;
  nodeId: string;
  scores: {
    physicalNecessity: number;
    oligopoly: number;
    capacityRigidity: number;
    smallCap: number;
  };
  scoreReasons: Record<string, string>;
  totalScore: number;
  summary: string;
  tags: string[];
}

const dimensionLabels: Record<string, string> = {
  physicalNecessity: "物理必需",
  oligopoly: "寡头垄断",
  capacityRigidity: "产能刚性",
  smallCap: "小市值",
};

function getScoreColor(score: number): string {
  if (score >= 15) return "var(--accent)";
  if (score >= 12) return "var(--yellow)";
  return "var(--text-secondary)";
}

function ScoreBar({ value, max = 5 }: { value: number; max?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: max }).map((_, i) => (
        <div
          key={i}
          className={clsx(
            "w-3 h-1.5 rounded-sm",
            i < value ? "bg-[var(--accent)]" : "bg-[var(--border)]"
          )}
        />
      ))}
    </div>
  );
}

export default function StockRadarGrid({ stocks }: { stocks: Stock[] }) {
  const sorted = [...stocks].sort((a, b) => b.totalScore - a.totalScore);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {sorted.map((stock) => (
        <div
          key={stock.code}
          className="bg-[var(--bg-card)] rounded-xl border border-[var(--border)] p-4 hover:border-[var(--accent)] transition-colors group"
        >
          <div className="flex items-start justify-between mb-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base font-bold">{stock.name}</span>
                <span className="text-xs text-[var(--text-secondary)]">{stock.code}</span>
              </div>
              <div className="text-xs text-[var(--text-secondary)] mt-0.5">
                {stock.industry} · {stock.marketCap}亿
              </div>
            </div>
            <div
              className="text-2xl font-black tabular-nums"
              style={{ color: getScoreColor(stock.totalScore) }}
            >
              {stock.totalScore}
            </div>
          </div>

          <div className="space-y-2 mb-3">
            {Object.entries(dimensionLabels).map(([key, label]) => (
              <div key={key} className="flex items-center justify-between gap-2">
                <span className="text-xs text-[var(--text-secondary)] w-16 shrink-0">{label}</span>
                <ScoreBar value={stock.scores[key as keyof typeof stock.scores]} />
                <span className="text-xs font-mono text-[var(--text-primary)] w-4 text-right">
                  {stock.scores[key as keyof typeof stock.scores]}
                </span>
              </div>
            ))}
          </div>

          <p className="text-xs text-[var(--text-secondary)] mb-3 leading-relaxed">{stock.summary}</p>

          <div className="flex flex-wrap gap-1">
            {stock.tags.map((tag) => (
              <span
                key={tag}
                className={clsx(
                  "px-2 py-0.5 rounded text-[10px] font-medium",
                  tag === "核心关注"
                    ? "bg-[var(--accent-dim)] text-[var(--accent-light)]"
                    : tag === "主力持仓"
                    ? "bg-[rgba(34,197,94,0.15)] text-[var(--green)]"
                    : "bg-[var(--bg-secondary)] text-[var(--text-secondary)]"
                )}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
