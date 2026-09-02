"use client";

import Image from "next/image";
import { useState } from "react";
import type { Screenshot } from "@/content/projects";

/*
  A screenshot with a graceful placeholder.

  Screenshots are static files in public/. Until one exists, this renders a
  hairline box naming the exact path the file should live at, so a missing
  image reads as a to-do rather than a broken page. Drop the file in and the
  placeholder disappears on its own — no code change.
*/
export function Figure({
  shot,
  priority = false,
}: {
  shot: Screenshot;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className="mt-6">
      <div className="relative aspect-[16/10] w-full overflow-hidden border border-hairline bg-paper">
        {failed ? (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-4 text-center">
            <span className="meta">screenshot pending</span>
            <span className="meta break-all opacity-70">{shot.src}</span>
          </div>
        ) : (
          <Image
            src={shot.src}
            alt={shot.alt}
            fill
            sizes="(max-width: 768px) 100vw, 720px"
            className="object-cover"
            priority={priority}
            onError={() => setFailed(true)}
          />
        )}
      </div>
      {shot.caption ? (
        <figcaption className="meta mt-2">{shot.caption}</figcaption>
      ) : null}
    </figure>
  );
}
