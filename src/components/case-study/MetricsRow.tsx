import type { ImpactMetric } from "@/lib/types";

export function MetricsRow({ metrics }: { metrics: ImpactMetric[] }) {
  if (!metrics.length) return null;

  return (
    <ul className="case-card-grid">
      {metrics.map((metric) => (
        <li key={`${metric.label}-${metric.value}`}>
          <p className="case-card-label">{metric.label}</p>
          <p className="case-card-value">{metric.value}</p>
          {metric.note && <p className="case-card-body">{metric.note}</p>}
        </li>
      ))}
    </ul>
  );
}
