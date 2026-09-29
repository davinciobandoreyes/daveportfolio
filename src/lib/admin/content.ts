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
} from "@/lib/seed";
import { getSupabaseAdmin } from "@/lib/supabase-admin";
import type {
  ArtifactType,
  Benchmark,
  Certification,
  DesignProcess,
  Experience,
  Project,
  ProjectArtifact,
  ProjectCategory,
  ResearchInsight,
  Skill,
  SkillEdge,
  Testimonial,
  UserJourney,
} from "@/lib/types";
import type {
  CertificationDraft,
  ExperienceDraft,
  ProfileDraft,
  ProjectDraft,
  SkillDraft,
  TestimonialDraft,
} from "./drafts";

const CATEGORIES: ProjectCategory[] = [
  "edutech",
  "healthtech",
  "fintech",
  "gaming",
  "use-cases",
  "automotive",
  "ai",
];

const ARTIFACT_TYPES: ArtifactType[] = [
  "ux_artifact",
  "user_journey",
  "handmade_draft",
  "user_flow",
  "low_fi",
  "hi_fi",
];

const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function lines(value: string) {
  return value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function textList(value: string[] | null | undefined) {
  return (value ?? []).join("\n");
}

function blankToNull(value: string) {
  const trimmed = value.trim();
  return trimmed ? trimmed : null;
}

function parseJson<T>(label: string, value: string, check: (parsed: unknown) => parsed is T) {
  const trimmed = value.trim();
  if (!trimmed) return { value: null as T | null };
  let parsed: unknown;
  try {
    parsed = JSON.parse(trimmed);
  } catch {
    return { error: `${label} must be valid JSON.` };
  }
  if (!check(parsed)) return { error: `${label} does not match the expected shape.` };
  return { value: parsed };
}

function isProcess(value: unknown): value is DesignProcess {
  if (!value || typeof value !== "object") return false;
  const record = value as DesignProcess;
  return typeof record.lead === "string" && Array.isArray(record.phases);
}

function isBenchmark(value: unknown): value is Benchmark {
  if (!value || typeof value !== "object") return false;
  const record = value as Benchmark;
  return typeof record.lead === "string" && Array.isArray(record.criteria) && Array.isArray(record.rows);
}

function isJourney(value: unknown): value is UserJourney {
  if (!value || typeof value !== "object") return false;
  const record = value as UserJourney;
  return typeof record.title === "string" && typeof record.lead === "string" && Array.isArray(record.steps);
}

function isInsight(value: unknown): value is ResearchInsight {
  if (!value || typeof value !== "object") return false;
  const record = value as ResearchInsight;
  return (
    typeof record.title === "string" &&
    typeof record.lead === "string" &&
    typeof record.insight === "string" &&
    Array.isArray(record.slices)
  );
}

function pretty(value: unknown) {
  if (value == null) return "";
  return JSON.stringify(value, null, 2);
}

function admin() {
  const client = getSupabaseAdmin();
  if (!client) throw new Error("Supabase is not configured.");
  return client;
}

function fail(error: { message: string } | null) {
  if (!error) return null;
  return error.message;
}

export async function ensureSeeded() {
  const client = getSupabaseAdmin();
  if (!client) return { error: null as string | null };

  const existing = await client.from("profiles").select("id", { count: "exact", head: true });
  if (existing.error) return { error: existing.error.message };
  if ((existing.count ?? 0) > 0) return { error: null };

  const projectRows = seedProjects.map((project) => ({
    id: project.id,
    slug: project.slug,
    title: project.title,
    client: project.client,
    company_url: project.company_url,
    role: project.role,
    summary: project.summary,
    categories: project.categories,
    platforms: project.platforms,
    cover_url: project.cover_url,
    sort: project.sort,
    published: project.published,
    brief: project.brief,
    problem: project.problem,
    goals: project.goals ?? [],
    methodologies: project.methodologies,
    technologies: project.technologies,
    leadership: project.leadership,
    impact_metrics: project.impact_metrics,
    process: project.process ?? null,
    decisions: project.decisions ?? [],
    benchmark: project.benchmark ?? null,
    journey: project.journey ?? null,
    insight: project.insight ?? null,
    star: project.star ?? null,
  }));

  const steps = [
    client.from("projects").upsert(projectRows),
    client.from("project_artifacts").upsert(
      seedArtifacts.map((artifact) => ({
        id: artifact.id,
        project_id: artifact.project_id,
        type: artifact.type,
        title: artifact.title,
        body: artifact.body,
        image_url: artifact.image_url,
        sort: artifact.sort,
        group: artifact.group ?? null,
        device: artifact.device ?? null,
      })),
    ),
    client.from("experiences").upsert(seedExperiences),
    client.from("skills").upsert(seedSkills),
    client.from("skill_edges").upsert(seedEdges),
    client.from("certifications").upsert(seedCerts),
    client.from("testimonials").upsert(
      seedTestimonials.map((item) => ({
        ...item,
        avatar_url: item.avatar_url ?? null,
      })),
    ),
    client.from("profiles").insert({
      name: seedProfile.name,
      title: seedProfile.title,
      bio: seedProfile.bio,
      email: seedProfile.email,
      location: seedProfile.location,
      links: seedProfile.links,
      languages: seedProfile.languages,
      highlights: seedProfile.highlights ?? [],
      education: seedEducation,
    }),
  ];

  for (const step of steps) {
    const { error } = await step;
    if (error) return { error: error.message };
  }

  return { error: null };
}

export async function readProfileDraft(): Promise<ProfileDraft | null> {
  const client = getSupabaseAdmin();
  if (!client) return null;
  const { data, error } = await client.from("profiles").select("*").limit(1).maybeSingle();
  if (error) throw new Error(error.message);
  if (!data) return null;
  const education = data.education ?? { degree: "", school: "", years: "", note: "" };
  return {
    name: data.name ?? "",
    title: data.title ?? "",
    bio: data.bio ?? "",
    email: data.email ?? "",
    location: data.location ?? "",
    links: {
      linkedin: data.links?.linkedin ?? "",
      cv_path: data.links?.cv_path ?? "",
      behance: data.links?.behance ?? "",
      medium: data.links?.medium ?? "",
    },
    languages: textList(data.languages),
    highlights: Array.isArray(data.highlights) ? data.highlights : [],
    education: {
      degree: education.degree ?? "",
      school: education.school ?? "",
      years: education.years ?? "",
      note: education.note ?? "",
    },
  };
}

export async function saveProfile(draft: ProfileDraft) {
  const client = admin();
  const row = {
    name: draft.name.trim(),
    title: draft.title.trim(),
    bio: draft.bio.trim(),
    email: draft.email.trim(),
    location: draft.location.trim(),
    links: {
      linkedin: draft.links.linkedin.trim(),
      cv_path: draft.links.cv_path.trim(),
      behance: draft.links.behance.trim(),
      medium: draft.links.medium.trim(),
    },
    languages: lines(draft.languages),
    highlights: draft.highlights.filter((item) => item.value.trim() || item.label.trim()),
    education: {
      degree: draft.education.degree.trim(),
      school: draft.education.school.trim(),
      years: draft.education.years.trim(),
      note: draft.education.note.trim(),
    },
  };
  if (!row.name || !row.title || !row.bio || !row.email) {
    return { ok: false as const, error: "Name, title, bio, and email are required." };
  }

  const existing = await client.from("profiles").select("id").limit(1).maybeSingle();
  if (existing.error) return { ok: false as const, error: existing.error.message };
  const result = existing.data
    ? await client.from("profiles").update(row).eq("id", existing.data.id)
    : await client.from("profiles").insert(row);
  const error = fail(result.error);
  return error ? { ok: false as const, error } : { ok: true as const };
}

export async function listProjects() {
  const client = getSupabaseAdmin();
  if (!client) return [];
  const { data, error } = await client
    .from("projects")
    .select("id,title,slug,client,published,sort")
    .order("sort", { ascending: true });
  if (error) throw new Error(error.message);
  return (data ?? []) as Pick<Project, "id" | "title" | "slug" | "client" | "published" | "sort">[];
}

export async function createProject(title: string, slug: string) {
  const client = admin();
  const cleanSlug = slug.trim().toLowerCase();
  const cleanTitle = title.trim();
  if (!cleanTitle) return { ok: false as const, error: "Title is required." };
  if (!SLUG.test(cleanSlug)) {
    return { ok: false as const, error: "Slug must use lowercase letters, numbers, and hyphens." };
  }
  const id = `p-${cleanSlug}`;
  const { error } = await client.from("projects").insert({
    id,
    slug: cleanSlug,
    title: cleanTitle,
    client: cleanTitle,
    role: "UX Designer",
    summary: "",
    categories: [],
    platforms: [],
    sort: 0,
    published: false,
    methodologies: [],
    technologies: [],
    impact_metrics: [],
    goals: [],
    decisions: [],
  });
  if (error) return { ok: false as const, error: error.message };
  return { ok: true as const, id };
}

export async function updateProjectMeta(id: string, sort: number, published: boolean) {
  const client = admin();
  const { error } = await client.from("projects").update({ sort, published }).eq("id", id);
  return error ? { ok: false as const, error: error.message } : { ok: true as const };
}

export async function deleteProject(id: string) {
  const client = admin();
  const { error } = await client.from("projects").delete().eq("id", id);
  return error ? { ok: false as const, error: error.message } : { ok: true as const };
}

export async function readProjectDraft(id: string): Promise<ProjectDraft | null> {
  const client = getSupabaseAdmin();
  if (!client) return null;
  const [{ data, error }, artifacts] = await Promise.all([
    client.from("projects").select("*").eq("id", id).maybeSingle(),
    client.from("project_artifacts").select("*").eq("project_id", id).order("sort"),
  ]);
  if (error) throw new Error(error.message);
  if (artifacts.error) throw new Error(artifacts.error.message);
  if (!data) return null;
  const project = data as Project;
  const star = project.star ?? {
    title: "",
    situation: "",
    task: "",
    action: "",
    result: "",
  };
  return {
    id: project.id,
    slug: project.slug,
    title: project.title,
    client: project.client,
    company_url: project.company_url ?? "",
    role: project.role,
    summary: project.summary,
    categories: project.categories ?? [],
    platforms: textList(project.platforms),
    cover_url: project.cover_url ?? "",
    sort: project.sort,
    published: project.published,
    brief: project.brief ?? "",
    problem: project.problem ?? "",
    goals: textList(project.goals),
    methodologies: textList(project.methodologies),
    technologies: textList(project.technologies),
    leadership: project.leadership ?? "",
    impact_metrics: project.impact_metrics ?? [],
    decisions: project.decisions ?? [],
    process: pretty(project.process),
    benchmark: pretty(project.benchmark),
    journey: pretty(project.journey),
    insight: pretty(project.insight),
    star,
    artifacts: ((artifacts.data ?? []) as ProjectArtifact[]).map((artifact) => ({
      id: artifact.id,
      type: artifact.type,
      title: artifact.title,
      body: artifact.body ?? "",
      image_url: artifact.image_url ?? "",
      group: artifact.group ?? "",
      device: artifact.device === "iphone-16" ? "iphone-16" : "",
      sort: artifact.sort,
    })),
  };
}

export async function saveProject(draft: ProjectDraft) {
  const client = admin();
  const slug = draft.slug.trim().toLowerCase();
  if (!draft.title.trim() || !draft.client.trim() || !draft.role.trim()) {
    return { ok: false as const, error: "Title, client, and role are required." };
  }
  if (!SLUG.test(slug)) {
    return { ok: false as const, error: "Slug must use lowercase letters, numbers, and hyphens." };
  }
  const categories = draft.categories.filter((category) => CATEGORIES.includes(category));
  const process = parseJson("Process", draft.process, isProcess);
  if ("error" in process && process.error) return { ok: false as const, error: process.error };
  const benchmark = parseJson("Benchmark", draft.benchmark, isBenchmark);
  if ("error" in benchmark && benchmark.error) return { ok: false as const, error: benchmark.error };
  const journey = parseJson("Journey", draft.journey, isJourney);
  if ("error" in journey && journey.error) return { ok: false as const, error: journey.error };
  const insight = parseJson("Insight", draft.insight, isInsight);
  if ("error" in insight && insight.error) return { ok: false as const, error: insight.error };

  const starFields = [
    draft.star.title,
    draft.star.situation,
    draft.star.task,
    draft.star.action,
    draft.star.result,
  ].map((value) => value.trim());
  const star = starFields.some(Boolean)
    ? {
        title: starFields[0],
        situation: starFields[1],
        task: starFields[2],
        action: starFields[3],
        result: starFields[4],
      }
    : null;

  const { error } = await client
    .from("projects")
    .update({
      slug,
      title: draft.title.trim(),
      client: draft.client.trim(),
      company_url: blankToNull(draft.company_url),
      role: draft.role.trim(),
      summary: draft.summary.trim(),
      categories,
      platforms: lines(draft.platforms),
      cover_url: blankToNull(draft.cover_url),
      sort: Number(draft.sort) || 0,
      published: Boolean(draft.published),
      brief: blankToNull(draft.brief),
      problem: blankToNull(draft.problem),
      goals: lines(draft.goals),
      methodologies: lines(draft.methodologies),
      technologies: lines(draft.technologies),
      leadership: blankToNull(draft.leadership),
      impact_metrics: draft.impact_metrics.filter((item) => item.value.trim() || item.label.trim()),
      decisions: draft.decisions.filter((item) => item.title.trim() || item.why.trim()),
      process: process.value,
      benchmark: benchmark.value,
      journey: journey.value,
      insight: insight.value,
      star,
    })
    .eq("id", draft.id);
  if (error) return { ok: false as const, error: error.message };

  const artifacts = draft.artifacts.filter((artifact) => artifact.title.trim());
  const dropped = draft.artifacts.some(
    (artifact) =>
      !artifact.title.trim() &&
      (artifact.body.trim() || artifact.image_url.trim() || artifact.group.trim()),
  );
  if (dropped) {
    return { ok: false as const, error: "Each screen needs a title." };
  }
  for (const artifact of artifacts) {
    if (!ARTIFACT_TYPES.includes(artifact.type)) {
      return { ok: false as const, error: "An artifact has an unknown type." };
    }
  }

  const removed = await client.from("project_artifacts").delete().eq("project_id", draft.id);
  if (removed.error) return { ok: false as const, error: removed.error.message };
  if (artifacts.length) {
    const inserted = await client.from("project_artifacts").insert(
      artifacts.map((artifact) => ({
        id: artifact.id,
        project_id: draft.id,
        type: artifact.type,
        title: artifact.title.trim(),
        body: blankToNull(artifact.body),
        image_url: blankToNull(artifact.image_url),
        group: blankToNull(artifact.group),
        device: artifact.device || null,
        sort: Number(artifact.sort) || 0,
      })),
    );
    if (inserted.error) return { ok: false as const, error: inserted.error.message };
  }

  return { ok: true as const };
}

export async function readExperiences(): Promise<ExperienceDraft[]> {
  const client = getSupabaseAdmin();
  if (!client) return [];
  const { data, error } = await client.from("experiences").select("*").order("sort");
  if (error) throw new Error(error.message);
  return ((data ?? []) as Experience[]).map((item) => ({
    id: item.id,
    company: item.company,
    role: item.role,
    dates: item.dates,
    location: item.location ?? "",
    bullets: textList(item.bullets),
    sort: item.sort,
  }));
}

export async function saveExperiences(items: ExperienceDraft[]) {
  const client = admin();
  const rows = items
    .filter((item) => item.company.trim() && item.role.trim())
    .map((item) => ({
      id: item.id,
      company: item.company.trim(),
      role: item.role.trim(),
      dates: item.dates.trim(),
      location: blankToNull(item.location),
      bullets: lines(item.bullets),
      sort: Number(item.sort) || 0,
    }));
  const cleared = await client.from("experiences").delete().neq("id", "");
  if (cleared.error) return { ok: false as const, error: cleared.error.message };
  if (!rows.length) return { ok: true as const };
  const { error } = await client.from("experiences").insert(rows);
  return error ? { ok: false as const, error: error.message } : { ok: true as const };
}

export async function readSkills() {
  const client = getSupabaseAdmin();
  if (!client) return { skills: [] as SkillDraft[], edges: "" };
  const [skillsRes, edgesRes] = await Promise.all([
    client.from("skills").select("*"),
    client.from("skill_edges").select("*"),
  ]);
  if (skillsRes.error) throw new Error(skillsRes.error.message);
  if (edgesRes.error) throw new Error(edgesRes.error.message);
  const skills = ((skillsRes.data ?? []) as Skill[]).map((skill) => ({
    id: skill.id,
    name: skill.name,
    branch: skill.branch,
    level: Number(skill.level),
    description: skill.description,
    related_project_slugs: (skill.related_project_slugs ?? []).join(", "),
    x: Number(skill.x),
    y: Number(skill.y),
  }));
  const edges = ((edgesRes.data ?? []) as SkillEdge[])
    .map((edge) => `${edge.parent_id} -> ${edge.child_id}`)
    .join("\n");
  return { skills, edges };
}

export async function saveSkills(skills: SkillDraft[], edgesText: string) {
  const client = admin();
  const rows = skills
    .filter((skill) => skill.name.trim())
    .map((skill) => ({
      id: skill.id,
      name: skill.name.trim(),
      branch: skill.branch.trim() || "General",
      level: Number(skill.level) || 1,
      description: skill.description.trim(),
      related_project_slugs: skill.related_project_slugs
        .split(",")
        .map((slug) => slug.trim())
        .filter(Boolean),
      x: Number(skill.x) || 0,
      y: Number(skill.y) || 0,
    }));
  const ids = new Set(rows.map((skill) => skill.id));
  const edges = edgesText
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [parent, child] = line.split("->").map((part) => part.trim());
      return { parent_id: parent, child_id: child };
    });
  for (const edge of edges) {
    if (!edge.parent_id || !edge.child_id || !ids.has(edge.parent_id) || !ids.has(edge.child_id)) {
      return {
        ok: false as const,
        error: "Each edge must look like parent-id -> child-id and use skill ids in the list.",
      };
    }
  }

  const clearedEdges = await client.from("skill_edges").delete().neq("parent_id", "");
  if (clearedEdges.error) return { ok: false as const, error: clearedEdges.error.message };
  const clearedSkills = await client.from("skills").delete().neq("id", "");
  if (clearedSkills.error) return { ok: false as const, error: clearedSkills.error.message };
  if (rows.length) {
    const inserted = await client.from("skills").insert(rows);
    if (inserted.error) return { ok: false as const, error: inserted.error.message };
  }
  if (edges.length) {
    const inserted = await client.from("skill_edges").insert(edges);
    if (inserted.error) return { ok: false as const, error: inserted.error.message };
  }
  return { ok: true as const };
}

