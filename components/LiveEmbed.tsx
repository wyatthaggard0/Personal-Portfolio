import type { Project } from "@/content/projects";

/*
  Stretch enhancement from CLAUDE.md: embed the live project in its subpage so
  visitors don't have to leave the site.

  Deliberately conservative. A page that refuses framing (X-Frame-Options, or
  CSP frame-ancestors — Streamlit and some Vercel defaults do this) cannot be
  detected from JavaScript: the parent can't inspect a cross-origin frame, and
  a blocked frame still fires `onLoad` in some browsers. Any "did it work?"
  heuristic would be a guess.

  So instead of guessing, the subpage ALWAYS renders the screenshot and the
  external link as well. The frame is purely additive — if it comes up blank,
  the page is still complete. Set `embed: true` per project to opt in.
*/
export function LiveEmbed({ project }: { project: Project }) {
  if (!project.embed || !project.liveUrl) return null;

  return (
    <section className="mt-10">
      <p className="meta">Live preview</p>
      <div className="mt-2 aspect-[16/10] w-full overflow-hidden border border-hairline">
        <iframe
          src={project.liveUrl}
          title={`${project.title} — live preview`}
          className="h-full w-full"
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          referrerPolicy="no-referrer"
        />
      </div>
      <p className="meta mt-2 opacity-70">
        If this area is blank, the site blocks embedding — use the link above.
      </p>
    </section>
  );
}
