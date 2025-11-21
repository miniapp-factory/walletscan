"use client";
import ActivityMetrics from "./activity-metrics";
import TokenBreakdown from "./token-breakdown";
import ContractInsights from "./contract-insights";
import Labels from "./labels";
import ExportOptions from "./export-options";
import SummaryCard from "./summary-card";

export default function Dashboard() {
  return (
    <main className="p-4 space-y-6">
      <SummaryCard />
      <ActivityMetrics />
      <TokenBreakdown />
      <ContractInsights />
      <Labels />
      <ExportOptions />
    </main>
  );
}
