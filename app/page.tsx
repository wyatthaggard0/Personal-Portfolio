import { Avatar } from "@/components/Avatar";
import { Figure } from "@/components/Figure";
import { ProjectMeta, LiveLink, ProjectNotice } from "@/components/ProjectMeta";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";

/*
  Homepage — reads top to bottom like a cover letter followed by a resume:
  headshot + bio, education, experience, leadership, interests, then the
  Selected work list. Sections are separated by hairline rules; no cards,
  no shadows, no dates.
*/

/** Section wrapper: hairline rule + mono label. */
function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12 border-t border-hairline pt-8">
      <h2 className="meta">{label}</h2>
      {children}
    </section>
  );
}

/*
  Experience and leadership entries are the same shape: role + one-line note
  on the left, organization right-aligned in mono on desktop.
*/
function RoleList({
  entries,
}: {
  entries: { role: string; org: string; note: string }[];
}) {
  return (
    <ul className="mt-4 space-y-5">
      {entries.map((entry) => (
        <li
          key={`${entry.org}-${entry.role}`}
          className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
        >
          <div>
            <p className="font-display text-lg leading-snug">{entry.role}</p>
            <p className="mt-0.5">{entry.note}</p>
          </div>
          <p className="meta shrink-0 sm:text-right">{entry.org}</p>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <>
      <header className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
        <Avatar src={profile.headshot.src} alt={profile.headshot.alt} />
        <div>
          <h1 className="font-display text-3xl leading-tight sm:text-4xl">
            {profile.name}
          </h1>
          <p className="meta mt-1">{profile.tagline}</p>
        </div>
      </header>

      <section className="mt-8">
        {profile.bio.map((paragraph, i) => (
          <p key={i} className="mt-4 first:mt-0">
            {paragraph}
          </p>
        ))}
      </section>

      <Section label="Education">
        <div className="mt-4 flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
          <div>
            <p className="font-display text-lg leading-snug">
              {profile.education.school}
            </p>
            <p className="mt-0.5">{profile.education.degree}</p>
            <p className="meta mt-1">{profile.education.honors}</p>
          </div>
          <p className="meta shrink-0 sm:text-right">{profile.education.org}</p>
        </div>
      </Section>

      <Section label="Experience">
        <RoleList entries={profile.experience} />
      </Section>

      <Section label="Leadership">
        <RoleList entries={profile.leadership} />
      </Section>

      <Section label="Interests">
        <p className="meta mt-3 text-ink">{profile.interests.join(" · ")}</p>
      </Section>

      <Section label="Tools">
        <p className="meta mt-3 text-ink">{profile.tools.join(" · ")}</p>
        <p className="meta mt-2">{profile.certifications}</p>
      </Section>

      <Section label="Selected work">
        <ul className="mt-6 space-y-12">
          {projects.map((project, i) => (
            <li key={project.slug}>
              <ProjectMeta project={project} linked />
              <p className="mt-3">{project.blurb}</p>
              <LiveLink project={project} />
              <ProjectNotice project={project} />
              <Figure shot={project.cover} priority={i === 0} />
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
