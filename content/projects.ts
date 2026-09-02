/*
  Single source of truth for every project on the site.

  The homepage "Selected work" list and each /work/[slug] subpage both read
  from this array — add a project here and it appears in both places, in this
  order. The long-form write-up for a project lives alongside it in
  content/work/<slug>.mdx and is pulled in by the subpage.

  Adding a project = 3 steps:
    1. Append an entry to `projects` below.
    2. Create content/work/<slug>.mdx with the write-up.
    3. Drop screenshots in public/work/ matching the `src` paths you used.
*/

export type Screenshot = {
  src: string;
  alt: string;
  /** Shown under the image in mono. Optional. */
  caption?: string;
};

export type Project = {
  slug: string;
  title: string;
  /** Honest framing of where the project stands, e.g. "Work in progress". */
  status: string;
  /** Rendered mono, joined with middots, right-aligned on desktop. */
  stack: string[];
  /** One or two sentences for the homepage list. */
  blurb: string;
  /** Live project. Omit if there is nothing public to link to yet. */
  liveUrl?: string;
  /** Display text for the live link, e.g. "swix.com". Defaults to the host. */
  liveLabel?: string;
  /** Leading image on both homepage and subpage. */
  cover: Screenshot;
  /** Extra images shown on the subpage below the write-up. */
  gallery?: Screenshot[];
  /*
    Stretch enhancement: attempt to embed the live project in an iframe on its
    subpage. Many hosts refuse framing via X-Frame-Options / CSP
    frame-ancestors — Streamlit does, and some Vercel defaults do. When the
    frame fails the component falls back to the cover screenshot + external
    link, so setting this true is always safe.
  */
  embed?: boolean;
};

export const projects: Project[] = [
  {
    slug: "swix",
    title: "Swix",
    status: "Work in progress",
    stack: ["Solidity", "Smart contracts", "Digital assets"],
    blurb:
      "A blockchain ticketing concept — exploring what it takes to make a ticket a digital asset that can be verified and transferred without a middleman. Mostly a vehicle for learning how smart contracts behave once real constraints show up.",
    // TODO: confirm the live URL. CLAUDE.md lists "swix.com (or live URL)".
    liveUrl: "https://swix.com",
    liveLabel: "swix.com",
    cover: {
      src: "/work/swix-cover.png",
      alt: "Swix ticketing interface",
    },
    gallery: [
      {
        src: "/work/swix-architecture.png",
        alt: "Swix system architecture diagram",
        caption: "Contract and settlement flow",
      },
    ],
    embed: false,
  },
  {
    slug: "ai-infrastructure-dashboard",
    title: "AI Infrastructure Dashboard",
    status: "Shipped · Self-directed",
    stack: ["Next.js", "TypeScript", "Vercel"],
    blurb:
      "A dashboard for tracking AI infrastructure — capacity, spend, and utilization in one view. Built end to end on my own to see how far I could get turning a messy question into something legible at a glance.",
    // TODO: add the live demo URL.
    liveUrl: undefined,
    cover: {
      src: "/work/ai-dashboard-cover.png",
      alt: "AI infrastructure dashboard overview",
    },
    gallery: [],
    embed: true,
  },
  {
    slug: "ml-stock-signal",
    title: "ML Stock Signal Model",
    status: "Class project",
    stack: ["Python", "AWS SageMaker", "Vercel"],
    blurb:
      "A trained signal model built with course resources, deployed to AWS endpoints and wired to a small hosted app. The interesting part was less the model than everything around it — getting inference to actually serve.",
    // TODO: add the live demo URL.
    liveUrl: undefined,
    cover: {
      src: "/work/ml-signal-cover.png",
      alt: "Stock signal model interface",
    },
    gallery: [],
    // Streamlit-hosted apps block framing; leave false unless the app moves.
    embed: false,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
