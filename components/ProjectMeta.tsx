import Link from "next/link";
import type { Project } from "@/content/projects";

/*
  The title + status/stack block, shared by the homepage list entry and the
  subpage header so the two never drift apart.

  On desktop the metadata sits right-aligned opposite the title; on mobile it
  stacks underneath. `as` lets the homepage render h2s inside its list while
  the subpage renders the page h1.
*/
export function ProjectMeta({
  project,
  as: Heading = "h2",
  linked = false,
}: {
  project: Project;
  as?: "h1" | "h2";
  linked?: boolean;
}) {
  const title = linked ? (
    <Link
      href={`/work/${project.slug}`}
      className="no-underline hover:underline"
    >
      {project.title}
    </Link>
  ) : (
    project.title
  );

  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
      <Heading className="font-display text-2xl leading-tight sm:text-3xl">
        {title}
      </Heading>
      <p className="meta shrink-0 sm:text-right">
        {project.status}
        <span className="mx-2 opacity-50">·</span>
        {project.stack.join(" · ")}
      </p>
    </div>
  );
}

/*
  Outbound links for a project: the live site, and the source where it is
  public. Both sit on one line under the header.
*/
export function LiveLink({ project }: { project: Project }) {
  const live = project.liveUrl ? (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="meta text-ink transition-opacity hover:opacity-60"
    >
      {project.liveLabel ?? project.liveUrl.replace(/^https?:\/\//, "")} ↗
    </a>
  ) : (
    <span className="meta">Not publicly linked yet</span>
  );

  return (
    <p className="mt-3 flex flex-wrap items-baseline gap-x-5 gap-y-1">
      {live}
      {project.repoUrl ? (
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="meta transition-opacity hover:opacity-60"
        >
          Source ↗
        </a>
      ) : null}
    </p>
  );
}

/*
  Standing disclosure for a project: a retired endpoint, a dead demo link,
  cached-only data. Shown in both the homepage list and the subpage so a
  visitor never has to click through to find out something no longer works.

  Styled as a note against a hairline rule rather than a callout box: no card,
  no shadow, no coloured badge, per the design constraints.
*/
export function ProjectNotice({ project }: { project: Project }) {
  if (!project.notice) return null;

  return (
    <p className="meta mt-4 border-l border-hairline py-0.5 pl-3">
      {project.notice}
    </p>
  );
}
