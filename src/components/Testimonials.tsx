"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon, UserIcon } from "./Icons";
import type { Testimonial } from "@/lib/types";
import Image from "next/image";

const DESKTOP_QUERY = "(min-width: 800px)";
const AUTOPLAY_MS = 5000;

export function Testimonials({ items }: { items: Testimonial[] }) {
  const reduceMotion = useReducedMotion();
  const perView = usePerView();
  const pageCount = Math.max(1, Math.ceil(items.length / perView));
  const [page, setPage] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [expandedCount, setExpandedCount] = useState(0);
  const [tabHidden, setTabHidden] = useState(false);

  useEffect(() => {
    setPage((current) => Math.min(current, pageCount - 1));
  }, [pageCount]);

  useEffect(() => {
    const onVisibility = () => setTabHidden(document.hidden);
    onVisibility();
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  const paused =
    Boolean(reduceMotion) || hovering || expandedCount > 0 || tabHidden;

  useEffect(() => {
    if (paused || pageCount <= 1) return;
    const id = window.setInterval(() => {
      setPage((current) => (current + 1) % pageCount);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [page, paused, pageCount]);

  if (!items.length) return null;

  const goTo = (next: number) => {
    setPage((next + pageCount) % pageCount);
  };

  return (
    <section id="testimonials" className="section">
      <div className="section-inner">
        <div className="section-head">
          <h2>Recommendations</h2>
          <p className="section-lead">
            Words from people I&apos;ve worked with on{" "}
            <a
              href="https://www.linkedin.com/in/davidobandor/details/recommendations/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>
        <div
          className="testimonial-slider"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          onFocusCapture={() => setHovering(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node)) {
              setHovering(false);
            }
          }}
        >
          <button
            type="button"
            className="testimonial-nav"
            aria-label="Previous recommendation"
            onClick={() => goTo(page - 1)}
          >
            <ChevronLeftIcon />
          </button>
          <div
            className="testimonial-viewport"
            role="region"
            aria-roledescription="carousel"
            aria-label="Recommendations"
            aria-live="polite"
          >
            <ul
              className="testimonial-list"
              style={{
                transform: `translateX(calc(-${page} * (100% + var(--space-lg))))`,
              }}
            >
              {items.map((item) => (
                <TestimonialCard
                  key={item.id}
                  item={item}
                  onExpandChange={(expanded) => {
                    setExpandedCount((count) => count + (expanded ? 1 : -1));
                  }}
                />
              ))}
            </ul>
          </div>
          <button
            type="button"
            className="testimonial-nav"
            aria-label="Next recommendation"
            onClick={() => goTo(page + 1)}
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  item,
  onExpandChange,
}: {
  item: Testimonial;
  onExpandChange: (expanded: boolean) => void;
}) {
  const cardRef = useRef<HTMLLIElement>(null);
  const quoteRef = useRef<HTMLQuoteElement>(null);
  const measureRef = useRef<HTMLQuoteElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [canExpand, setCanExpand] = useState(false);

  useLayoutEffect(() => {
    const card = cardRef.current;
    const quote = quoteRef.current;
    const measure = measureRef.current;
    if (!card || !quote || !measure) return;

    const checkOverflow = () => {
      if (expanded) return;
      setCanExpand(measure.scrollHeight > quote.clientHeight + 1);
    };

    checkOverflow();
    const observer = new ResizeObserver(checkOverflow);
    observer.observe(card);
    return () => observer.disconnect();
  }, [item.quote, expanded]);

  return (
    <li ref={cardRef} className="testimonial">
      <blockquote ref={measureRef} className="testimonial-measure" aria-hidden="true">
        “{item.quote}”
      </blockquote>
      <blockquote
        ref={quoteRef}
        className={expanded ? undefined : "is-clamped"}
      >
        “{item.quote}”
      </blockquote>
      {(canExpand || expanded) && (
        <button
          type="button"
          className="testimonial-more"
          aria-expanded={expanded}
          onClick={() => {
            const next = !expanded;
            setExpanded(next);
            onExpandChange(next);
          }}
        >
          {expanded ? "Less" : "More"}
        </button>
      )}
      <div className="testimonial-author">
        <TestimonialAvatar src={item.avatar_url} />
        <p className="testimonial-author-copy">
          <strong>{item.author}</strong>
          <span className="muted">
            {" "}
            · {item.role}, {item.company}
          </span>
        </p>
      </div>
    </li>
  );
}

function TestimonialAvatar({ src }: { src?: string | null }) {
  if (src) {
    return (
      <Image
        src={src}
        alt=""
        width={40}
        height={40}
        className="testimonial-avatar"
      />
    );
  }

  return (
    <span className="testimonial-avatar testimonial-avatar-default" aria-hidden>
      <UserIcon />
    </span>
  );
}

function usePerView() {
  const [perView, setPerView] = useState(1);

  useEffect(() => {
    const media = window.matchMedia(DESKTOP_QUERY);
    const update = () => setPerView(media.matches ? 2 : 1);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return perView;
}
