# David Obando Reyes — Portfolio

UX Engineer portfolio built with **Next.js**, **Tailwind CSS**, and optional **Supabase**.

Inspired by a clean editorial layout (work-first), with:

- Light / dark mode
- Interactive skill tree (+ list view)
- Full case-study pages
- LinkedIn + CV download
- Contact form (Supabase or local log in draft mode)

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The site ships with seeded content from your CV and LinkedIn in `src/lib/seed.ts`. Supabase is optional for the first draft.

## Downloads

- CV: [`/david-obando-reyes-cv.pdf`](./public/david-obando-reyes-cv.pdf)
- LinkedIn: https://www.linkedin.com/in/davidobandor/

## Supabase (optional)

1. Create a Supabase project.
2. Run [`supabase/migrations/001_init.sql`](./supabase/migrations/001_init.sql) in the SQL editor.
3. Copy `.env.example` → `.env.local` and fill in URL + anon key.
4. Insert rows matching the shape in `src/lib/seed.ts` (or keep using seed until you migrate).

Public tables are read-only via RLS. `contact_messages` allows public inserts only.

## Scripts

| Command       | Description        |
| ------------- | ------------------ |
| `npm run dev` | Local development  |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | ESLint             |

## Content editing

- Without Supabase: edit `src/lib/seed.ts`
- With Supabase: edit tables in the Supabase dashboard
- Case-study images: upload to a Storage bucket and set `image_url` on `project_artifacts`
- Work thumbnails: add images under `public/work/` (e.g. `public/work/fortnite-locker.jpg`) and set each project’s `cover_url` in `src/lib/seed.ts` (e.g. `"/work/fortnite-locker.jpg"`). Until then, category placeholders render automatically.
