# wyatthaggard.com

Personal portfolio site. Next.js (App Router) + Tailwind v4 + MDX, deployed on Vercel.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build — also typechecks
npm run lint
```

## Adding a project

Content is driven by two things: a registry and an MDX write-up.

1. Append an entry to `projects` in [`content/projects.ts`](content/projects.ts).
   This one entry drives both the homepage list and the `/work/[slug]` subpage.
2. Create `content/work/<slug>.mdx` with the long-form write-up.
3. Drop screenshots into `public/work/` matching the paths used in the entry.

Missing screenshots render as a labeled placeholder naming the expected file
path, so nothing breaks before the images exist.

## Editing the homepage

Bio, experience, and interests all live in
[`content/profile.ts`](content/profile.ts).

## Design

Palette and type scale are defined once in `@theme` in
[`app/globals.css`](app/globals.css). No colors are hardcoded in components.
