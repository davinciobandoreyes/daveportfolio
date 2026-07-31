type IconProps = {
  className?: string;
};

const base = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true as const,
  focusable: false as const,
};

export function CvIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8" />
      <path d="M8 17h5" />
    </svg>
  );
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width={16}
      height={16}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      focusable={false}
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.23 0z" />
    </svg>
  );
}

export function BehanceIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width={16}
      height={16}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      focusable={false}
    >
      <path d="M22 7h-7V5.5h7V7zM10.5 10.8c.7-.4 1.1-1 1.1-1.9C11.6 7.2 10.3 6 8.1 6H3v12.1h5.3c2.5 0 4.1-1.3 4.1-3.4 0-1.4-.7-2.4-1.9-2.9zM5.8 8.3h2c1 0 1.6.5 1.6 1.3s-.6 1.3-1.6 1.3h-2V8.3zm2.2 7.4H5.8v-3h2.3c1.2 0 1.8.6 1.8 1.5s-.7 1.5-1.9 1.5zM19.5 10.4c-2.4 0-4.2 1.7-4.2 4.1 0 2.5 1.8 4.1 4.4 4.1 1.8 0 3.1-.7 3.8-2.1l-1.9-.8c-.4.7-1 1-1.8 1-1.1 0-1.9-.6-2.1-1.7h6.1c.1-.3.1-.7.1-1 0-2.4-1.5-4.6-4.4-4.6zm-2 3.2c.2-1.1 1-1.7 2-1.7 1.1 0 1.8.6 1.9 1.7h-3.9z" />
    </svg>
  );
}

export function MediumIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width={16}
      height={16}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      focusable={false}
    >
      <path d="M13.54 12a6.8 6.8 0 1 1-6.77-6.8 6.8 6.8 0 0 1 6.77 6.8zm7.42 0c0 3.54-1.51 6.42-3.38 6.42s-3.39-2.88-3.39-6.42 1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42zm3.04 0c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75c.66 0 1.19 2.58 1.19 5.75z" />
    </svg>
  );
}
