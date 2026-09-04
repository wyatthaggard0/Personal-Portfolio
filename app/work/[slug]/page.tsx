import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Figure } from "@/components/Figure";
import { LiveEmbed } from "@/components/LiveEmbed";
import { ProjectMeta, LiveLink, ProjectNotice } from "@/components/ProjectMeta";
import { projects, getProject } from "@/content/projects";

/*
  One subpage per project.

  Metadata (title, status, stack, links, screenshots) comes from the registry
  in content/projects.ts; the long-form write-up is the MDX body in
  content/work/<slug>.mdx, pulled in below by dynamic import. Keeping the two
  split means the homepage can render a project's header without parsing MDX.
*/

// Prerender every project at build time; anything else 404s.
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.blurb,
    openGraph: {
      title: project.title,
      description: project.blurb,
      type: "article",
    },
  };
}

export default async function ProjectPage({
  params,
}: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  // Write-ups are colocated in content/work/. The .mdx extension is required
  // in the specifier so the bundler can resolve the dynamic import.
  const { default: WriteUp } = await import(`@/content/work/${slug}.mdx`);

  return (
    <article>
      <ProjectMeta project={project} as="h1" />
      <LiveLink project={project} />
      <ProjectNotice project={project} />

      <Figure shot={project.cover} priority />

      <div className="mt-8 border-t border-hairline pt-2">
        <WriteUp />
      </div>

      <LiveEmbed project={project} />

      {project.gallery?.length ? (
        <section className="mt-10 border-t border-hairline pt-8">
          {project.gallery.map((shot) => (
            <Figure key={shot.src} shot={shot} />
          ))}
        </section>
      ) : null}
    </article>
  );
}
