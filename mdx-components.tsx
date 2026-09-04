import type { MDXComponents } from "mdx/types";

/*
  Required by @next/mdx in the App Router — MDX will not compile without it.

  These map the elements the project write-ups actually produce onto the site's
  type system. Rather than pulling in @tailwindcss/typography and then fighting
  its defaults back toward the palette, the handful of tags used here are
  styled directly.
*/
const components: MDXComponents = {
  /*
    Section heads carry size and space rather than weight or an underline. An
    underline would collide with the real links in these write-ups, where it
    already means "this is clickable". The generous top margin does as much
    separating work as the styling does.
  */
  h2: ({ children }) => (
    <h2 className="mt-14 font-display text-2xl leading-tight sm:text-[1.75rem]">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-10 font-display text-xl leading-tight">
      {children}
    </h3>
  ),
  p: ({ children }) => <p className="mt-4">{children}</p>,
  ul: ({ children }) => (
    <ul className="mt-4 list-disc space-y-1 pl-5">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mt-4 list-decimal space-y-1 pl-5">{children}</ol>
  ),
  li: ({ children }) => <li className="pl-1">{children}</li>,
  a: ({ href, children }) => (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      className="underline transition-opacity hover:opacity-60"
    >
      {children}
    </a>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold">{children}</strong>
  ),
  hr: () => <hr className="mt-10 border-hairline" />,
  blockquote: ({ children }) => (
    <blockquote className="mt-6 border-l border-hairline pl-4 text-taupe">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="font-mono text-[0.875em]">{children}</code>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
