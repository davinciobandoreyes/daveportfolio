# David Obando Reyes — Portfolio

UX Engineer portfolio built with **Next.js**, **Tailwind CSS**, and optional **Supabase**.

Inspired by a clean editorial layout (work-first), with:

- Light / dark mode
- Interactive skill tree (+ list view)
- Full case-study pages
- LinkedIn + CV download
- Contact form (Supabase or local log in draft mode; optional Resend email notify)

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
2. Run [`supabase/migrations/001_init.sql`](./supabase/migrations/001_init.sql) through [`004_admin_analytics.sql`](./supabase/migrations/004_admin_analytics.sql) in the SQL editor, in order.
3. Copy `.env.example` → `.env.local` and fill in the URL, anon key, and service-role key.
4. The first visit to `/admin` copies `src/lib/seed.ts` into those tables when the profile table is still empty.

Public tables are read-only via RLS. `contact_messages` allows public inserts only. Analytics events have no public policy; the server writes them with the service-role key.

## Contact email (optional, free)

Uses [Resend](https://resend.com) Free (3,000 emails/month). The form still works without it.

1. Create a free Resend account and an API key.
2. Add to `.env.local` (and your host’s env):

```
RESEND_API_KEY=re_xxxx
CONTACT_FROM_EMAIL=onboarding@resend.dev
CONTACT_TO_EMAIL=davidobandoreyes@gmail.com
```

3. **Local / first test:** keep `CONTACT_FROM_EMAIL=onboarding@resend.dev`. Resend only delivers those to the email on your Resend account.
4. **Production:** in Resend → Domains, verify your domain (DNS), then set `CONTACT_FROM_EMAIL` to an address on that domain (e.g. `hello@yourdomain.com`).
5. Submit the contact form once and confirm the message arrives. Reply in your inbox uses the visitor’s address (`reply_to`).

If Resend is down or misconfigured, the submission is still stored in Supabase (or logged locally).

## Scripts

| Command       | Description        |
| ------------- | ------------------ |
| `npm run dev` | Local development  |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | ESLint             |

## Admin

Open `/admin` after the env vars below are set. The screen shows visits, clicks, sources, and a funnel, and it edits profile, projects, experience, skills, certifications, testimonials, and contact messages.

```
ADMIN_EMAIL=you@example.com
ADMIN_PASSWORD_HASH=
ADMIN_SESSION_SECRET=
SUPABASE_SERVICE_ROLE_KEY=
```

Create the password hash locally (do not commit it):

```bash
node -e "const {randomBytes,scryptSync}=require('node:crypto'); const salt=randomBytes(16); const hash=scryptSync(process.argv[1], salt, 32); console.log(salt.toString('hex')+'.'+hash.toString('hex'))" 'your-password'
```

`ADMIN_SESSION_SECRET` can be any long random string. The service-role key stays on the server.

## Content editing

- Without Supabase: edit `src/lib/seed.ts`
- With Supabase: sign in at `/admin` and use Content
- Case-study images stay as URLs. Put files in `public/work/` and set the image URL in the project editor.
- Work thumbnails: add images under `public/work/` (e.g. `public/work/fortnite-locker.jpg`) and set each project’s cover URL (e.g. `"/work/fortnite-locker.jpg"`). Until then, category placeholders render automatically.
