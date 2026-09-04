# Portfolio site

## Purpose
Public site for anyone who clicks through from LinkedIn out of curiosity. No
specific audience being optimised for. Purely a web artifact, it does not
replace a resume. Reads as "here are projects and ideas I've explored and
learned from", not a sales pitch and not a claim to expertise.

## Stack
- Next.js 16 (App Router, Turbopack), Tailwind v4, MDX via `@next/mdx`
- Tailwind v4 is CSS-first. There is no `tailwind.config.js`; tokens live in
  the `@theme` block in `app/globals.css`
- Built locally, pushed to GitHub, auto-deployed by Vercel on every push to
  `main`
- Domain: wyatt-haggard.com, purchased through Vercel
- No backend, no database, no CMS, no auth. Every route prerenders static
- No contact form, no email, no phone anywhere on the site. This is deliberate,
  to avoid scraper exposure. Do not add them

## Content architecture
Two files drive everything. Prefer editing them over touching components.

- `content/projects.ts` is the single source of truth for every project. One
  entry feeds both the homepage "Selected work" list and the prerendered
  `/work/[slug]` subpage. Optional fields: `liveUrl`, `repoUrl`, `notice`
  (a standing disclosure, e.g. a retired endpoint), `embed`, `gallery`
- `content/profile.ts` holds the bio, education, experience, leadership,
  interests, and tools shown on the homepage
- `content/work/<slug>.mdx` holds each long-form write-up, pulled in by dynamic
  import so the homepage can render a project header without parsing MDX

Adding a project: append to `projects`, create the matching `.mdx`, drop
screenshots in `public/work/`. Missing images degrade to a labelled placeholder
naming the expected path, so nothing breaks before the file exists.

## Pages
- `/` reads top to bottom like a cover letter followed by a resume: headshot,
  bio, education, experience, leadership, interests, tools, then Selected work
- `/work/[slug]`, one subpage per project: header, live and source links, any
  notice, cover image, write-up, gallery
- Nav links every project. Not a scroll page
- Possible `/ai-strategy` page on how CLAUDE.md sets the backbone for these
  projects. Optional, only once the core pages are solid
- No blog, no dates anywhere. Dates would age the site

## Writing voice
Everything reader-facing is written as Wyatt, and it needs to read that way.

**Never invent project facts.** Write only from source material: the repo, the
contract, the notebook, the dashboard data, a document he supplied. If material
is missing, leave the write-up obviously unfinished and say so rather than
producing plausible filler. Polished invented copy is worse than an obvious
placeholder, because it is harder to spot later.

Mechanics:
- **No em dashes anywhere in rendered copy.** Commas and periods. Semicolons
  rare. This is the single clearest tell
- Plain, direct vocabulary. Never reach for the ornate word
- Longer comma-stacked sentences beat short clipped ones. Do not sand his
  rhythm into staccato
- Repeat a key word across a paragraph rather than swapping in synonyms
- First person. State opinions without hedging
- Admit what went wrong, then what it taught. The mistakes are the credibility

Avoid, all of which have been caught and removed before:
- "X is not Y so much as Z" and similar rhetorical inversions
- Bullets or paragraphs closing on a tidy quotable clause
- Reaching for a memorable line at the end of a section

Register for the site specifically: structured professional documentation, not
personal essay. Labelled sections, each paragraph doing one job, numbers left
to speak for themselves.

## Projects
1. **Swix**, blockchain ticketing, work in progress. Two contracts live on the
   Sepolia testnet, frontend at swixtickets.com. Source is private, so the
   Etherscan links are the public artifact. Etherscan source verification is
   still outstanding
2. **AI Infrastructure Dashboard**, shipped, self-directed. Write-up is still
   invented placeholder and must be replaced from the public
   `Palantire-Live-Dashboard` repo before launch
3. **Fraud Detection**, class project. IEEE-CIS dataset, tuned logistic
   regression, SageMaker endpoint since retired, Vercel dashboard. Source is
   public and linked

Undecided: whether `Stock_Prediction` returns as a fourth project. It was
removed on the assumption it was the same work as Fraud Detection, which may
have been wrong.

Per project: homepage gives title, status and stack metadata right-aligned,
blurb, cover image. Subpage repeats the header and expands. Embedding a live
project by iframe is a per-project enhancement, never a blocker, since many
hosts refuse framing.

## Design
- Palette, all defined once in `@theme` in `app/globals.css`. No colour is
  hardcoded in a component
  - paper `#F4EFE4`, ink `#201D18`, taupe `#8C8370`, hairline `#D8D0BE`
  - ground `#111E18`, a near-black pine green
- The content sits on a paper column against the darker ground, so a wide
  window shows a bar either side. Side borders switch off below `sm`
- Column width and its side margins set the line length. Do not add a separate
  cap on the prose: it leaves a ragged gap where headings and rules still run
  full width
- Type: Times New Roman for headings and body, taken from the reader's system
  with metric-compatible fallbacks. Source Sans 3 for nav, labels and captions.
  Mono for inline code only
- Section heads use size and space, not weight and not underline. An underline
  would collide with real links
- Flat colour only, no texture. Hairline rules, no cards, no shadows, no pill
  badges
- Fully responsive. Desktop and mobile both matter

## Out of scope
- Contact form, email, phone
- Downloadable resume file
- Dates on any content
- Analytics or tracking
- Animation beyond minimal hover states
- Print stylesheet

Dark mode is still unbuilt but is now cheap, since every colour is a token.
Allowed if it stays trivial.

## Open items
- Images: `public/headshot.jpg`, `public/work/swix-cover.png`,
  `swix-architecture.png`, `ai-dashboard-cover.png`
- Replace the invented AI dashboard write-up
- Live URL for the AI dashboard
- Verify the Swix contracts on Sepolia Etherscan so the source is readable

@AGENTS.md
