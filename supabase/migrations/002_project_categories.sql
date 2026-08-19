-- Switch projects from a single category to a multi-category array.
-- Live content still comes from src/lib/seed.ts until this schema is applied.

alter table projects
  add column if not exists categories text[] not null default '{}';

update projects
set categories = array[category]
where cardinality(categories) = 0 and category is not null;

alter table projects
  drop column if exists category;
