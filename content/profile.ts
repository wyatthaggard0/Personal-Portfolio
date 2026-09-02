/*
  Bio, education, experience, leadership, and interests for the homepage.
  Sourced from Wyatt's resume — this is the only place these facts live.

  Two hard constraints from CLAUDE.md, both deliberate:
    - NO dates anywhere. Entries are ordered most-recent-first by convention
      only. Do not add a date/duration field.
    - NO email, phone, or contact form anywhere on the site, to avoid scraper
      exposure. The resume's phone and email are intentionally omitted.
*/

export const profile = {
  name: "Wyatt Haggard",

  /** Sits under the name in mono. One short line. */
  tagline: "Accounting & Business Information Systems · Texas Christian University",

  /*
    The cover-letter paragraph. Tone per CLAUDE.md: "here are projects and
    ideas I've explored and learned from" — not a sales pitch, not a claim to
    expertise.
  */
  bio: [
    "I study accounting and business information systems at TCU, on the financial technologies track. The coursework is where I learned to read a system; the projects here are where I found out what I actually understood.",
    "Most of them started as a question I couldn't answer by reading about it — how a smart contract behaves once real constraints show up, what it takes to get a model actually serving predictions, how to make a pile of infrastructure data legible at a glance.",
    "None of these are finished products and I'm not claiming expertise in any of them. They're the projects I learned the most from, written up honestly about what worked and what didn't.",
  ],

  /** Headshot. Drop the file at public/headshot.jpg (square crop reads best). */
  headshot: {
    src: "/headshot.jpg",
    alt: "Wyatt Haggard",
  },

  education: {
    school: "Texas Christian University",
    org: "Neeley School of Business",
    degree:
      "B.B.A. — Accounting and Business Information Systems: Financial Technologies",
    honors: "Dean's Honors List",
  },

  /** Most-recent-first by convention. No dates — see note above. */
  experience: [
    {
      role: "Tax Intern",
      org: "Burgher Haggard",
      note: "Prepared individual returns with K-1, rental, and oil & gas income in UltraTax CS; managed depreciation schedules and resolved e-file diagnostics through peak season.",
    },
    {
      role: "Rodeo Maintenance Worker",
      org: "Steamboat Springs Parks & Recreation",
      note: "Ran tractors, skid steers, and water trucks to prepare arenas and grounds for Pro Rodeo events, and kept irrigation and equipment in working order.",
    },
    {
      role: "Farmhand",
      org: "Windhaven Farm",
      note: "Plowed and tilled 365 acres for seasonal planting, maintained 15 acres of pasture and grounds, and handled routine repairs on farm equipment.",
    },
  ],

  leadership: [
    {
      role: "President",
      org: "Business Information Systems Club, TCU",
      note: "Elected to lead a 190+ member organization — executive board operations, strategic planning, alumni mixers, and recruitment.",
    },
  ],

  /** Short list, rendered inline in mono. */
  interests: [
    "Financial technology",
    "Predictive modeling",
    "Blockchain",
    "Data visualization",
  ],

  /** Tools and credentials, rendered inline in mono. */
  tools: ["Python", "Tableau", "Power BI", "Claude", "Excel"],
  certifications: "Microsoft Office Specialist — Excel, PowerPoint",
};
