-- Portfolio schema for David Obando Reyes
-- Run in Supabase SQL editor, then optionally migrate seed from src/lib/seed.ts

create extension if not exists "pgcrypto";

create table if not exists profiles (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  title text not null,
  bio text not null,
  email text not null,
  location text not null,
  links jsonb not null default '{}'::jsonb,
  languages text[] not null default '{}',
  created_at timestamptz not null default now()
);

create table if not exists projects (
  id text primary key,
  slug text unique not null,
  title text not null,
  client text not null,
  company_url text,
  role text not null,
  summary text not null,
  category text not null,
  platforms text[] not null default '{}',
  cover_url text,
  sort int not null default 0,
  published boolean not null default true,
  brief text,
  problem text,
  methodologies text[] not null default '{}',
  technologies text[] not null default '{}',
  leadership text,
  impact_metrics jsonb not null default '[]'::jsonb
);

create table if not exists project_artifacts (
  id text primary key,
  project_id text not null references projects(id) on delete cascade,
  type text not null check (
    type in (
      'ux_artifact',
      'user_journey',
      'handmade_draft',
      'user_flow',
      'low_fi',
      'hi_fi'
    )
  ),
  title text not null,
  body text,
  image_url text,
  sort int not null default 0
);

create table if not exists experiences (
  id text primary key,
  company text not null,
  role text not null,
  dates text not null,
  bullets text[] not null default '{}',
  location text,
  sort int not null default 0
);

create table if not exists skills (
  id text primary key,
  name text not null,
  branch text not null,
  level int not null default 1,
  description text not null,
  related_project_slugs text[] not null default '{}',
  x numeric not null,
  y numeric not null
);

create table if not exists skill_edges (
  parent_id text not null references skills(id) on delete cascade,
  child_id text not null references skills(id) on delete cascade,
  primary key (parent_id, child_id)
);

create table if not exists certifications (
  id text primary key,
  name text not null,
  issuer text not null,
  issued_at text not null,
  credential_id text
);

create table if not exists testimonials (
  id text primary key,
  quote text not null,
  author text not null,
  role text not null,
  company text not null
);

create table if not exists contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);

alter table profiles enable row level security;
alter table projects enable row level security;
alter table project_artifacts enable row level security;
alter table experiences enable row level security;
alter table skills enable row level security;
alter table skill_edges enable row level security;
alter table certifications enable row level security;
alter table testimonials enable row level security;
alter table contact_messages enable row level security;

create policy "Public read profiles" on profiles for select using (true);
create policy "Public read projects" on projects for select using (published = true);
create policy "Public read artifacts" on project_artifacts for select using (true);
create policy "Public read experiences" on experiences for select using (true);
create policy "Public read skills" on skills for select using (true);
create policy "Public read skill_edges" on skill_edges for select using (true);
create policy "Public read certifications" on certifications for select using (true);
create policy "Public read testimonials" on testimonials for select using (true);
create policy "Public insert contact" on contact_messages for insert with check (true);
