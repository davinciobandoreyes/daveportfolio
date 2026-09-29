"use client";

import { useState } from "react";
import { saveProjectAction } from "@/app/admin/actions";
import type { ArtifactDraft, ProjectDraft } from "@/lib/admin/drafts";
import {
  PROJECT_CATEGORY_LABELS,
  type ArtifactType,
  type ProjectCategory,
} from "@/lib/types";

const artifactTypes: ArtifactType[] = [
  "ux_artifact",
  "user_journey",
  "handmade_draft",
  "user_flow",
  "low_fi",
  "hi_fi",
];

const categories = Object.keys(PROJECT_CATEGORY_LABELS) as ProjectCategory[];

export function ProjectForm({ initial }: { initial: ProjectDraft }) {
  const [draft, setDraft] = useState(initial);
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [error, setError] = useState("");

  function patch(partial: Partial<ProjectDraft>) {
    setDraft((current) => ({ ...current, ...partial }));
  }

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setStatus("saving");
    const result = await saveProjectAction(draft);
    if (!result.ok) {
      setStatus("error");
      setError(result.error);
      return;
    }
    setStatus("saved");
    setError("");
  }

  function updateArtifact(index: number, partial: Partial<ArtifactDraft>) {
    const artifacts = draft.artifacts.slice();
    artifacts[index] = { ...artifacts[index], ...partial };
    patch({ artifacts });
  }

  return (
    <form className="admin-form" onSubmit={onSubmit}>
      <fieldset>
        <legend>Overview</legend>
        <label>
          Title
          <input value={draft.title} onChange={(event) => patch({ title: event.target.value })} />
        </label>
        <div className="admin-grid">
          <label>
            Slug
            <input value={draft.slug} onChange={(event) => patch({ slug: event.target.value })} />
          </label>
          <label>
            Sort
            <input type="number" value={draft.sort} onChange={(event) => patch({ sort: Number(event.target.value) })} />
          </label>
        </div>
        <label>
          Client
          <input value={draft.client} onChange={(event) => patch({ client: event.target.value })} />
        </label>
        <label>
          Company URL
          <input value={draft.company_url} onChange={(event) => patch({ company_url: event.target.value })} />
        </label>
        <label>
          Role
          <input value={draft.role} onChange={(event) => patch({ role: event.target.value })} />
        </label>
        <label>
          Summary
          <textarea rows={3} value={draft.summary} onChange={(event) => patch({ summary: event.target.value })} />
        </label>
        <label>
          Cover image URL
          <input value={draft.cover_url} onChange={(event) => patch({ cover_url: event.target.value })} />
        </label>
        <label>
          Platforms
          <textarea rows={2} value={draft.platforms} onChange={(event) => patch({ platforms: event.target.value })} />
        </label>
        <fieldset>
          <legend>Categories</legend>
          <div className="admin-checks">
            {categories.map((category) => (
              <label key={category} className="admin-check">
                <input
                  type="checkbox"
                  checked={draft.categories.includes(category)}
                  onChange={(event) => {
                    const next = event.target.checked
                      ? [...draft.categories, category]
                      : draft.categories.filter((item) => item !== category);
                    patch({ categories: next });
                  }}
                />
                {PROJECT_CATEGORY_LABELS[category]}
              </label>
            ))}
          </div>
        </fieldset>
        <label className="admin-check">
          <input
            type="checkbox"
            checked={draft.published}
            onChange={(event) => patch({ published: event.target.checked })}
          />
          Published
        </label>
      </fieldset>

      <fieldset>
        <legend>Story</legend>
        <label>
          Brief
          <textarea rows={5} value={draft.brief} onChange={(event) => patch({ brief: event.target.value })} />
        </label>
        <label>
          Problem
          <textarea rows={5} value={draft.problem} onChange={(event) => patch({ problem: event.target.value })} />
        </label>
        <label>
          Goals
          <textarea rows={4} value={draft.goals} onChange={(event) => patch({ goals: event.target.value })} />
          <span className="admin-hint">One goal per line.</span>
        </label>
        <label>
          Leadership
          <textarea rows={4} value={draft.leadership} onChange={(event) => patch({ leadership: event.target.value })} />
        </label>
      </fieldset>

      <fieldset>
        <legend>Impact</legend>
        {draft.impact_metrics.map((metric, index) => (
          <div className="admin-grid" key={index}>
            <label>
              Value
              <input
                value={metric.value}
                onChange={(event) => {
                  const impact_metrics = draft.impact_metrics.slice();
                  impact_metrics[index] = { ...metric, value: event.target.value };
                  patch({ impact_metrics });
                }}
              />
            </label>
            <label>
              Label
              <input
                value={metric.label}
                onChange={(event) => {
                  const impact_metrics = draft.impact_metrics.slice();
                  impact_metrics[index] = { ...metric, label: event.target.value };
                  patch({ impact_metrics });
                }}
              />
            </label>
            <label>
              Note
              <input
                value={metric.note ?? ""}
                onChange={(event) => {
                  const impact_metrics = draft.impact_metrics.slice();
                  impact_metrics[index] = { ...metric, note: event.target.value };
                  patch({ impact_metrics });
                }}
              />
            </label>
          </div>
        ))}
        <button
          className="btn btn-secondary"
          type="button"
          onClick={() => patch({ impact_metrics: [...draft.impact_metrics, { value: "", label: "", note: "" }] })}
        >
          Add metric
        </button>
        <label>
          Insight JSON
          <textarea rows={8} value={draft.insight} onChange={(event) => patch({ insight: event.target.value })} spellCheck={false} />
          <span className="admin-hint">Object with title, lead, insight, compare, and slices. Leave empty to hide.</span>
        </label>
        <label>
          Benchmark JSON
          <textarea rows={8} value={draft.benchmark} onChange={(event) => patch({ benchmark: event.target.value })} spellCheck={false} />
          <span className="admin-hint">Object with lead, criteria, and rows. Marks are strong, partial, or none.</span>
        </label>
      </fieldset>

      <fieldset>
        <legend>Process</legend>
        <label>
          Methodologies
          <textarea rows={3} value={draft.methodologies} onChange={(event) => patch({ methodologies: event.target.value })} />
        </label>
        <label>
          Technologies
          <textarea rows={3} value={draft.technologies} onChange={(event) => patch({ technologies: event.target.value })} />
        </label>
        <label>
          Process JSON
          <textarea rows={8} value={draft.process} onChange={(event) => patch({ process: event.target.value })} spellCheck={false} />
          <span className="admin-hint">Object with lead and phases. Each phase has id, title, space (problem or solution), and steps.</span>
        </label>
        {draft.decisions.map((decision, index) => (
          <div key={index}>
            <label>
              Decision
              <input
                value={decision.title}
                onChange={(event) => {
                  const decisions = draft.decisions.slice();
                  decisions[index] = { ...decision, title: event.target.value };
                  patch({ decisions });
                }}
              />
            </label>
            <label>
              Why
              <textarea
                rows={3}
                value={decision.why}
                onChange={(event) => {
                  const decisions = draft.decisions.slice();
                  decisions[index] = { ...decision, why: event.target.value };
                  patch({ decisions });
                }}
              />
            </label>
          </div>
        ))}
        <button
          className="btn btn-secondary"
          type="button"
          onClick={() => patch({ decisions: [...draft.decisions, { title: "", why: "" }] })}
        >
          Add decision
        </button>
        <label>
          Journey JSON
          <textarea rows={8} value={draft.journey} onChange={(event) => patch({ journey: event.target.value })} spellCheck={false} />
          <span className="admin-hint">Object with title, lead, and steps (title, emotion, goal, action, opportunity).</span>
        </label>
      </fieldset>

      <fieldset>
        <legend>STAR</legend>
        {(["title", "situation", "task", "action", "result"] as const).map((field) => (
          <label key={field}>
            {field}
            <textarea
              rows={field === "title" ? 2 : 4}
              value={draft.star[field]}
              onChange={(event) => patch({ star: { ...draft.star, [field]: event.target.value } })}
            />
          </label>
        ))}
      </fieldset>

      <fieldset>
        <legend>Screens</legend>
        <p className="admin-hint">Image fields take a path such as /work/name.jpg or a full URL.</p>
        {draft.artifacts.map((artifact, index) => (
          <div className="admin-card" key={artifact.id}>
            <div className="admin-grid">
              <label>
                Title
                <input value={artifact.title} onChange={(event) => updateArtifact(index, { title: event.target.value })} />
              </label>
              <label>
                Type
                <select value={artifact.type} onChange={(event) => updateArtifact(index, { type: event.target.value as ArtifactType })}>
                  {artifactTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Group
                <input value={artifact.group} onChange={(event) => updateArtifact(index, { group: event.target.value })} />
              </label>
              <label>
                Sort
                <input type="number" value={artifact.sort} onChange={(event) => updateArtifact(index, { sort: Number(event.target.value) })} />
              </label>
            </div>
            <label>
              Body
              <textarea rows={3} value={artifact.body} onChange={(event) => updateArtifact(index, { body: event.target.value })} />
            </label>
            <label>
              Image URL
              <input value={artifact.image_url} onChange={(event) => updateArtifact(index, { image_url: event.target.value })} />
            </label>
            <label>
              Device
              <select
                value={artifact.device}
                onChange={(event) => updateArtifact(index, { device: event.target.value as "" | "iphone-16" })}
              >
                <option value="">None</option>
                <option value="iphone-16">iPhone 16</option>
              </select>
            </label>
            <button
              className="btn btn-secondary"
              type="button"
              onClick={() => patch({ artifacts: draft.artifacts.filter((_, item) => item !== index) })}
            >
              Remove screen
            </button>
          </div>
        ))}
        <button
          className="btn btn-secondary"
          type="button"
          onClick={() =>
            patch({
              artifacts: [
                ...draft.artifacts,
                {
                  id: `a-${crypto.randomUUID().slice(0, 8)}`,
                  type: "hi_fi",
                  title: "",
                  body: "",
                  image_url: "",
                  group: "",
                  device: "",
                  sort: draft.artifacts.length + 1,
                },
              ],
            })
          }
        >
          Add screen
        </button>
      </fieldset>

      <button className="btn btn-primary" type="submit" disabled={status === "saving"}>
        {status === "saving" ? "Saving…" : "Save project"}
      </button>
      {status === "saved" && <p className="form-status ok">Saved.</p>}
      {status === "error" && <p className="form-status error">{error}</p>}
    </form>
  );
}
