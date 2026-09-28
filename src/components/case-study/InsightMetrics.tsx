import type { InsightSlice, ResearchInsight } from "@/lib/types";

const SIZE = 220;
const CENTER = SIZE / 2;
const RADIUS = 78;
const STROKE = 28;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function sliceOffset(slices: InsightSlice[], index: number, total: number) {
  const before = slices
    .slice(0, index)
    .reduce((sum, slice) => sum + slice.value, 0);
  return (before / total) * CIRCUMFERENCE;
}

export function InsightMetrics({ insight }: { insight: ResearchInsight }) {
  const total = insight.slices.reduce((sum, slice) => sum + slice.value, 0);
  const description = insight.slices
    .map((slice) => `${slice.label} ${slice.value}%`)
    .join(", ");

  return (
    <div className="insight-metrics">
      <p className="insight-title">{insight.title}</p>
      <p>{insight.lead}</p>

      <div className="insight-compare">
        <div>
          <p className="case-card-value">{insight.compare.left.value}</p>
          <p className="case-card-label">{insight.compare.left.label}</p>
        </div>
        <p className="insight-compare-vs">vs</p>
        <div>
          <p className="case-card-value">{insight.compare.right.value}</p>
          <p className="case-card-label">{insight.compare.right.label}</p>
        </div>
      </div>

      <div className="insight-chart">
        <svg
          className="insight-pie"
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          role="img"
          aria-label={description}
        >
          <circle
            className="insight-pie-track"
            cx={CENTER}
            cy={CENTER}
            r={RADIUS}
            fill="none"
            strokeWidth={STROKE}
          />
          {insight.slices.map((slice, index) => {
            const length = (slice.value / total) * CIRCUMFERENCE;
            return (
              <circle
                key={slice.label}
                className={`insight-pie-seg is-${slice.tone}`}
                cx={CENTER}
                cy={CENTER}
                r={RADIUS}
                fill="none"
                strokeWidth={STROKE}
                strokeDasharray={`${length} ${CIRCUMFERENCE - length}`}
                strokeDashoffset={-sliceOffset(insight.slices, index, total)}
                transform={`rotate(-90 ${CENTER} ${CENTER})`}
              >
                <title>{`${slice.label}: ${slice.value}%`}</title>
              </circle>
            );
          })}
          <text
            x={CENTER}
            y={CENTER - 8}
            textAnchor="middle"
            className="insight-pie-value"
          >
            {insight.compare.left.value}
          </text>
          <text
            x={CENTER}
            y={CENTER + 14}
            textAnchor="middle"
            className="insight-pie-caption"
          >
            {insight.compare.left.label}
          </text>
        </svg>

        <ul className="insight-slices">
          {insight.slices.map((slice) => (
            <li
              key={slice.label}
              className={slice.emphasis ? "is-emphasis" : undefined}
            >
              <span className={`insight-swatch is-${slice.tone}`} aria-hidden />
              <span className="insight-slice-label">{slice.label}</span>
              <span className="insight-slice-value">{slice.value}%</span>
            </li>
          ))}
        </ul>
      </div>

      <p className="insight-callout">{insight.insight}</p>
    </div>
  );
}
