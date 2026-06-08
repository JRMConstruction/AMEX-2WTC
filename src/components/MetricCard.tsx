import type { Metric } from "../data/dashboardMetrics";
import ProgressBar from "./ProgressBar";

type MetricCardProps = {
  metric: Metric;
};

export default function MetricCard({ metric }: MetricCardProps) {
  return (
    <div className="metric-card">
      <span>{metric.label}</span>
      <strong>{metric.value}</strong>
      <small>{metric.detail}</small>
      {typeof metric.progress === "number" && <ProgressBar value={metric.progress} tone={metric.tone} />}
    </div>
  );
}
