"use client";

import { useState } from "react";
import { saveCertificationsAction } from "@/app/admin/actions";
import type { CertificationDraft } from "@/lib/admin/drafts";

export function CertificationsForm({ initial }: { initial: CertificationDraft[] }) {
  const [items, setItems] = useState(initial);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  function update(index: number, partial: Partial<CertificationDraft>) {
    setItems((current) => current.map((item, itemIndex) => (itemIndex === index ? { ...item, ...partial } : item)));
  }

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setStatus("saving");
    const result = await saveCertificationsAction(items);
    setStatus(result.ok ? "saved" : "error");
    setError(result.ok ? "" : result.error);
  }

  return (
    <form className="admin-form" onSubmit={onSubmit}>
      {items.map((item, index) => (
        <fieldset key={item.id}>
          <div className="admin-grid">
            <label>
              Name
              <input value={item.name} onChange={(event) => update(index, { name: event.target.value })} />
            </label>
            <label>
              Issuer
              <input value={item.issuer} onChange={(event) => update(index, { issuer: event.target.value })} />
            </label>
            <label>
              Issued
              <input value={item.issued_at} onChange={(event) => update(index, { issued_at: event.target.value })} />
            </label>
            <label>
              Credential id
              <input value={item.credential_id} onChange={(event) => update(index, { credential_id: event.target.value })} />
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
            { id: `c-${crypto.randomUUID().slice(0, 8)}`, name: "", issuer: "", issued_at: "", credential_id: "" },
          ])
        }
      >
        Add certification
      </button>
      <button className="btn btn-primary" type="submit" disabled={status === "saving"}>
        {status === "saving" ? "Saving…" : "Save certifications"}
      </button>
      {status === "saved" && <p className="form-status ok">Saved.</p>}
      {error && <p className="form-status error">{error}</p>}
    </form>
  );
}
