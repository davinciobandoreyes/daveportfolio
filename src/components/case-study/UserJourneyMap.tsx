import type { UserJourney } from "@/lib/types";

const FIELDS = [
  { key: "goal", label: "Goal" },
  { key: "action", label: "Action" },
  { key: "opportunity", label: "Opportunity" },
] as const;

export function UserJourneyMap({ journey }: { journey: UserJourney }) {
  return (
    <div className="journey">
      <p className="journey-title">{journey.title}</p>
      <p>{journey.lead}</p>
      <ol className="journey-steps">
        {journey.steps.map((step, index) => (
          <li key={step.title} className="journey-step">
            <div className="journey-step-head">
              <span className="journey-step-index" aria-hidden>
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{step.title}</h3>
              <p className="journey-emotion">{step.emotion}</p>
            </div>
            <dl className="journey-fields">
              {FIELDS.map((field) => (
                <div key={field.key}>
                  <dt>{field.label}</dt>
                  <dd>{step[field.key]}</dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ol>
    </div>
  );
}
