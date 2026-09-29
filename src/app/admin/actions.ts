"use server";

import { headers } from "next/headers";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { emailsMatch, verifyPassword } from "@/lib/admin-password";
import { adminAuthConfig, clearSession, getSession, setSession } from "@/lib/admin-session-server";
import { rateLimit } from "@/lib/rate-limit";
import {
  createProject,
  deleteProject,
  saveCertifications,
  saveExperiences,
  saveProfile,
  saveProject,
  saveSkills,
  saveTestimonials,
  updateProjectMeta,
} from "@/lib/admin/content";
import type {
  CertificationDraft,
  ExperienceDraft,
  ProfileDraft,
  ProjectDraft,
  SkillDraft,
  TestimonialDraft,
} from "@/lib/admin/drafts";

async function requireSession() {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");
}

function refreshContent() {
  revalidatePath("/", "layout");
  revalidatePath("/admin", "layout");
}

export async function login(formData: FormData) {
  const { email, passwordHash, missing } = adminAuthConfig();
  if (missing.length) redirect("/admin/login?error=config");

  const headerList = await headers();
  const ip = headerList.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (!rateLimit(`login:${ip}`, 8, 15 * 60 * 1000)) {
    redirect("/admin/login?error=rate");
  }

  const submittedEmail = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");
  const passwordOk = verifyPassword(password, passwordHash);
  const emailOk = emailsMatch(submittedEmail, email);
  if (!passwordOk || !emailOk) redirect("/admin/login?error=1");

  await setSession(email.trim().toLowerCase());
  redirect("/admin");
}

export async function logout() {
  await clearSession();
  redirect("/admin/login");
}

export async function saveProfileAction(draft: ProfileDraft) {
  await requireSession();
  const result = await saveProfile(draft);
  if (result.ok) refreshContent();
  return result;
}

export async function createProjectAction(title: string, slug: string) {
  await requireSession();
  const result = await createProject(title, slug);
  if (result.ok) refreshContent();
  return result;
}

export async function updateProjectMetaAction(id: string, sort: number, published: boolean) {
  await requireSession();
  const result = await updateProjectMeta(id, sort, published);
  if (result.ok) refreshContent();
  return result;
}

export async function deleteProjectAction(id: string) {
  await requireSession();
  const result = await deleteProject(id);
  if (result.ok) refreshContent();
  return result;
}

export async function saveProjectAction(draft: ProjectDraft) {
  await requireSession();
  const result = await saveProject(draft);
  if (result.ok) refreshContent();
  return result;
}

export async function saveExperiencesAction(items: ExperienceDraft[]) {
  await requireSession();
  const result = await saveExperiences(items);
  if (result.ok) refreshContent();
  return result;
}

export async function saveSkillsAction(skills: SkillDraft[], edges: string) {
  await requireSession();
  const result = await saveSkills(skills, edges);
  if (result.ok) refreshContent();
  return result;
}

export async function saveCertificationsAction(items: CertificationDraft[]) {
  await requireSession();
  const result = await saveCertifications(items);
  if (result.ok) refreshContent();
  return result;
}

export async function saveTestimonialsAction(items: TestimonialDraft[]) {
  await requireSession();
  const result = await saveTestimonials(items);
  if (result.ok) refreshContent();
  return result;
}
