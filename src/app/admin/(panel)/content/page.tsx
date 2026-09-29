import Link from "next/link";

const sections = [
  { href: "/admin/content/profile", title: "Profile", copy: "Name, bio, links, highlights, and education." },
  { href: "/admin/content/projects", title: "Projects", copy: "Case studies, screens, and publish state." },
  { href: "/admin/content/experience", title: "Experience", copy: "Roles and bullets." },
  { href: "/admin/content/skills", title: "Skills", copy: "Skill tree nodes and connections." },
  { href: "/admin/content/certifications", title: "Certifications", copy: "Credentials shown in About." },
  { href: "/admin/content/testimonials", title: "Testimonials", copy: "Recommendations." },
  { href: "/admin/content/messages", title: "Messages", copy: "Notes sent through the contact form." },
];

export default function ContentHomePage() {
  return (
    <>
      <h1>Content</h1>
      <ul className="admin-links">
        {sections.map((section) => (
          <li key={section.href}>
            <Link href={section.href}>
              <strong>{section.title}</strong>
              <span>{section.copy}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
