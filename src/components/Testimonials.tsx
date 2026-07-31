import type { Testimonial } from "@/lib/types";

export function Testimonials({ items }: { items: Testimonial[] }) {
  if (!items.length) return null;

  return (
    <section id="testimonials" className="section">
      <div className="section-inner">
        <div className="section-head">
          <h2>Recommendations</h2>
          <p className="section-lead">
            Words from people I&apos;ve worked with on LinkedIn.
          </p>
        </div>
        <ul className="testimonial-list">
          {items.map((item) => (
            <li key={item.id} className="testimonial">
              <blockquote>“{item.quote}”</blockquote>
              <p className="testimonial-author">
                <strong>{item.author}</strong>
                <span className="muted">
                  {" "}
                  · {item.role}, {item.company}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