export async function readCertifications(): Promise<CertificationDraft[]> {
  const client = getSupabaseAdmin();
  if (!client) return [];
  const { data, error } = await client.from("certifications").select("*");
  if (error) throw new Error(error.message);
  return ((data ?? []) as Certification[]).map((item) => ({
    id: item.id,
    name: item.name,
    issuer: item.issuer,
    issued_at: item.issued_at,
    credential_id: item.credential_id ?? "",
  }));
}

export async function saveCertifications(items: CertificationDraft[]) {
  const client = admin();
  const rows = items
    .filter((item) => item.name.trim())
    .map((item) => ({
      id: item.id,
      name: item.name.trim(),
      issuer: item.issuer.trim(),
      issued_at: item.issued_at.trim(),
      credential_id: blankToNull(item.credential_id),
    }));
  const cleared = await client.from("certifications").delete().neq("id", "");
  if (cleared.error) return { ok: false as const, error: cleared.error.message };
  if (!rows.length) return { ok: true as const };
  const { error } = await client.from("certifications").insert(rows);
  return error ? { ok: false as const, error: error.message } : { ok: true as const };
}

export async function readTestimonials(): Promise<TestimonialDraft[]> {
  const client = getSupabaseAdmin();
  if (!client) return [];
  const { data, error } = await client.from("testimonials").select("*");
  if (error) throw new Error(error.message);
  return ((data ?? []) as Testimonial[]).map((item) => ({
    id: item.id,
    quote: item.quote,
    author: item.author,
    role: item.role,
    company: item.company,
    avatar_url: item.avatar_url ?? "",
  }));
}

export async function saveTestimonials(items: TestimonialDraft[]) {
  const client = admin();
  const rows = items
    .filter((item) => item.quote.trim() && item.author.trim())
    .map((item) => ({
      id: item.id,
      quote: item.quote.trim(),
      author: item.author.trim(),
      role: item.role.trim(),
      company: item.company.trim(),
      avatar_url: blankToNull(item.avatar_url),
    }));
  const cleared = await client.from("testimonials").delete().neq("id", "");
  if (cleared.error) return { ok: false as const, error: cleared.error.message };
  if (!rows.length) return { ok: true as const };
  const { error } = await client.from("testimonials").insert(rows);
  return error ? { ok: false as const, error: error.message } : { ok: true as const };
}

export async function readMessages() {
  const client = getSupabaseAdmin();
  if (!client) return [];
  const { data, error } = await client
    .from("contact_messages")
    .select("id,name,email,message,created_at")
    .order("created_at", { ascending: false })
    .limit(200);
  if (error) throw new Error(error.message);
  return (data ?? []) as {
    id: string;
    name: string;
    email: string;
    message: string;
    created_at: string;
  }[];
}
