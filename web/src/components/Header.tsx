"use client";

import { Zap } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b border-[var(--border)] bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[var(--accent)] flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight">Chokepoint Radar</h1>
            <p className="text-xs text-[var(--text-secondary)]">A股瓶颈投资信号仪表盘</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-md bg-[var(--bg-card)] border border-[var(--border)] text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)] animate-pulse" />
            <span className="text-[var(--text-secondary)]">数据更新</span>
            <span className="text-[var(--text-primary)]">2026-06-05</span>
          </div>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </header>
  );
}
