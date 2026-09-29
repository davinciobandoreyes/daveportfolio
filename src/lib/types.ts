export type ProfileLinks = {
  linkedin: string;
  cv_path: string;
  behance: string;
  medium: string;
};

export type ImpactMetric = {
  label: string;
  value: string;
  note?: string;
};

export type Education = {
  degree: string;
  school: string;
  years: string;
  note: string;
};

export type Profile = {
  name: string;
  title: string;
  bio: string;
  email: string;
  location: string;
  links: ProfileLinks;
  languages: string[];
  highlights?: ImpactMetric[];
  education?: Education;
};

export type ProjectCategory =
  | "edutech"
  | "healthtech"
  | "fintech"
  | "gaming"
  | "use-cases"
  | "automotive"
  | "ai";

export const PROJECT_CATEGORY_LABELS: Record<ProjectCategory, string> = {
  edutech: "Edutech",
  healthtech: "Health tech",
  fintech: "Fintech",
  gaming: "Gaming",
  "use-cases": "Use cases",
  automotive: "Automotive",
  ai: "AI",
};

export type StarCase = {
  title: string;
  situation: string;
  task: string;
  action: string;
  result: string;
};

export type DesignDecision = {
  title: string;
  why: string;
};

export type BenchmarkMark = "strong" | "partial" | "none";

export type BenchmarkRow = {
  name: string;
  highlight?: boolean;
  marks: BenchmarkMark[];
};

export type Benchmark = {
  lead: string;
  criteria: string[];
  rows: BenchmarkRow[];
};

export type UserJourneyStep = {
  title: string;
  emotion: string;
  goal: string;
  action: string;
  opportunity: string;
};

export type UserJourney = {
  title: string;
  lead: string;
  steps: UserJourneyStep[];
};

export type InsightTone = "violet" | "link" | "warning" | "cyan" | "mute";

export type InsightSlice = {
  label: string;
  value: number;
  tone: InsightTone;
  emphasis?: boolean;
};

export type ResearchInsight = {
  title: string;
  lead: string;
  insight: string;
  compare: {
    left: { value: string; label: string };
    right: { value: string; label: string };
  };
  slices: InsightSlice[];
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  client: string;
  company_url: string | null;
  role: string;
  summary: string;
  categories: ProjectCategory[];
  platforms: string[];
  cover_url: string | null;
  sort: number;
  published: boolean;
  brief: string | null;
  problem: string | null;
  goals?: string[];
  methodologies: string[];
  technologies: string[];
  leadership: string | null;
  impact_metrics: ImpactMetric[];
  process?: DesignProcess | null;
  decisions?: DesignDecision[];
  benchmark?: Benchmark | null;
  journey?: UserJourney | null;
  insight?: ResearchInsight | null;
  star?: StarCase | null;
};

export type DesignProcessStep = {
  label: string;
  emphasis?: boolean;
};

export type DesignProcessPhase = {
  id: string;
  title: string;
  space: "problem" | "solution";
  steps: DesignProcessStep[];
};

export type DesignProcess = {
  lead: string;
  phases: DesignProcessPhase[];
};

export type ArtifactType =
  | "ux_artifact"
  | "user_journey"
  | "handmade_draft"
  | "user_flow"
  | "low_fi"
  | "hi_fi";

export type ProjectArtifact = {
  id: string;
  project_id: string;
  type: ArtifactType;
  title: string;
  body: string | null;
  image_url: string | null;
  group?: string | null;
  /** Raw phone UI sits in a device frame. Boards that already include a device stay flat. */
  device?: "iphone-16";
  sort: number;
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  dates: string;
  bullets: string[];
  location: string | null;
  sort: number;
};

export type Skill = {
  id: string;
  name: string;
  branch: string;
  level: number;
  description: string;
  related_project_slugs: string[];
  x: number;
  y: number;
};

export type SkillEdge = {
  parent_id: string;
  child_id: string;
};

export type Certification = {
  id: string;
  name: string;
  issuer: string;
  issued_at: string;
  credential_id: string | null;
};

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  /** Optional portrait. Falls back to the default avatar until a photo is added. */
  avatar_url?: string | null;
};
