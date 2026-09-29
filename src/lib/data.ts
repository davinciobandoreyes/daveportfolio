import {
  certifications as seedCerts,
  education as seedEducation,
  experiences as seedExperiences,
  profile as seedProfile,
  projectArtifacts as seedArtifacts,
  projects as seedProjects,
  skillEdges as seedEdges,
  skills as seedSkills,
  testimonials as seedTestimonials,
} from "./seed";
import { getSupabase } from "./supabase";
import type {
  Certification,
  Education,
  Experience,
  Profile,
  Project,
  ProjectArtifact,
  Skill,
  SkillEdge,
  Testimonial,
} from "./types";

const emptyEducation: Education = {
  degree: "",
  school: "",
  years: "",
  note: "",
};

function asEducation(value: unknown): Education {
  if (!value || typeof value !== "object") return emptyEducation;
  const record = value as Partial<Education>;
  return {
    degree: typeof record.degree === "string" ? record.degree : "",
    school: typeof record.school === "string" ? record.school : "",
    years: typeof record.years === "string" ? record.years : "",
    note: typeof record.note === "string" ? record.note : "",
  };
}

function seededProfile(): Profile {
  return { ...seedProfile, education: seedEducation };
}

function normalizeProject(project: Project): Project {
  return {
    ...project,
    categories: project.categories ?? [],
    platforms: project.platforms ?? [],
    methodologies: project.methodologies ?? [],
    technologies: project.technologies ?? [],
    goals: project.goals ?? [],
    impact_metrics: project.impact_metrics ?? [],
    decisions: project.decisions ?? [],
    process: project.process ?? null,
    benchmark: project.benchmark ?? null,
    journey: project.journey ?? null,
    insight: project.insight ?? null,
    star: project.star ?? null,
  };
}

function normalizeSkill(skill: Skill): Skill {
  return {
    ...skill,
    level: Number(skill.level),
    x: Number(skill.x),
    y: Number(skill.y),
    related_project_slugs: skill.related_project_slugs ?? [],
  };
}

export async function getProfile(): Promise<Profile> {
  const supabase = getSupabase();
  if (!supabase) return seededProfile();

  const { data, error } = await supabase.from("profiles").select("*").limit(1).maybeSingle();
  if (error || !data) return seededProfile();
  const profile = data as Profile & { education?: unknown };
  return {
    ...profile,
    highlights: Array.isArray(profile.highlights) ? profile.highlights : [],
    education: asEducation(profile.education),
  };
}

export async function getProjects(): Promise<Project[]> {
  const supabase = getSupabase();
  if (!supabase) return seedProjects.filter((p) => p.published);

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("published", true)
    .order("sort", { ascending: true });

  if (error || !data?.length) return seedProjects.filter((p) => p.published);
  return (data as Project[]).map(normalizeProject);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const projects = await getProjects();
  return projects.find((p) => p.slug === slug) ?? null;
}

export async function getProjectArtifacts(
  projectId: string,
): Promise<ProjectArtifact[]> {
  const supabase = getSupabase();
  if (!supabase) {
    return seedArtifacts
      .filter((a) => a.project_id === projectId)
      .sort((a, b) => a.sort - b.sort);
  }

  const { data, error } = await supabase
    .from("project_artifacts")
    .select("*")
    .eq("project_id", projectId)
    .order("sort", { ascending: true });

  if (error || !data) {
    return seedArtifacts
      .filter((a) => a.project_id === projectId)
      .sort((a, b) => a.sort - b.sort);
  }

  return (data as ProjectArtifact[])
    .map((artifact) => ({
      ...artifact,
      group: artifact.group ?? null,
    }))
    .sort((a, b) => a.sort - b.sort);
}

export async function getExperiences(): Promise<Experience[]> {
  const supabase = getSupabase();
  if (!supabase) return seedExperiences;

  const { data, error } = await supabase
    .from("experiences")
    .select("*")
    .order("sort", { ascending: true });

  if (error || !data?.length) return seedExperiences;
  return data as Experience[];
}

export async function getSkills(): Promise<{
  skills: Skill[];
  edges: SkillEdge[];
}> {
  const supabase = getSupabase();
  if (!supabase) return { skills: seedSkills, edges: seedEdges };

  const [skillsRes, edgesRes] = await Promise.all([
    supabase.from("skills").select("*"),
    supabase.from("skill_edges").select("*"),
  ]);

  if (skillsRes.error || !skillsRes.data?.length) {
    return { skills: seedSkills, edges: seedEdges };
  }

  return {
    skills: (skillsRes.data as Skill[]).map(normalizeSkill),
    edges: edgesRes.error ? [] : ((edgesRes.data as SkillEdge[]) ?? []),
  };
}

export async function getCertifications(): Promise<Certification[]> {
  const supabase = getSupabase();
  if (!supabase) return seedCerts;

  const { data, error } = await supabase
    .from("certifications")
    .select("*")
    .order("issued_at", { ascending: false });

  if (error || !data?.length) return seedCerts;
  return data as Certification[];
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const supabase = getSupabase();
  if (!supabase) return seedTestimonials;

  const { data, error } = await supabase.from("testimonials").select("*");
  if (error || !data?.length) return seedTestimonials;
  return data as Testimonial[];
}
