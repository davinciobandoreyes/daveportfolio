import type { DesignDecision } from "@/lib/types";

export function DesignDecisions({
  decisions,
}: {
  decisions: DesignDecision[];
}) {
  if (!decisions.length) return null;

  return (
    <ol className="case-card-grid">
      {decisions.map((item) => (
        <li key={item.title}>
          <p className="case-card-heading">{item.title}</p>
          <p className="case-card-body">{item.why}</p>
        </li>
      ))}
    </ol>
  );
}
