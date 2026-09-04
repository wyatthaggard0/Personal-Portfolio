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
    Standing disclosure shown on both the homepage entry and the subpage.
    Use for anything a visitor would otherwise discover by hitting a dead end
    — a retired inference endpoint, a demo running on cached data, a link
    that no longer resolves. Rendered in mono against a hairline rule.
  */
  notice?: string;
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
    stack: ["Solidity", "Hardhat", "ERC-721", "React", "wagmi"],
    blurb:
      "Ticketing where the resale rules live in the contract instead of the terms of service, a price cap and an artist royalty that execute automatically on every resale. Two contracts running on a testnet, a live marketplace frontend, and a much better understanding of what immutability costs you when you get an interface wrong.",
    liveUrl: "https://swixtickets.com",
    liveLabel: "swixtickets.com",
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
      "A dashboard for tracking AI infrastructure, capacity, spend, and utilization in one view. Built end to end on my own to see how far I could get turning a messy question into something legible at a glance.",
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
    slug: "fraud-detection",
    title: "Fraud Detection",
    status: "Class project",
    stack: ["Python", "scikit-learn", "SHAP", "AWS SageMaker", "Vercel"],
    blurb:
      "A fraud classifier trained on the IEEE-CIS dataset, wrapped in a dashboard that scores a transaction and shows which features drove the score. Tuned logistic regression beat three other models on held-out ROC-AUC, and the interesting part turned out to be how bad a 68% recall looks once you price the false alarms.",
    liveUrl: "https://frauddetection-bice.vercel.app/",
    liveLabel: "frauddetection-bice.vercel.app",
    notice:
      "The AWS inference endpoint has been retired, so live scoring is no longer available. The dashboard still runs, and every metric shown is a real result from the trained model, however “Score via AWS” will not return a prediction.",
    cover: {
      src: "/work/fraud-detection-cover.png",
      alt: "Fraud detection dashboard showing loss prevented, fraud caught, ROC-AUC, and performance metrics",
    },
    gallery: [
      {
        src: "/work/fraud-detection-scoring.png",
        alt: "Model comparison chart and the transaction scoring panel",
        caption: "Four models compared; transaction scoring against the endpoint",
      },
      {
        src: "/work/fraud-detection-shap.png",
        alt: "SHAP waterfall, feature importance ranking, and feature glossary",
        caption: "SHAP attribution, with a glossary for the anonymized features",
      },
    ],
    // Endpoint is retired; nothing to gain from framing the dashboard.
    embed: false,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
