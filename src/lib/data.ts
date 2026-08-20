import {
  certifications as seedCerts,
  education,
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
  Experience,
  Profile,
  Project,
  ProjectArtifact,
  Skill,
  SkillEdge,
  Testimonial,
} from "./types";

export { education };

export async function getProfile(): Promise<Profile> {
  const supabase = getSupabase();
  if (!supabase) return seedProfile;

  const { data, error } = await supabase.from("profiles").select("*").limit(1).maybeSingle();
  if (error || !data) return seedProfile;
  const profile = data as Profile;
  return {
    ...profile,
    highlights: profile.highlights?.length ? profile.highlights : seedProfile.highlights,
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
  return data as Project[];
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
  return data as ProjectArtifact[];
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
    skills: skillsRes.data as Skill[],
    edges: (edgesRes.data as SkillEdge[]) ?? seedEdges,
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
