import type { ProfileLinks as ProfileLinksType } from "@/lib/types";
import { BehanceIcon, CvIcon, LinkedInIcon, MediumIcon } from "./Icons";

type Variant = "inline" | "button" | "nav";

type Props = {
  links: ProfileLinksType;
  variant?: Variant;
  className?: string;
  showLabels?: boolean;
};

const items = [
  {
    key: "cv",
    label: "Download CV",
    short: "CV",
    icon: CvIcon,
    download: true,
    getHref: (links: ProfileLinksType) => links.cv_path,
    external: false,
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    short: "LinkedIn",
    icon: LinkedInIcon,
    download: false,
    getHref: (links: ProfileLinksType) => links.linkedin,
    external: true,
  },
  {
    key: "behance",
    label: "Behance",
    short: "Behance",
    icon: BehanceIcon,
    download: false,
    getHref: (links: ProfileLinksType) => links.behance,
    external: true,
  },
  {
    key: "medium",
    label: "Medium",
    short: "Medium",
    icon: MediumIcon,
    download: false,
    getHref: (links: ProfileLinksType) => links.medium,
    external: true,
  },
] as const;

export function ProfileLinks({
  links,
  variant = "inline",
  className = "",
  showLabels = true,
}: Props) {
  return (
    <div className={`profile-links profile-links-${variant} ${className}`}>
      {items.map((item) => {
        const Icon = item.icon;
        const href = item.getHref(links);
        const classNameForVariant =
          variant === "button" ? "btn btn-ghost btn-with-icon" : "link-with-icon";

        return (
          <a
            key={item.key}
            href={href}
            className={classNameForVariant}
            {...(item.download ? { download: true } : {})}
            {...(item.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            <Icon className="link-icon" />
            {showLabels && <span>{variant === "nav" ? item.short : item.label}</span>}
            {!showLabels && <span className="sr-only">{item.label}</span>}
          </a>
        );
      })}
    </div>
  );
}
