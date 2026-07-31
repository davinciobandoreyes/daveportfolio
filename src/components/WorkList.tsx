"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Project, ProjectCategory } from "@/lib/types";

const filters: { id: "all" | ProjectCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "product", label: "Product" },
  { id: "gaming", label: "Gaming" },
  { id: "fintech", label: "Fintech" },
  { id: "automotive", label: "Automotive" },
];

export function WorkList({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<"all" | ProjectCategory>("all");

  const visible = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter, projects]);

  return (
    <section id="work" className="section">
      <div className="section-inner">
        <div className="section-head">
          <h2>Work</h2>
          <p className="section-lead">
            Selected product and UX work across learning, games, fintech, and
            automotive.
          </p>
        </div>

        <div className="filter-row" role="tablist" aria-label="Filter work">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={filter === f.id}
              className={`filter-chip ${filter === f.id ? "is-active" : ""}`}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <ul className="work-list">
          {visible.map((project) => (
            <li key={project.id}>
              <Link href={`/work/${project.slug}`} className="work-row">
                <div className="work-meta">
                  <span className="work-client">{project.client}</span>
                  <span className="work-category">{project.category}</span>
                </div>
                <div className="work-main">
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                </div>
                <span className="work-arrow" aria-hidden>
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
