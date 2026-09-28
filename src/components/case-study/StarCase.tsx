import type { StarCase as StarCaseData } from "@/lib/types";

const PARTS = [
  { key: "situation", label: "Situation" },
  { key: "task", label: "Task" },
  { key: "action", label: "Action" },
  { key: "result", label: "Result" },
] as const;

export function StarCase({ star }: { star: StarCaseData }) {
  return (
    <div className="star-case">
      <p className="star-case-title">{star.title}</p>
      <ol className="case-card-grid">
        {PARTS.map((part) => (
          <li key={part.key}>
            <p className="case-card-label">{part.label}</p>
            <p className="case-card-body">{star[part.key]}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
