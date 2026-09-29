"use client";

import { useState } from "react";
import { saveExperiencesAction } from "@/app/admin/actions";
import type { ExperienceDraft } from "@/lib/admin/drafts";

export function ExperienceForm({ initial }: { initial: ExperienceDraft[] }) {
  const [items, setItems] = useState(initial);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  function update(index: number, partial: Partial<ExperienceDraft>) {
    setItems((current) => current.map((item, itemIndex) => (itemIndex === index ? { ...item, ...partial } : item)));
  }

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setStatus("saving");
    const result = await saveExperiencesAction(items);
    setStatus(result.ok ? "saved" : "error");
    setError(result.ok ? "" : result.error);
  }

  return (
    <form className="admin-form" onSubmit={onSubmit}>
      {items.map((item, index) => (
        <fieldset key={item.id}>
          <legend>{item.company || "Role"}</legend>
          <div className="admin-grid">
            <label>
              Company
              <input value={item.company} onChange={(event) => update(index, { company: event.target.value })} />
            </label>
            <label>
              Role
              <input value={item.role} onChange={(event) => update(index, { role: event.target.value })} />
            </label>
            <label>
              Dates
              <input value={item.dates} onChange={(event) => update(index, { dates: event.target.value })} />
            </label>
            <label>
              Location
              <input value={item.location} onChange={(event) => update(index, { location: event.target.value })} />
            </label>
            <label>
              Sort
              <input type="number" value={item.sort} onChange={(event) => update(index, { sort: Number(event.target.value) })} />
            </label>
          </div>
          <label>
            Bullets
            <textarea rows={4} value={item.bullets} onChange={(event) => update(index, { bullets: event.target.value })} />
          </label>
          <button className="btn btn-secondary" type="button" onClick={() => setItems((current) => current.filter((_, itemIndex) => itemIndex !== index))}>
            Remove
          </button>
        </fieldset>
      ))}
      <button
        className="btn btn-secondary"
        type="button"
        onClick={() =>
          setItems((current) => [
            ...current,
            { id: `e-${crypto.randomUUID().slice(0, 8)}`, company: "", role: "", dates: "", location: "", bullets: "", sort: current.length + 1 },
          ])
        }
      >
        Add role
      </button>
      <button className="btn btn-primary" type="submit" disabled={status === "saving"}>
        {status === "saving" ? "Saving…" : "Save experience"}
      </button>
      {status === "saved" && <p className="form-status ok">Saved.</p>}
      {error && <p className="form-status error">{error}</p>}
    </form>
  );
}
