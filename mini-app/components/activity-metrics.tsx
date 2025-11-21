"use client";

export default function ActivityMetrics() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">Activity Metrics</h2>
      {/* Replace with real data */}
      <div className="grid grid-cols-2 gap-4">
        <div>Total Transactions: <span className="font-mono">0</span></div>
        <div>Active Days: <span className="font-mono">0</span></div>
        <div>Inflows / Outflows: <span className="font-mono">0 / 0</span></div>
        <div>Swap Count: <span className="font-mono">0</span></div>
        <div>Contracts Interacted: <span className="font-mono">0</span></div>
        <div>Gas Used: <span className="font-mono">0</span></div>
        <div>Failed Txns: <span className="font-mono">0</span></div>
        <div>Minting Events: <span className="font-mono">0</span></div>
        <div>Airdrops Claimed: <span className="font-mono">0</span></div>
        <div>Bridge Activity: <span className="font-mono">0</span></div>
      </div>
    </section>
  );
}
