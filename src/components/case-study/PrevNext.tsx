import Link from "next/link";
import type { Project } from "@/lib/types";

export function PrevNext({
  prev,
  next,
}: {
  prev: Project | null;
  next: Project | null;
}) {
  return (
    <nav className="prev-next" aria-label="Other projects">
      {prev ? (
        <Link href={`/work/${prev.slug}`} className="prev-next-link">
          <span className="muted">Previous</span>
          <strong>{prev.title}</strong>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link href={`/work/${next.slug}`} className="prev-next-link next">
          <span className="muted">Next</span>
          <strong>{next.title}</strong>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
