import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { SkillTree } from "@/components/SkillTree";
import { Testimonials } from "@/components/Testimonials";
import { WorkList } from "@/components/WorkList";
import {
  education,
  getCertifications,
  getExperiences,
  getProfile,
  getProjects,
  getSkills,
  getTestimonials,
} from "@/lib/data";

export default async function HomePage() {
  const [profile, projects, experiences, skillData, certifications, testimonials] =
    await Promise.all([
      getProfile(),
      getProjects(),
      getExperiences(),
      getSkills(),
      getCertifications(),
      getTestimonials(),
    ]);

  return (
    <>
      <Hero profile={profile} />
      <WorkList projects={projects} />
      <SkillTree skills={skillData.skills} edges={skillData.edges} />
      <Experience items={experiences} />
      <Testimonials items={testimonials} />
      <About
        profile={profile}
        certifications={certifications}
        education={education}
      />
      <Contact profile={profile} />
    </>
  );
}
