"use client";

import { useState } from "react";
import type { Profile } from "@/lib/types";
import { ProfileLinks } from "./ProfileLinks";

export function Contact({ profile }: { profile: Profile }) {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">(
    "idle",
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      message: String(form.get("message") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("ok");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section">
      <div className="section-inner contact-grid">
        <div className="section-head">
          <h2>Contact</h2>
          <p className="section-lead">
            Have a project or role in mind? Send a note — or reach me directly.
          </p>
          <ul className="contact-links">
            <li>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <ProfileLinks links={profile.links} variant="inline" />
            </li>
            <li className="muted">{profile.location}</li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={onSubmit}>
          <label>
            Name
            <input name="name" type="text" required autoComplete="name" />
          </label>
          <label>
            Email
            <input name="email" type="email" required autoComplete="email" />
          </label>
          <label>
            Message
            <textarea name="message" rows={5} required />
          </label>
          <button
            className="btn btn-primary"
            type="submit"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending…" : "Send message"}
          </button>
          {status === "ok" && (
            <p className="form-status ok" role="status">
              Thanks — I&apos;ll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="form-status error" role="alert">
              Something went wrong. Email me at {profile.email} instead.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
