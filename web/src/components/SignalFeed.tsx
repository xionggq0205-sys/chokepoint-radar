"use client";

import { ArrowUp, ArrowDown, Minus, Clock } from "lucide-react";
import clsx from "clsx";

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

const levelConfig = {
  positive: { icon: ArrowUp, color: "text-[var(--green)]", bg: "bg-[rgba(34,197,94,0.1)]", label: "利多" },
  negative: { icon: ArrowDown, color: "text-[var(--red)]", bg: "bg-[rgba(239,68,68,0.1)]", label: "利空" },
  neutral: { icon: Minus, color: "text-[var(--text-secondary)]", bg: "bg-[var(--bg-secondary)]", label: "中性" },
};

const typeLabels: Record<string, string> = {
  capacity: "产能",
  capital: "资金",
  certification: "认证",
  geopolitics: "地缘",
  earnings: "业绩",
};

export default function SignalFeed({ signals }: { signals: Signal[] }) {
  const sorted = [...signals].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="bg-[var(--bg-card)] rounded-xl border border-[var(--border)] divide-y divide-[var(--border)]">
      {sorted.map((signal) => {
        const config = levelConfig[signal.level];
        const Icon = config.icon;

        return (
          <div
            key={signal.id}
            className="p-4 flex items-start gap-3 hover:bg-[var(--bg-secondary)] transition-colors"
          >
            <div className={clsx("w-8 h-8 rounded-lg flex items-center justify-center shrink-0", config.bg)}>
              <Icon className={clsx("w-4 h-4", config.color)} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-medium text-[var(--accent)]">{signal.stockCode} {signal.stockName}</span>
                <span className="text-xs px-1.5 py-0.5 rounded bg-[var(--bg-secondary)] text-[var(--text-secondary)]">
                  {typeLabels[signal.type] || signal.type}
                </span>
                <span className={clsx("text-xs px-1.5 py-0.5 rounded font-medium", config.bg, config.color)}>
                  {config.label}
                </span>
              </div>
              <p className="text-sm font-medium text-[var(--text-primary)] mb-1">{signal.title}</p>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{signal.detail}</p>
            </div>
            <div className="flex items-center gap-1 text-xs text-[var(--text-secondary)] shrink-0">
              <Clock className="w-3 h-3" />
              {signal.date}
            </div>
          </div>
        );
      })}
    </div>
  );
}
