import { getSupabaseAdmin } from "@/lib/supabase-admin";

export type AnalyticsRange = 7 | 30 | 90;

export type AnalyticsReport = {
  range: AnalyticsRange;
  truncated: boolean;
  visits: number;
  sessions: number;
  days: { date: string; count: number }[];
  paths: { label: string; count: number }[];
  clicks: { label: string; count: number }[];
  sources: { label: string; count: number }[];
  funnel: { label: string; count: number }[];
};

type EventRow = {
  created_at: string;
  type: "pageview" | "click";
  path: string;
  event_name: string | null;
  referrer_host: string | null;
  utm_source: string | null;
  session_id: string;
};

const FUNNEL = [
  "Visit the site",
  "Open a case study",
  "Click contact, CV, or LinkedIn",
  "Send the contact form",
] as const;

const CONTACT_CLICKS = new Set(["contact", "cv", "linkedin"]);

function sourceLabel(event: EventRow) {
  if (event.utm_source) return event.utm_source;
  if (event.referrer_host) return event.referrer_host;
  return "Direct";
}

function tally(labels: string[]) {
  const counts = new Map<string, number>();
  for (const label of labels) counts.set(label, (counts.get(label) ?? 0) + 1);
  return [...counts.entries()]
    .map(([label, count]) => ({ label, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 12);
}

function dayKey(iso: string) {
  return iso.slice(0, 10);
}

export function normalizeRange(value: string | undefined): AnalyticsRange {
  if (value === "7" || value === "90") return Number(value) as AnalyticsRange;
  return 30;
}

export async function getAnalytics(range: AnalyticsRange): Promise<AnalyticsReport | null> {
  const admin = getSupabaseAdmin();
  if (!admin) return null;

  const since = new Date(Date.now() - range * 24 * 60 * 60 * 1000).toISOString();
  const { data, error } = await admin
    .from("analytics_events")
    .select("created_at,type,path,event_name,referrer_host,utm_source,session_id")
    .gte("created_at", since)
    .order("created_at", { ascending: true })
    .limit(10000);

  if (error) throw new Error(error.message);
  const events = (data ?? []) as EventRow[];

  const pageviews = events.filter((event) => event.type === "pageview");
  const sessions = new Set(pageviews.map((event) => event.session_id));
  const bySession = new Map<string, EventRow[]>();
  for (const event of events) {
    const list = bySession.get(event.session_id) ?? [];
    list.push(event);
    bySession.set(event.session_id, list);
  }

  const funnelCounts = [0, 0, 0, 0];
  for (const list of bySession.values()) {
    const reached = [
      list.some((event) => event.type === "pageview"),
      list.some((event) => event.type === "pageview" && event.path.startsWith("/work/")),
      list.some(
        (event) =>
          event.type === "click" &&
          event.event_name != null &&
          CONTACT_CLICKS.has(event.event_name),
      ),
      list.some((event) => event.type === "click" && event.event_name === "contact-submit"),
    ];
    let open = true;
    reached.forEach((step, index) => {
      open = open && step;
      if (open) funnelCounts[index] += 1;
    });
  }

  const days: { date: string; count: number }[] = [];
  const cursor = new Date();
  cursor.setUTCHours(0, 0, 0, 0);
  cursor.setUTCDate(cursor.getUTCDate() - (range - 1));
  const dayCounts = new Map<string, number>();
  for (const event of pageviews) {
    const key = dayKey(event.created_at);
    dayCounts.set(key, (dayCounts.get(key) ?? 0) + 1);
  }
  for (let i = 0; i < range; i++) {
    const key = cursor.toISOString().slice(0, 10);
    days.push({ date: key, count: dayCounts.get(key) ?? 0 });
    cursor.setUTCDate(cursor.getUTCDate() + 1);
  }

  return {
    range,
    truncated: events.length >= 10000,
    visits: pageviews.length,
    sessions: sessions.size,
    days,
    paths: tally(pageviews.map((event) => event.path)),
    clicks: tally(
      events
        .filter((event) => event.type === "click" && event.event_name)
        .map((event) => event.event_name as string),
    ),
    sources: tally(pageviews.map(sourceLabel)),
    funnel: FUNNEL.map((label, index) => ({ label, count: funnelCounts[index] })),
  };
}
