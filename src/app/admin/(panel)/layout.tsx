import { redirect } from "next/navigation";
import { AdminNav } from "@/components/admin/AdminNav";
import { SetupNotice } from "@/components/admin/SetupNotice";
import { ensureSeeded } from "@/lib/admin/content";
import { getSession } from "@/lib/admin-session-server";
import { missingDatabaseEnv } from "@/lib/supabase-admin";
import { logout } from "../actions";

export const dynamic = "force-dynamic";

export default async function AdminPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  if (!session) redirect("/admin/login");

  const missing = missingDatabaseEnv();
  const seeded = missing.length ? null : await ensureSeeded();

  return (
    <div className="admin-shell">
      <aside className="admin-side">
        <p className="admin-brand">Admin</p>
        <AdminNav
          label="Admin"
          items={[
            { href: "/admin", label: "Analytics", exact: true },
            { href: "/admin/content", label: "Content" },
          ]}
        />
        <form action={logout}>
          <button className="btn btn-secondary" type="submit">
            Log out
          </button>
        </form>
      </aside>
      <div className="admin-main">
        <SetupNotice missing={missing} />
        {seeded?.error && (
          <p className="form-status error" role="alert">
            Could not import the current site content. {seeded.error}
          </p>
        )}
        {children}
      </div>
    </div>
  );
}
