"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Profile } from "@/lib/types";
import { BehanceIcon, CvIcon, LinkedInIcon, MediumIcon } from "./Icons";

export function Hero({ profile }: { profile: Profile }) {
  return (
    <section className="hero">
      <div className="hero-atmosphere" aria-hidden />
      <div className="section-inner hero-inner">
        <div className="hero-copy">
          <motion.p
            className="hero-role"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {profile.title}
          </motion.p>
          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            {profile.name}
          </motion.h1>
          <motion.p
            className="hero-bio"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
          >
            {profile.bio}
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="hero-cta-row hero-cta-primary">
              <a className="btn btn-primary" href="#work">
                View my portfolio
              </a>
              <a className="btn btn-secondary" href="#contact">
                Contact me
              </a>
            </div>

            <div className="hero-cta-row hero-cta-secondary">
              <a
                className="btn btn-ghost btn-with-icon"
                href={profile.links.cv_path}
                download
              >
                <CvIcon className="link-icon" />
                <span>Download my CV</span>
              </a>
              <a
                className="btn btn-ghost btn-with-icon"
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon className="link-icon" />
                <span>View my LinkedIn</span>
              </a>
            </div>

            <div className="hero-cta-row hero-cta-tertiary">
              <span className="hero-cta-also">Also check</span>
              <a
                className="link-with-icon"
                href={profile.links.behance}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BehanceIcon className="link-icon" />
                <span>Behance</span>
              </a>
              <a
                className="link-with-icon"
                href={profile.links.medium}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MediumIcon className="link-icon" />
                <span>Medium</span>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero-portrait"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <Image
            src="/david-obando-reyes.png"
            alt={`${profile.name} portrait`}
            fill
            sizes="(max-width: 800px) 220px, 280px"
            priority
            className="hero-portrait-img"
          />
        </motion.div>
      </div>
    </section>
  );
}
