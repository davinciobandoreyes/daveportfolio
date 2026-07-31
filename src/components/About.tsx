import type { Certification, Profile } from "@/lib/types";
import { ProfileLinks } from "./ProfileLinks";

type Props = {
  profile: Profile;
  certifications: Certification[];
  education: {
    degree: string;
    school: string;
    years: string;
    note: string;
  };
};

export function About({ profile, certifications, education }: Props) {
  return (
    <section id="about" className="section">
      <div className="section-inner about-grid">
        <div className="section-head">
          <h2>About</h2>
          <p className="section-lead">{profile.bio}</p>
          <div className="about-actions">
            <ProfileLinks links={profile.links} variant="button" />
          </div>
        </div>

        <div className="about-blocks">
          <div>
            <h3>Education</h3>
            <p className="about-title">{education.degree}</p>
            <p>
              {education.school} · {education.years}
            </p>
            <p className="muted">{education.note}</p>
          </div>

          <div>
            <h3>Languages</h3>
            <ul className="plain-list">
              {profile.languages.map((lang) => (
                <li key={lang}>{lang}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Certifications</h3>
            <ul className="plain-list">
              {certifications.map((cert) => (
                <li key={cert.id}>
                  <strong>{cert.name}</strong>
                  <span className="muted">
                    {" "}
                    — {cert.issuer} · {cert.issued_at}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
