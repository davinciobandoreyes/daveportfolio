import Link from "next/link";
import { notFound } from "next/navigation";
import { ArtifactGallery } from "@/components/case-study/ArtifactGallery";
import { CaseStudyHeader } from "@/components/case-study/CaseStudyHeader";
import { CaseStudySection } from "@/components/case-study/CaseStudySection";
import { MetricsRow } from "@/components/case-study/MetricsRow";
import { PrevNext } from "@/components/case-study/PrevNext";
import {
  getProjectArtifacts,
  getProjectBySlug,
  getProjects,
} from "@/lib/data";
import type { ArtifactType, ProjectArtifact } from "@/lib/types";

type Props = {
  params: Promise<{ slug: string }>;
};

function byType(artifacts: ProjectArtifact[], type: ArtifactType) {
  return artifacts.filter((a) => a.type === type);
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.title} · David Obando Reyes`,
    description: project.summary,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const projects = await getProjects();
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const artifacts = await getProjectArtifacts(project.id);
  const index = projects.findIndex((p) => p.id === project.id);
  const prev = index > 0 ? projects[index - 1] : null;
  const next = index < projects.length - 1 ? projects[index + 1] : null;

  return (
    <article className="case-page">
      <div className="case-page-inner">
        <Link href="/#work" className="back-link">
          ← All work
        </Link>

        <CaseStudyHeader project={project} />

        {project.brief && (
          <CaseStudySection title="Project brief">
            <p>{project.brief}</p>
          </CaseStudySection>
        )}

        {project.problem && (
          <CaseStudySection title="Problem to address">
            <p>{project.problem}</p>
          </CaseStudySection>
        )}

        {project.methodologies.length > 0 && (
          <CaseStudySection title="Design methodologies">
            <ul className="tag-list">
              {project.methodologies.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CaseStudySection>
        )}

        {byType(artifacts, "ux_artifact").length > 0 && (
          <CaseStudySection title="UX artifacts">
            <ArtifactGallery items={byType(artifacts, "ux_artifact")} />
          </CaseStudySection>
        )}

        {project.technologies.length > 0 && (
          <CaseStudySection title="Technologies used">
            <ul className="tag-list">
              {project.technologies.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CaseStudySection>
        )}

        {project.leadership && (
          <CaseStudySection title="Leadership & performance">
            <p>{project.leadership}</p>
          </CaseStudySection>
        )}

        {byType(artifacts, "user_journey").length > 0 && (
          <CaseStudySection title="User journeys">
            <ArtifactGallery items={byType(artifacts, "user_journey")} />
          </CaseStudySection>
        )}

        {byType(artifacts, "handmade_draft").length > 0 && (
          <CaseStudySection title="Handmade initial drafts">
            <ArtifactGallery items={byType(artifacts, "handmade_draft")} />
          </CaseStudySection>
        )}

        {byType(artifacts, "user_flow").length > 0 && (
          <CaseStudySection title="User flows">
            <ArtifactGallery items={byType(artifacts, "user_flow")} />
          </CaseStudySection>
        )}

        {byType(artifacts, "low_fi").length > 0 && (
          <CaseStudySection title="Low-fi mocks">
            <ArtifactGallery items={byType(artifacts, "low_fi")} />
          </CaseStudySection>
        )}

        {byType(artifacts, "hi_fi").length > 0 && (
          <CaseStudySection title="Hi-fi prototypes">
            <ArtifactGallery items={byType(artifacts, "hi_fi")} />
          </CaseStudySection>
        )}

        {project.impact_metrics.length > 0 && (
          <CaseStudySection title="Impacted metrics">
            <MetricsRow metrics={project.impact_metrics} />
          </CaseStudySection>
        )}

        <PrevNext prev={prev} next={next} />
      </div>
    </article>
  );
}
