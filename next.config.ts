import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // Long-form project write-ups live in content/work/*.mdx and are pulled in
  // via dynamic import from app/work/[slug]/page.tsx.
  pageExtensions: ["ts", "tsx", "md", "mdx"],
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
