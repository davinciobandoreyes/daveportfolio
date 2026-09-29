import { notFound } from "next/navigation";
import { ProjectForm } from "@/components/admin/ProjectForm";
import { readProjectDraft } from "@/lib/admin/content";
import { missingDatabaseEnv } from "@/lib/supabase-admin";

export const dynamic = "force-dynamic";

export default async function ProjectEditorPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  if (missingDatabaseEnv().length) return <h1>Project</h1>;
  const { id } = await params;
  const draft = await readProjectDraft(id);
  if (!draft) notFound();

  return (
    <>
      <h1>{draft.title}</h1>
      <ProjectForm initial={draft} />
    </>
  );
}
