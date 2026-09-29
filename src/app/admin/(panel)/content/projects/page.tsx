import { ProjectList } from "@/components/admin/ProjectList";
import { listProjects } from "@/lib/admin/content";
import { missingDatabaseEnv } from "@/lib/supabase-admin";

export const dynamic = "force-dynamic";

export default async function ProjectsPage() {
  if (missingDatabaseEnv().length) return <h1>Projects</h1>;
  const projects = await listProjects();

  return (
    <>
      <h1>Projects</h1>
      <ProjectList projects={projects} />
    </>
  );
}
