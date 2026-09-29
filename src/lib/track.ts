const ANALYTICS_COOKIE = "analytics_sid";

type TrackBody = {
  type: "pageview" | "click";
  path: string;
  event_name?: string | null;
  referrer?: string | null;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
};

function clean(value: unknown, max: number) {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed) return null;
  return trimmed.slice(0, max);
}

export function parseTrackBody(body: unknown): TrackBody | null {
  if (!body || typeof body !== "object") return null;
  const record = body as Record<string, unknown>;
  const type = record.type === "pageview" || record.type === "click" ? record.type : null;
  const path = clean(record.path, 300);
  if (!type || !path || !path.startsWith("/") || path.startsWith("//")) return null;
  if (path.startsWith("/admin") || path.startsWith("/api")) return null;

  const eventName = clean(record.event_name, 80);
  if (type === "click" && !eventName) return null;

  return {
    type,
    path,
    event_name: type === "click" ? eventName : null,
    referrer: clean(record.referrer, 500),
    utm_source: clean(record.utm_source, 120),
    utm_medium: clean(record.utm_medium, 120),
    utm_campaign: clean(record.utm_campaign, 120),
  };
}

export function referrerHost(referrer: string | null) {
  if (!referrer) return null;
  try {
    return new URL(referrer).host.slice(0, 200) || null;
  } catch {
    return null;
  }
}

export function readSessionId(cookieHeader: string | null) {
  if (!cookieHeader) return null;
  const parts = cookieHeader.split(";").map((part) => part.trim());
  const match = parts.find((part) => part.startsWith(`${ANALYTICS_COOKIE}=`));
  if (!match) return null;
  const value = decodeURIComponent(match.slice(ANALYTICS_COOKIE.length + 1));
  return /^[a-zA-Z0-9-]{8,80}$/.test(value) ? value : null;
}

export const analyticsCookie = {
  name: ANALYTICS_COOKIE,
  options: {
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  },
};
