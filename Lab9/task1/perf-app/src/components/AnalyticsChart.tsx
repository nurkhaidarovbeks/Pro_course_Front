import { useMemo } from "react";

interface AnalyticsChartProps {
  items: string[];
}

function calculateAnalytics(items: string[]): number {
  console.log("Calculating analytics...");
  console.time("analytics calculation");

  let result = 0;

  for (let i = 0; i < 10_000_000; i++) {
    result += Math.sqrt(i);
  }

  console.timeEnd("analytics calculation");

  return result + items.length;
}

export function AnalyticsChart({ items }: AnalyticsChartProps) {
  const analytics = useMemo(() => {
    return calculateAnalytics(items);
  }, [items]);

  console.log("AnalyticsChart render");

  return (
    <div className="card">
      <h3>Analytics Chart</h3>
      <p>Calculated value: {analytics.toFixed(2)}</p>
      <p>Items: {items.length}</p>
    </div>
  );
}