import { ExperienceForm } from "@/components/admin/ExperienceForm";
import { readExperiences } from "@/lib/admin/content";
import { missingDatabaseEnv } from "@/lib/supabase-admin";

export const dynamic = "force-dynamic";

export default async function ExperiencePage() {
  if (missingDatabaseEnv().length) return <h1>Experience</h1>;
  const items = await readExperiences();

  return (
    <>
      <h1>Experience</h1>
      <ExperienceForm initial={items} />
    </>
  );
}
