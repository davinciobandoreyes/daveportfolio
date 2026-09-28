import Link from "next/link";
import { notFound } from "next/navigation";
import { ArtifactGallery } from "@/components/case-study/ArtifactGallery";
import { CaseStudyHeader } from "@/components/case-study/CaseStudyHeader";
import { CaseStudySection } from "@/components/case-study/CaseStudySection";
import { DesignProcessFlow } from "@/components/case-study/DesignProcessFlow";
import { MetricsRow } from "@/components/case-study/MetricsRow";
import { PrevNext } from "@/components/case-study/PrevNext";
import { BenchmarkTable } from "@/components/case-study/BenchmarkTable";
import { DesignDecisions } from "@/components/case-study/DesignDecisions";
import { StarCase } from "@/components/case-study/StarCase";
import { InsightMetrics } from "@/components/case-study/InsightMetrics";
import { ProductScenes } from "@/components/case-study/ProductScenes";
import { UserJourneyMap } from "@/components/case-study/UserJourneyMap";
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

function TagList({ items }: { items: string[] }) {
  if (!items.length) return null;
  return (
    <ul className="tag-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
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

  const insights = byType(artifacts, "ux_artifact");
  const journeys = byType(artifacts, "user_journey");
  const drafts = byType(artifacts, "handmade_draft");
  const flows = byType(artifacts, "user_flow");
  const lowFi = byType(artifacts, "low_fi");
  const screens = byType(artifacts, "hi_fi");
  const hasProcess = Boolean(project.process);
  const hasMethods = project.methodologies.length > 0;
  const hasTools = project.technologies.length > 0;

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

        {project.goals && project.goals.length > 0 && (
          <CaseStudySection title="Goals">
            <ul className="case-goals">
              {project.goals.map((goal) => (
                <li key={goal}>{goal}</li>
              ))}
            </ul>
          </CaseStudySection>
        )}

        {hasProcess && (
          <CaseStudySection title="Design process">
            <DesignProcessFlow process={project.process!} />
            {hasMethods && (
              <>
                <p className="case-goals-label">Methods</p>
                <TagList items={project.methodologies} />
              </>
            )}
            {hasTools && (
              <>
                <p className="case-goals-label">Tools</p>
                <TagList items={project.technologies} />
              </>
            )}
          </CaseStudySection>
        )}

        {!hasProcess && hasMethods && (
          <CaseStudySection title="Design methodologies">
            <TagList items={project.methodologies} />
          </CaseStudySection>
        )}

        {project.insight && (
          <CaseStudySection title="Research insights">
            <InsightMetrics insight={project.insight} />
          </CaseStudySection>
        )}

        {!project.insight && insights.length > 0 && (
          <CaseStudySection title="Research insights">
            <ArtifactGallery items={insights} />
          </CaseStudySection>
        )}

        {project.benchmark && (
          <CaseStudySection title="Competitive benchmark">
            <BenchmarkTable benchmark={project.benchmark} />
          </CaseStudySection>
        )}

        {project.journey && (
          <CaseStudySection title="User journeys">
            <UserJourneyMap journey={project.journey} />
          </CaseStudySection>
        )}

        {!project.journey && journeys.length > 0 && (
          <CaseStudySection title="User journeys">
            <ArtifactGallery items={journeys} />
          </CaseStudySection>
        )}

        {project.decisions && project.decisions.length > 0 && (
          <CaseStudySection title="Design decisions">
            <DesignDecisions decisions={project.decisions} />
          </CaseStudySection>
        )}

        {drafts.length > 0 && (
          <CaseStudySection title="Handmade drafts">
            <ArtifactGallery items={drafts} />
          </CaseStudySection>
        )}

        {flows.length > 0 && (
          <CaseStudySection title="User flows">
            <ArtifactGallery items={flows} />
          </CaseStudySection>
        )}

        {lowFi.length > 0 && (
          <CaseStudySection title="Low-fi mocks">
            <ArtifactGallery items={lowFi} />
          </CaseStudySection>
        )}

        {screens.length > 0 && (
          <CaseStudySection title="Product screens">
            <ProductScenes items={screens} />
          </CaseStudySection>
        )}

        {!hasProcess && hasTools && (
          <CaseStudySection title="Technologies used">
            <TagList items={project.technologies} />
          </CaseStudySection>
        )}

        {project.leadership && (
          <CaseStudySection title="Leadership & performance">
            <p>{project.leadership}</p>
          </CaseStudySection>
        )}

        {project.impact_metrics.length > 0 && (
          <CaseStudySection title="Impact">
            <MetricsRow metrics={project.impact_metrics} />
          </CaseStudySection>
        )}

        {project.star && (
          <CaseStudySection title="STAR case">
            <StarCase star={project.star} />
          </CaseStudySection>
        )}

        <PrevNext prev={prev} next={next} />
      </div>
    </article>
  );
}
