"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { projects } from "@/content/projects";

/*
  Flat wrapping nav — no hamburger, no JS-driven menu. With a handful of
  projects the full list fits on one or two lines at any width, which keeps
  mobile honest and avoids an animated drawer (out of scope per CLAUDE.md).
*/
export function Nav() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Index" },
    ...projects.map((p) => ({ href: `/work/${p.slug}`, label: p.title })),
  ];

  return (
    <nav className="border-b border-hairline">
      <ul className="mx-auto flex max-w-3xl flex-wrap gap-x-6 gap-y-1 px-6 py-4">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "meta text-ink no-underline"
                    : "meta no-underline transition-colors hover:text-ink"
                }
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
