"use client";

import { Fragment } from "react";
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
      <ul className="flex flex-wrap items-baseline gap-x-3 gap-y-1 px-6 py-4 sm:px-12">
        {links.map((link, i) => {
          const active = pathname === link.href;
          return (
            <Fragment key={link.href}>
              {i > 0 ? (
                <li aria-hidden="true" className="meta select-none opacity-40">
                  |
                </li>
              ) : null}
              <li>
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
            </Fragment>
          );
        })}
      </ul>
    </nav>
  );
}
