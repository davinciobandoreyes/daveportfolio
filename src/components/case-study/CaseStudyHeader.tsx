import type { Project } from "@/lib/types";

export function CaseStudyHeader({ project }: { project: Project }) {
  return (
    <header className="case-header">
      <p className="case-client">{project.client}</p>
      <h1>{project.title}</h1>
      <p className="case-summary">{project.summary}</p>
      <dl className="case-meta">
        <div>
          <dt>Role</dt>
          <dd>{project.role}</dd>
        </div>
        {project.platforms.length > 0 && (
          <div>
            <dt>Platforms</dt>
            <dd>{project.platforms.join(" · ")}</dd>
          </div>
        )}
        {project.company_url && (
          <div>
            <dt>Company</dt>
            <dd>
              <a
                href={project.company_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit site →
              </a>
            </dd>
          </div>
        )}
      </dl>
    </header>
  );
}
