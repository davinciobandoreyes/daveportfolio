"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { Skill, SkillEdge } from "@/lib/types";

type Props = {
  skills: Skill[];
  edges: SkillEdge[];
};

export function SkillTree({ skills, edges }: Props) {
  const [mode, setMode] = useState<"tree" | "list">("tree");
  const [activeId, setActiveId] = useState<string | null>(skills[0]?.id ?? null);

  const byId = useMemo(() => {
    const map = new Map(skills.map((s) => [s.id, s]));
    return map;
  }, [skills]);

  const active = activeId ? byId.get(activeId) : null;

  const branches = useMemo(() => {
    const map = new Map<string, Skill[]>();
    for (const skill of skills) {
      const list = map.get(skill.branch) ?? [];
      list.push(skill);
      map.set(skill.branch, list);
    }
    for (const list of map.values()) {
      list.sort((a, b) => a.level - b.level || a.name.localeCompare(b.name));
    }
    return [...map.entries()];
  }, [skills]);

  return (
    <section id="skills" className="section section-skills">
      <div className="section-inner">
        <div className="section-head section-head-row">
          <div>
            <h2>Skills</h2>
            <p className="section-lead">
              An interactive skill tree — explore branches, or switch to a plain
              list when you want to skim.
            </p>
          </div>
          <div className="mode-toggle" role="group" aria-label="Skills view">
            <button
              type="button"
              className={mode === "tree" ? "is-active" : ""}
              onClick={() => setMode("tree")}
            >
              Tree
            </button>
            <button
              type="button"
              className={mode === "list" ? "is-active" : ""}
              onClick={() => setMode("list")}
            >
              List
            </button>
          </div>
        </div>

        {mode === "tree" ? (
          <div className="skill-tree-layout">
            <div className="skill-canvas-wrap">
              <svg
                className="skill-canvas"
                viewBox="0 0 100 100"
                role="img"
                aria-label="Interactive skill tree"
              >
                {edges.map((edge) => {
                  const parent = byId.get(edge.parent_id);
                  const child = byId.get(edge.child_id);
                  if (!parent || !child) return null;
                  const lit =
                    activeId === parent.id || activeId === child.id;
                  return (
                    <line
                      key={`${edge.parent_id}-${edge.child_id}`}
                      x1={parent.x}
                      y1={parent.y}
                      x2={child.x}
                      y2={child.y}
                      className={`skill-edge ${lit ? "is-lit" : ""}`}
                    />
                  );
                })}
                {skills.map((skill) => (
                  <g
                    key={skill.id}
                    className={`skill-node ${activeId === skill.id ? "is-active" : ""} level-${skill.level}`}
                    onClick={() => setActiveId(skill.id)}
                    style={{ cursor: "pointer" }}
                  >
                    <circle cx={skill.x} cy={skill.y} r={2.8} />
                    <text
                      x={skill.x}
                      y={skill.y - 3.8}
                      textAnchor="middle"
                      className="skill-label"
                    >
                      {skill.name}
                    </text>
                  </g>
                ))}
              </svg>
            </div>

            <AnimatePresence mode="wait">
              {active && (
                <motion.aside
                  key={active.id}
                  className="skill-panel"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                  transition={{ duration: 0.25 }}
                >
                  <p className="skill-branch">{active.branch}</p>
                  <h3>{active.name}</h3>
                  <p>{active.description}</p>
                  {active.related_project_slugs.length > 0 && (
                    <div className="skill-related">
                      <p className="label">Related work</p>
                      <ul>
                        {active.related_project_slugs.map((slug) => (
                          <li key={slug}>
                            <Link href={`/work/${slug}`}>{slug}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.aside>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <div className="skill-list-view">
            {branches.map(([branch, items]) => (
              <div key={branch} className="skill-branch-block">
                <h3>{branch}</h3>
                <ul>
                  {items.map((skill) => (
                    <li key={skill.id}>
                      <strong>{skill.name}</strong>
                      <span className="muted"> — {skill.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
