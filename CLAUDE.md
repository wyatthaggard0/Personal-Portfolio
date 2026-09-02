# Portfolio site — requirements

## Purpose
Public site for anyone who clicks through from LinkedIn out of curiosity, no specific audience being optimized for. Purely a web artifact, does not replace a resume. Reads as "here are projects and ideas I've explored and learned from" — not a sales pitch, not a claim to expertise.

## Stack
- Next.js 15, Tailwind, MDX
- Built locally in VS Code, pushed to GitHub, deployed via Vercel (Vercel repo linked to GitHub)
- Domain: wyatthaggard.com, purchased through Vercel
- Project build driven by CLAUDE.md
- No backend/database — static content, MDX-driven
- No contact form, no email/phone anywhere on the site (avoid scraper/bot exposure)

## Pages / structure
- `/` — homepage functions like a cover letter + resume: headshot, short about-me/bio, work experience, interests, then a Selected work list (resume-entry style: title, status/stack metadata, short blurb, screenshot).
- Nav menu (not a pure scroll page) linking to each project's subpage.
- `/work/[slug]` — one subpage per project. Contains: link to the live project, more detail on the project and what he learned building it, additional screenshots.
- Possible `/ai-strategy` page — how CLAUDE.md is used to set structure/backbone for his projects. Optional, add once core pages are solid.
- No blog, no CMS, no auth, no dates displayed anywhere (keeps everything feeling current, not aging out).

## Content — projects at launch
Starting with the projects that have the most progress; more added later directly via GitHub as new work is completed. At launch:

1. **Swix** (blockchain ticketing) — framed as work in progress, a learning experience with smart contracts and digital assets. Link to swix.com (or live URL). Screenshot(s) of the architecture/product.
2. **AI infrastructure dashboard** — shipped, self-directed. Live demo link + screenshot.
3. **ML stock signal model** — framed as: class project, trained model using course resources, deployed to AWS endpoints, connected to a Vercel-hosted app. Live demo link + screenshot.

Each project entry (homepage summary + subpage):
- Homepage: title, status/stack metadata (mono, right-aligned), short blurb, screenshot, link out.
- Subpage: same header, expanded write-up of the project and what he learned, additional screenshots, live link repeated.
- **Embedded live preview (stretch, not required for launch)**: attempt to embed each live project directly in its subpage via iframe so visitors don't have to leave the site. Not all hosts allow this (Streamlit and some Vercel defaults block iframe embedding via headers) — treat as an enhancement per project, fall back cleanly to screenshot + external link if a given project refuses to embed. Do not let this block launch.
- No GitHub repo links in the primary view.

## Design constraints (decided)
- Palette: warm tan paper (#F4EFE4) background, near-black ink for text (#201D18), warm taupe-gray for metadata/rules (#8C8370, hairlines #D8D0BE). No accent color.
- Serif display (titles/headers) + sans body + mono for metadata — candidates to be proposed.
- Flat color only, no paper texture/grain.
- Hairline rules between sections, no cards, no shadows, no rounded pill badges.
- Fully responsive — needs to look good on both desktop (LinkedIn click-through) and mobile.
- No print stylesheet needed.

## Out of scope
- Contact form, email, phone — none of these appear on the site
- Downloadable resume/CV file
- Dates on any content
- Dark mode toggle (unless trivial to add)
- Analytics/tracking
- Animations beyond minimal, purposeful hover states

## Copy/OG
- Page titles and OG previews should be set up cleanly for link sharing (LinkedIn Featured, etc.) — implementation left to build phase.

## Launch bar
- Goal: build the complete v1 (homepage + about/bio + all launch project subpages) before going live, then iterate/add projects over time rather than shipping a partial version.
- No hard external deadline, but aiming to complete soon.

@AGENTS.md
