-- Admin content fields and first-party analytics.
-- Public roles cannot read or insert analytics_events.
-- The app writes events and content with the service-role key.

alter table profiles
  add column if not exists highlights jsonb not null default '[]'::jsonb;

alter table profiles
  add column if not exists education jsonb;

alter table testimonials
  add column if not exists avatar_url text;

alter table project_artifacts
  add column if not exists device text;

create table if not exists analytics_events (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  type text not null check (type in ('pageview', 'click')),
  path text not null,
  event_name text,
  referrer_host text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  session_id text not null
);

create index if not exists analytics_events_created_at_idx
  on analytics_events (created_at desc);

create index if not exists analytics_events_session_idx
  on analytics_events (session_id);

alter table analytics_events enable row level security;
