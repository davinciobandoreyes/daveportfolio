import { AdminNav } from "@/components/admin/AdminNav";

const items = [
  { href: "/admin/content", label: "Overview", exact: true },
  { href: "/admin/content/profile", label: "Profile" },
  { href: "/admin/content/projects", label: "Projects" },
  { href: "/admin/content/experience", label: "Experience" },
  { href: "/admin/content/skills", label: "Skills" },
  { href: "/admin/content/certifications", label: "Certifications" },
  { href: "/admin/content/testimonials", label: "Testimonials" },
  { href: "/admin/content/messages", label: "Messages" },
];

export default function ContentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="admin-content">
      <AdminNav items={items} label="Content" className="admin-subnav" />
      {children}
    </div>
  );
}
