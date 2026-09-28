import type { DesignProcess } from "@/lib/types";

export function DesignProcessFlow({ process }: { process: DesignProcess }) {
  const problem = process.phases.filter((phase) => phase.space === "problem");
  const solution = process.phases.filter((phase) => phase.space === "solution");

  return (
    <div className="design-process">
      <p className="design-process-lead">{process.lead}</p>
      <div className="design-process-spaces">
        <ProcessSpace label="Problem" phases={problem} />
        <ProcessSpace label="Solution" phases={solution} />
      </div>
    </div>
  );
}

function ProcessSpace({
  label,
  phases,
}: {
  label: string;
  phases: DesignProcess["phases"];
}) {
  return (
    <div className="design-process-space">
      <p className="design-process-space-label">{label}</p>
      <ol className="design-process-phases">
        {phases.map((phase) => (
          <li key={phase.id} className="design-process-phase">
            <div className="design-process-node" aria-hidden />
            <h3>{phase.title}</h3>
            <ul>
              {phase.steps.map((step) => (
                <li
                  key={step.label}
                  className={
                    step.emphasis
                      ? "design-process-step is-focus"
                      : "design-process-step"
                  }
                >
                  {step.emphasis && (
                    <span className="design-process-focus">Focus</span>
                  )}
                  <span>{step.label}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}
