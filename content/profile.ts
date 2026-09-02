/*
  Bio, experience, and interests for the homepage.

  ⚠ EVERYTHING MARKED "TODO" BELOW IS PLACEHOLDER TEXT.
  I did not have your real bio or experience details, so I left the structure
  in place with obvious stand-ins rather than inventing facts about you.
  Replace these before going live — this file is the only place they live.

  Per CLAUDE.md: no dates anywhere, and no email/phone/contact form on the
  site at all. Do not add a contact field here.
*/

export const profile = {
  name: "Wyatt Haggard",

  /** Sits under the name in mono. One short line. */
  // TODO: replace with your actual one-liner.
  tagline: "Texas Christian University",

  /*
    The cover-letter paragraph. Two or three sentences, first person.
    Tone per CLAUDE.md: "here are projects and ideas I've explored and learned
    from" — not a sales pitch, not a claim to expertise.
  */
  // TODO: rewrite in your own voice.
  bio: [
    "I build things to find out how they work. Most of what's here started as a question I couldn't answer by reading about it — how a smart contract behaves under real constraints, what it takes to get a model serving predictions, how to make a pile of infrastructure data legible at a glance.",
    "None of these are finished products and I'm not claiming expertise in any of them. They're the projects I learned the most from, written up honestly about what worked and what didn't.",
  ],

  /** Headshot. Drop the file at public/headshot.jpg (square crop reads best). */
  headshot: {
    src: "/headshot.jpg",
    alt: "Wyatt Haggard",
  },

  /*
    Work experience. No dates — CLAUDE.md is explicit about that, so entries
    are ordered most-recent-first by convention only.
  */
  // TODO: replace all three entries with your real experience.
  experience: [
    {
      role: "TODO — Your Role",
      org: "TODO — Organization",
      note: "One line on what you actually did there.",
    },
    {
      role: "TODO — Your Role",
      org: "TODO — Organization",
      note: "One line on what you actually did there.",
    },
    {
      role: "TODO — Your Role",
      org: "TODO — Organization",
      note: "One line on what you actually did there.",
    },
  ],

  /** Short list, rendered inline in mono. Keep it to a handful. */
  // TODO: replace with your actual interests.
  interests: [
    "Smart contracts",
    "Applied ML",
    "Infrastructure",
    "Systems design",
  ],
};
