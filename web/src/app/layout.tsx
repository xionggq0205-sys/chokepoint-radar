import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chokepoint Radar | A股瓶颈投资信号仪表盘",
  description: "基于Serenity瓶颈投资法的A股产业链瓶颈信号可视化工具",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}
