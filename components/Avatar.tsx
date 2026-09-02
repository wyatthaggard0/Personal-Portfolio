"use client";

import Image from "next/image";
import { useState } from "react";

/** Headshot with the same "name the missing file" fallback as Figure. */
export function Avatar({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative size-28 shrink-0 overflow-hidden border border-hairline sm:size-32">
      {failed ? (
        <div className="flex h-full w-full items-center justify-center px-2 text-center">
          <span className="meta break-all opacity-70">{src}</span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="128px"
          className="object-cover"
          priority
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
