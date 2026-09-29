"use client";

import { useState } from "react";
import { saveTestimonialsAction } from "@/app/admin/actions";
import type { TestimonialDraft } from "@/lib/admin/drafts";

export function TestimonialsForm({ initial }: { initial: TestimonialDraft[] }) {
  const [items, setItems] = useState(initial);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  function update(index: number, partial: Partial<TestimonialDraft>) {
    setItems((current) => current.map((item, itemIndex) => (itemIndex === index ? { ...item, ...partial } : item)));
  }

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setStatus("saving");
    const result = await saveTestimonialsAction(items);
    setStatus(result.ok ? "saved" : "error");
    setError(result.ok ? "" : result.error);
  }

  return (
    <form className="admin-form" onSubmit={onSubmit}>
      {items.map((item, index) => (
        <fieldset key={item.id}>
          <label>
            Quote
            <textarea rows={5} value={item.quote} onChange={(event) => update(index, { quote: event.target.value })} />
          </label>
          <div className="admin-grid">
            <label>
              Author
              <input value={item.author} onChange={(event) => update(index, { author: event.target.value })} />
            </label>
            <label>
              Role
              <input value={item.role} onChange={(event) => update(index, { role: event.target.value })} />
            </label>
            <label>
              Company
              <input value={item.company} onChange={(event) => update(index, { company: event.target.value })} />
            </label>
            <label>
              Avatar URL
              <input value={item.avatar_url} onChange={(event) => update(index, { avatar_url: event.target.value })} />
            </label>
          </div>
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
            { id: `t-${crypto.randomUUID().slice(0, 8)}`, quote: "", author: "", role: "", company: "", avatar_url: "" },
          ])
        }
      >
        Add testimonial
      </button>
      <button className="btn btn-primary" type="submit" disabled={status === "saving"}>
        {status === "saving" ? "Saving…" : "Save testimonials"}
      </button>
      {status === "saved" && <p className="form-status ok">Saved.</p>}
      {error && <p className="form-status error">{error}</p>}
    </form>
  );
}
