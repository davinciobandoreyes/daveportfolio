import Link from "next/link";
import type { Profile } from "@/lib/types";
import { ProfileLinks } from "./ProfileLinks";

export function SiteFooter({ profile }: { profile: Profile }) {
  return (
    <footer className="site-footer">
      <div className="section-inner footer-grid">
        <div>
          <p className="footer-name">{profile.name}</p>
          <p className="muted">
            {profile.title} · {profile.location}
          </p>
        </div>
        <div className="footer-links">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <ProfileLinks links={profile.links} variant="inline" />
          <Link href="/#contact">Contact</Link>
        </div>
        <p className="footer-copy muted">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
