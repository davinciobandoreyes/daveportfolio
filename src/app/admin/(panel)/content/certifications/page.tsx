import { CertificationsForm } from "@/components/admin/CertificationsForm";
import { readCertifications } from "@/lib/admin/content";
import { missingDatabaseEnv } from "@/lib/supabase-admin";

export const dynamic = "force-dynamic";

export default async function CertificationsPage() {
  if (missingDatabaseEnv().length) return <h1>Certifications</h1>;
  const items = await readCertifications();

  return (
    <>
      <h1>Certifications</h1>
      <CertificationsForm initial={items} />
    </>
  );
}
