"use client";

import { useState } from "react";
import { saveSkillsAction } from "@/app/admin/actions";
import type { SkillDraft } from "@/lib/admin/drafts";

export function SkillsForm({
  initialSkills,
  initialEdges,
}: {
  initialSkills: SkillDraft[];
  initialEdges: string;
}) {
  const [skills, setSkills] = useState(initialSkills);
  const [edges, setEdges] = useState(initialEdges);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  function update(index: number, partial: Partial<SkillDraft>) {
    setSkills((current) => current.map((item, itemIndex) => (itemIndex === index ? { ...item, ...partial } : item)));
  }

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setStatus("saving");
    const result = await saveSkillsAction(skills, edges);
    setStatus(result.ok ? "saved" : "error");
    setError(result.ok ? "" : result.error);
  }

  return (
    <form className="admin-form" onSubmit={onSubmit}>
      {skills.map((skill, index) => (
        <fieldset key={skill.id}>
          <legend>{skill.name || skill.id}</legend>
          <p className="admin-hint">Id: {skill.id}</p>
          <div className="admin-grid">
            <label>
              Name
              <input value={skill.name} onChange={(event) => update(index, { name: event.target.value })} />
            </label>
            <label>
              Branch
              <input value={skill.branch} onChange={(event) => update(index, { branch: event.target.value })} />
            </label>
            <label>
              Level
              <input type="number" value={skill.level} onChange={(event) => update(index, { level: Number(event.target.value) })} />
            </label>
            <label>
              X
              <input type="number" value={skill.x} onChange={(event) => update(index, { x: Number(event.target.value) })} />
            </label>
            <label>
              Y
              <input type="number" value={skill.y} onChange={(event) => update(index, { y: Number(event.target.value) })} />
            </label>
          </div>
          <label>
            Description
            <textarea rows={3} value={skill.description} onChange={(event) => update(index, { description: event.target.value })} />
          </label>
          <label>
            Related project slugs
            <input value={skill.related_project_slugs} onChange={(event) => update(index, { related_project_slugs: event.target.value })} />
          </label>
          <button className="btn btn-secondary" type="button" onClick={() => setSkills((current) => current.filter((_, itemIndex) => itemIndex !== index))}>
            Remove
          </button>
        </fieldset>
      ))}
      <button
        className="btn btn-secondary"
        type="button"
        onClick={() =>
          setSkills((current) => [
            ...current,
            {
              id: `s-${crypto.randomUUID().slice(0, 8)}`,
              name: "",
              branch: "",
              level: 1,
              description: "",
              related_project_slugs: "",
              x: 50,
              y: 50,
            },
          ])
        }
      >
        Add skill
      </button>
      <label>
        Connections
        <textarea rows={8} value={edges} onChange={(event) => setEdges(event.target.value)} spellCheck={false} />
        <span className="admin-hint">One connection per line: parent-id -&gt; child-id</span>
      </label>
      <button className="btn btn-primary" type="submit" disabled={status === "saving"}>
        {status === "saving" ? "Saving…" : "Save skills"}
      </button>
      {status === "saved" && <p className="form-status ok">Saved.</p>}
      {error && <p className="form-status error">{error}</p>}
    </form>
  );
}
