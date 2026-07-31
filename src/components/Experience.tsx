import type { Experience as ExperienceType } from "@/lib/types";

export function Experience({ items }: { items: ExperienceType[] }) {
  return (
    <section id="experience" className="section">
      <div className="section-inner">
        <div className="section-head">
          <h2>Experience</h2>
          <p className="section-lead">
            Product and UX roles across learning, games, fintech, and automotive.
          </p>
        </div>
        <ol className="experience-list">
          {items.map((item) => (
            <li key={item.id} className="experience-item">
              <div className="experience-meta">
                <p className="experience-dates">{item.dates}</p>
                {item.location && (
                  <p className="muted">{item.location}</p>
                )}
              </div>
              <div>
                <h3>{item.role}</h3>
                <p className="experience-company">{item.company}</p>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
