"use client";

import { useState } from "react";
import { saveProfileAction } from "@/app/admin/actions";
import type { ProfileDraft } from "@/lib/admin/drafts";

export function ProfileForm({ initial }: { initial: ProfileDraft }) {
  const [draft, setDraft] = useState(initial);
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [error, setError] = useState("");

  function patch(partial: Partial<ProfileDraft>) {
    setDraft((current) => ({ ...current, ...partial }));
  }

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setStatus("saving");
    const result = await saveProfileAction(draft);
    if (!result.ok) {
      setStatus("error");
      setError(result.error);
      return;
    }
    setStatus("saved");
    setError("");
  }

  return (
    <form className="admin-form" onSubmit={onSubmit}>
      <label>
        Name
        <input value={draft.name} onChange={(event) => patch({ name: event.target.value })} />
      </label>
      <label>
        Title
        <input value={draft.title} onChange={(event) => patch({ title: event.target.value })} />
      </label>
      <label>
        Bio
        <textarea rows={5} value={draft.bio} onChange={(event) => patch({ bio: event.target.value })} />
      </label>
      <label>
        Email
        <input value={draft.email} onChange={(event) => patch({ email: event.target.value })} />
      </label>
      <label>
        Location
        <input value={draft.location} onChange={(event) => patch({ location: event.target.value })} />
      </label>
      <div className="admin-grid">
        <label>
          LinkedIn
          <input value={draft.links.linkedin} onChange={(event) => patch({ links: { ...draft.links, linkedin: event.target.value } })} />
        </label>
        <label>
          CV path
          <input value={draft.links.cv_path} onChange={(event) => patch({ links: { ...draft.links, cv_path: event.target.value } })} />
        </label>
        <label>
          Behance
          <input value={draft.links.behance} onChange={(event) => patch({ links: { ...draft.links, behance: event.target.value } })} />
        </label>
        <label>
          Medium
          <input value={draft.links.medium} onChange={(event) => patch({ links: { ...draft.links, medium: event.target.value } })} />
        </label>
      </div>
      <label>
        Languages
        <textarea rows={3} value={draft.languages} onChange={(event) => patch({ languages: event.target.value })} />
        <span className="admin-hint">One language per line.</span>
      </label>

      <fieldset>
        <legend>Highlights</legend>
        {draft.highlights.map((item, index) => (
          <div className="admin-grid" key={index}>
            <label>
              Value
              <input
                value={item.value}
                onChange={(event) => {
                  const highlights = draft.highlights.slice();
                  highlights[index] = { ...item, value: event.target.value };
                  patch({ highlights });
                }}
              />
            </label>
            <label>
              Label
              <input
                value={item.label}
                onChange={(event) => {
                  const highlights = draft.highlights.slice();
                  highlights[index] = { ...item, label: event.target.value };
                  patch({ highlights });
                }}
              />
            </label>
          </div>
        ))}
        <button
          className="btn btn-secondary"
          type="button"
          onClick={() => patch({ highlights: [...draft.highlights, { value: "", label: "" }] })}
        >
          Add highlight
        </button>
      </fieldset>

      <fieldset>
        <legend>Education</legend>
        <label>
          Degree
          <input value={draft.education.degree} onChange={(event) => patch({ education: { ...draft.education, degree: event.target.value } })} />
        </label>
        <label>
          School
          <input value={draft.education.school} onChange={(event) => patch({ education: { ...draft.education, school: event.target.value } })} />
        </label>
        <label>
          Years
          <input value={draft.education.years} onChange={(event) => patch({ education: { ...draft.education, years: event.target.value } })} />
        </label>
        <label>
          Note
          <textarea rows={3} value={draft.education.note} onChange={(event) => patch({ education: { ...draft.education, note: event.target.value } })} />
        </label>
      </fieldset>

      <button className="btn btn-primary" type="submit" disabled={status === "saving"}>
        {status === "saving" ? "Saving…" : "Save profile"}
      </button>
      {status === "saved" && <p className="form-status ok">Saved.</p>}
      {status === "error" && <p className="form-status error">{error}</p>}
    </form>
  );
}
