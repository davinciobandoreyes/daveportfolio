import type {
  ArtifactType,
  DesignDecision,
  Education,
  ImpactMetric,
  ProfileLinks,
  ProjectCategory,
  StarCase,
} from "@/lib/types";

export type ProfileDraft = {
  name: string;
  title: string;
  bio: string;
  email: string;
  location: string;
  links: ProfileLinks;
  languages: string;
  highlights: ImpactMetric[];
  education: Education;
};

export type ArtifactDraft = {
  id: string;
  type: ArtifactType;
  title: string;
  body: string;
  image_url: string;
  group: string;
  device: "" | "iphone-16";
  sort: number;
};

export type ProjectDraft = {
  id: string;
  slug: string;
  title: string;
  client: string;
  company_url: string;
  role: string;
  summary: string;
  categories: ProjectCategory[];
  platforms: string;
  cover_url: string;
  sort: number;
  published: boolean;
  brief: string;
  problem: string;
  goals: string;
  methodologies: string;
  technologies: string;
  leadership: string;
  impact_metrics: ImpactMetric[];
  decisions: DesignDecision[];
  process: string;
  benchmark: string;
  journey: string;
  insight: string;
  star: StarCase;
  artifacts: ArtifactDraft[];
};

export type ExperienceDraft = {
  id: string;
  company: string;
  role: string;
  dates: string;
  location: string;
  bullets: string;
  sort: number;
};

export type SkillDraft = {
  id: string;
  name: string;
  branch: string;
  level: number;
  description: string;
  related_project_slugs: string;
  x: number;
  y: number;
};

export type CertificationDraft = {
  id: string;
  name: string;
  issuer: string;
  issued_at: string;
  credential_id: string;
};

export type TestimonialDraft = {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar_url: string;
};

export type ActionResult = { ok: true } | { ok: false; error: string };
