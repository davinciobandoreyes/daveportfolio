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

export type Profile = {
  name: string;
  title: string;
  bio: string;
  email: string;
  location: string;
  links: ProfileLinks;
  languages: string[];
  highlights?: ImpactMetric[];
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
  methodologies: string[];
  technologies: string[];
  leadership: string | null;
  impact_metrics: ImpactMetric[];
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
