"use client";
import { cn } from "@/lib/utils";

export default function SummaryCard() {
  return (
    <section className="p-4 bg-card rounded-xl shadow-sm">
      <h2 className="text-2xl font-semibold">Summary</h2>
      {/* Replace with real data */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>Address: <span className="font-mono">0x…abcd</span></div>
        <div>Wallet Score: <span className="font-mono">85</span></div>
        <div>Sybil Score: <span className="font-mono">12</span></div>
        <div>Total Volume: <span className="font-mono">$12,345</span></div>
        <div>Profit/Loss: <span className="font-mono">$1,234</span></div>
        <div>Monthly Chart: <span className="font-mono">[chart]</span></div>
        <div>Activity Streak: <span className="font-mono">30 days</span></div>
      </div>
    </section>
  );
}
