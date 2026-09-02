import { Avatar } from "@/components/Avatar";
import { Figure } from "@/components/Figure";
import { ProjectMeta, LiveLink } from "@/components/ProjectMeta";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";

/*
  Homepage — reads top to bottom like a cover letter followed by a resume:
  headshot + bio, experience, interests, then the Selected work list.
  Sections are separated by hairline rules; no cards, no shadows.
*/
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

      <section className="mt-12 border-t border-hairline pt-8">
        <h2 className="meta">Experience</h2>
        <ul className="mt-4 space-y-5">
          {profile.experience.map((job, i) => (
            <li
              key={i}
              className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
            >
              <div>
                <p className="font-display text-lg leading-snug">{job.role}</p>
                <p className="mt-0.5">{job.note}</p>
              </div>
              <p className="meta shrink-0 sm:text-right">{job.org}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 border-t border-hairline pt-8">
        <h2 className="meta">Interests</h2>
        <p className="meta mt-3 text-ink">{profile.interests.join(" · ")}</p>
      </section>

      <section className="mt-12 border-t border-hairline pt-8">
        <h2 className="meta">Selected work</h2>
        <ul className="mt-6 space-y-12">
          {projects.map((project, i) => (
            <li key={project.slug}>
              <ProjectMeta project={project} linked />
              <p className="mt-3">{project.blurb}</p>
              <LiveLink project={project} />
              <Figure shot={project.cover} priority={i === 0} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
