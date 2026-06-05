"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import clsx from "clsx";

interface ChainNode {
  id: string;
  name: string;
  level: number;
  chokeLevel: "low" | "medium" | "high";
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

const chokeColors = {
  high: { bg: "bg-[var(--accent)]", border: "border-[var(--accent)]" },
  medium: { bg: "bg-[var(--yellow)]", border: "border-[var(--yellow)]" },
  low: { bg: "bg-[var(--text-secondary)]", border: "border-[var(--text-secondary)]" },
};

const chokeLabels = { high: "高", medium: "中", low: "低" };

export default function ChainSelector({ chains }: { chains: Chain[] }) {
  const [activeChain, setActiveChain] = useState(chains[0]?.id);
  const selectedChain = chains.find((c) => c.id === activeChain);

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        {chains.map((chain) => (
          <button
            key={chain.id}
            onClick={() => setActiveChain(chain.id)}
            className={clsx(
              "px-4 py-2 rounded-lg text-sm font-medium transition-all",
              activeChain === chain.id
                ? "bg-[var(--accent)] text-white"
                : "bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border)]"
            )}
          >
            {chain.name}
          </button>
        ))}
      </div>

      {selectedChain && (
        <div className="bg-[var(--bg-card)] rounded-xl border border-[var(--border)] p-5">
          <p className="text-xs text-[var(--text-secondary)] mb-4">{selectedChain.description}</p>
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {selectedChain.nodes.map((node, i) => (
              <div key={node.id} className="flex items-center gap-2 shrink-0">
                <div
                  className={clsx(
                    "px-3 py-2 rounded-lg border text-xs font-medium min-w-[100px] text-center",
                    chokeColors[node.chokeLevel].border,
                    node.chokeLevel === "high"
                      ? "bg-[var(--accent-dim)] text-[var(--accent-light)]"
                      : "bg-[var(--bg-secondary)] text-[var(--text-secondary)]"
                  )}
                >
                  <div className="font-bold text-sm">{node.name}</div>
                  <div className="mt-1 flex items-center justify-center gap-1">
                    <span className={clsx("w-1.5 h-1.5 rounded-full", chokeColors[node.chokeLevel].bg)} />
                    <span>瓶颈{chokeLabels[node.chokeLevel]}</span>
                  </div>
                </div>
                {i < selectedChain.nodes.length - 1 && (
                  <ChevronRight className="w-4 h-4 text-[var(--text-secondary)] shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
