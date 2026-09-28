-- Expand case studies with goals, STAR, design process, and artifact groups.
-- Live content still comes from src/lib/seed.ts until this schema is applied.

alter table projects
  add column if not exists goals text[] not null default '{}';

alter table projects
  add column if not exists star jsonb;

alter table projects
  add column if not exists process jsonb;

alter table projects
  add column if not exists decisions jsonb not null default '[]'::jsonb;

alter table projects
  add column if not exists benchmark jsonb;

alter table projects
  add column if not exists journey jsonb;

alter table projects
  add column if not exists insight jsonb;

alter table project_artifacts
  add column if not exists "group" text;
