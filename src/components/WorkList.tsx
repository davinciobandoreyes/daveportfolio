"use client";

import Image from "next/image";
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

        <ul className="work-grid">
          {visible.map((project) => {
            const metrics = project.impact_metrics.slice(0, 2);

            return (
              <li key={project.id}>
                <Link
                  href={`/work/${project.slug}`}
                  className={`work-card work-card-${project.category}`}
                >
                  <div className="work-thumb">
                    {project.cover_url ? (
                      <Image
                        src={project.cover_url}
                        alt=""
                        fill
                        sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                        className="work-thumb-img"
                      />
                    ) : (
                      <div className="work-thumb-placeholder" aria-hidden>
                        <span className="work-thumb-category">
                          {project.category}
                        </span>
                        <span className="work-thumb-title">{project.title}</span>
                      </div>
                    )}
                  </div>

                  <div className="work-card-body">
                    <div className="work-meta">
                      <span className="work-client">{project.client}</span>
                      <span className="work-category">{project.category}</span>
                    </div>
                    <h3>{project.title}</h3>

                    {metrics.length > 0 && (
                      <ul className="work-metrics">
                        {metrics.map((metric) => (
                          <li key={`${metric.label}-${metric.value}`}>
                            <span className="work-metric-value">
                              {metric.value}
                            </span>
                            <span className="work-metric-label">
                              {metric.label}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <p className="work-card-summary">{project.summary}</p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
