import { ProfileForm } from "@/components/admin/ProfileForm";
import { readProfileDraft } from "@/lib/admin/content";
import { missingDatabaseEnv } from "@/lib/supabase-admin";

export const dynamic = "force-dynamic";

export default async function ProfilePage() {
  if (missingDatabaseEnv().length) return <h1>Profile</h1>;
  const draft = await readProfileDraft();
  if (!draft) return <p>Profile has not been imported yet.</p>;

  return (
    <>
      <h1>Profile</h1>
      <ProfileForm initial={draft} />
    </>
  );
}
