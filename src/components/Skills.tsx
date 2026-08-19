"use client";

import { useMemo, useState } from "react";
import type { Skill } from "@/lib/types";

export function Skills({ skills }: { skills: Skill[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);

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

  const active = skills.find((s) => s.id === activeId) ?? null;

  return (
    <section id="skills" className="section section-skills">
      <div className="section-inner">
        <div className="section-head">
          <h2>Skills</h2>
          <p className="section-lead">
            Craft, product, research, AI, and games — tap a skill to learn how
            it shows up in my work.
          </p>
        </div>

        <div className="skills-pill-layout">
          {branches.map(([branch, items]) => (
            <div key={branch} className="skills-branch">
              <h3>{branch}</h3>
              <ul className="skills-pills">
                {items.map((skill) => (
                  <li key={skill.id}>
                    <button
                      type="button"
                      className={`skill-pill level-${skill.level} ${
                        activeId === skill.id ? "is-active" : ""
                      }`}
                      onClick={() =>
                        setActiveId((id) =>
                          id === skill.id ? null : skill.id,
                        )
                      }
                      aria-pressed={activeId === skill.id}
                    >
                      {skill.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {active && (
          <div className="skill-pill-detail" role="status">
            <p className="skill-branch">{active.branch}</p>
            <h3>{active.name}</h3>
            <p>{active.description}</p>
          </div>
        )}
      </div>
    </section>
  );
}
