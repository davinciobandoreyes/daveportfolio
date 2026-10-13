import type { UserFlow, UserFlowNode } from "@/lib/types";

export function UserFlowChart({ flow }: { flow: UserFlow }) {
  return (
    <div className="user-flow">
      <p className="user-flow-title">{flow.title}</p>
      <p>{flow.lead}</p>
      <div className="user-flow-scroll">
        {flow.lanes.map((lane) => (
          <section key={lane.title} className="user-flow-lane">
            <h3 className="user-flow-lane-title">{lane.title}</h3>
            <ol className="user-flow-track">
              {lane.steps.map((step, index) => (
                <li key={step.label} className="user-flow-item">
                  {index > 0 ? <span className="user-flow-arrow" aria-hidden /> : null}
                  <FlowNode step={step} />
                  {step.branch ? (
                    <div className="user-flow-branch">
                      <span className="user-flow-branch-rule">No</span>
                      <div className="user-flow-node is-end">
                        <strong>{step.branch.label}</strong>
                        {step.branch.detail ? <span>{step.branch.detail}</span> : null}
                      </div>
                    </div>
                  ) : null}
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </div>
  );
}

function FlowNode({ step }: { step: UserFlowNode }) {
  const kind = step.kind ?? "process";
  return (
    <div className={`user-flow-node is-${kind}`}>
      {kind === "decision" ? <span className="user-flow-kind">If</span> : null}
      <strong>{step.label}</strong>
      {step.detail ? <span>{step.detail}</span> : null}
    </div>
  );
}
