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
    "I'm a senior at TCU studying Accounting and Business Information Systems, with an interest in the intersection of accounting, technology, and digital transformation. My background consists of tax, farm operations, and event facility management, providing a grounded understanding of how businesses function beyond the classroom.",
    "I'm especially interested in the growing role of information systems, data, and automation in modern financial work. With an entrepreneurial mindset and a hands-on work ethic, I'm focused on building a career at the intersection of accounting, technology, and real-world operations.",
    "The projects below came out of that interest. None of them are finished products, and I'm not claiming expertise in any of them. They're the projects I walked away from having learned the most, and I've written them up honestly, including the parts that didn't work.",
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
      "B.B.A. in Accounting and Business Information Systems: Financial Technologies",
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
      note: "Elected to lead a 190+ member organization, overseeing executive board operations, strategic planning, alumni mixers, and recruitment.",
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
  certifications: "Microsoft Office Specialist: Excel and PowerPoint",
};
