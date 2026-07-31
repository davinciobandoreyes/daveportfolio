import type { ImpactMetric } from "@/lib/types";

export function MetricsRow({ metrics }: { metrics: ImpactMetric[] }) {
  if (!metrics.length) return null;

  return (
    <ul className="metrics-row">
      {metrics.map((metric) => (
        <li key={`${metric.label}-${metric.value}`}>
          <p className="metric-value">{metric.value}</p>
          <p className="metric-label">{metric.label}</p>
          {metric.note && <p className="muted">{metric.note}</p>}
        </li>
      ))}
    </ul>
  );
}
