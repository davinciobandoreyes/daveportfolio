import { SkillsForm } from "@/components/admin/SkillsForm";
import { readSkills } from "@/lib/admin/content";
import { missingDatabaseEnv } from "@/lib/supabase-admin";

export const dynamic = "force-dynamic";

export default async function SkillsPage() {
  if (missingDatabaseEnv().length) return <h1>Skills</h1>;
  const { skills, edges } = await readSkills();

  return (
    <>
      <h1>Skills</h1>
      <SkillsForm initialSkills={skills} initialEdges={edges} />
    </>
  );
}
