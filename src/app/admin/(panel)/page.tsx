import Link from "next/link";
import { getAnalytics, normalizeRange } from "@/lib/admin/analytics";
import { missingDatabaseEnv } from "@/lib/supabase-admin";

export const dynamic = "force-dynamic";

function BarList({
  items,
  empty,
}: {
  items: { label: string; count: number }[];
  empty: string;
}) {
  if (!items.length) return <p className="admin-hint">{empty}</p>;
  const max = Math.max(...items.map((item) => item.count), 1);
  return (
    <ul className="admin-bars">
      {items.map((item) => (
        <li key={item.label}>
          <span>{item.label}</span>
          <span className="admin-bar-track" aria-hidden>
            <span style={{ width: `${(item.count / max) * 100}%` }} />
          </span>
          <strong>{item.count}</strong>
        </li>
      ))}
    </ul>
  );
}

export default async function AnalyticsPage({
  searchParams,
}: {
  searchParams: Promise<{ range?: string }>;
}) {
  const params = await searchParams;
  const range = normalizeRange(params.range);
  if (missingDatabaseEnv().length) {
    return <h1>Analytics</h1>;
  }

  let report: Awaited<ReturnType<typeof getAnalytics>> = null;
  let queryError: string | null = null;
  try {
    report = await getAnalytics(range);
  } catch (error) {
    queryError = error instanceof Error ? error.message : "Could not load analytics.";
  }

  const first = report?.funnel[0]?.count ?? 0;

  return (
    <>
      <header className="admin-page-head">
        <h1>Analytics</h1>
        <div className="admin-range" role="tablist" aria-label="Date range">
          {[7, 30, 90].map((days) => (
            <Link
              key={days}
              href={days === 30 ? "/admin" : `/admin?range=${days}`}
              className={range === days ? "is-active" : ""}
              role="tab"
              aria-selected={range === days}
            >
              {days} days
            </Link>
          ))}
        </div>
      </header>

      {queryError && (
        <p className="form-status error" role="alert">
          {queryError}
        </p>
      )}

      {report && (
        <>
          {report.truncated && (
            <p className="admin-hint">Showing the latest 10,000 events in this range.</p>
          )}
          <section className="admin-stats">
            <article>
              <p>Page visits</p>
              <strong>{report.visits}</strong>
            </article>
            <article>
              <p>Sessions</p>
              <strong>{report.sessions}</strong>
            </article>
          </section>

          <section className="admin-card">
            <h2>Visits by day</h2>
            <BarList items={report.days.map((day) => ({ label: day.date, count: day.count }))} empty="No visits in this range." />
          </section>

          <section className="admin-card">
            <h2>Top pages</h2>
            <BarList items={report.paths} empty="No page visits in this range." />
          </section>

          <section className="admin-card">
            <h2>Clicks</h2>
            <BarList items={report.clicks} empty="No tracked clicks in this range." />
          </section>

          <section className="admin-card">
            <h2>Sources</h2>
            <p className="admin-hint">
              UTM source when the link has one, otherwise the referring site.
            </p>
            <BarList items={report.sources} empty="No visits in this range." />
          </section>

          <section className="admin-card">
            <h2>Funnel</h2>
            <ol className="admin-funnel">
              {report.funnel.map((step) => (
                <li key={step.label}>
                  <span>{step.label}</span>
                  <strong>{step.count}</strong>
                  <em>{first ? `${Math.round((step.count / first) * 100)}%` : "0%"}</em>
                </li>
              ))}
            </ol>
          </section>
        </>
      )}
    </>
  );
}
