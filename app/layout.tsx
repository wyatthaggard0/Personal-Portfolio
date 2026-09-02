import type { Metadata } from "next";
import { Newsreader, Inter, IBM_Plex_Mono } from "next/font/google";
import { Nav } from "@/components/Nav";
import { profile } from "@/content/profile";
import "./globals.css";

/*
  Type system: serif display + sans body + mono metadata, per CLAUDE.md.
  Each is exposed as a CSS variable and consumed by @theme in globals.css, so
  swapping a face is a one-line change here.
*/
const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  // Absolute URLs for OG tags. Required for link previews to resolve images.
  metadataBase: new URL("https://wyatt-haggard.com"),
  title: {
    default: `${profile.name}`,
    template: `%s — ${profile.name}`,
  },
  description:
    "Projects and ideas I've explored and learned from — blockchain ticketing, AI infrastructure, and applied machine learning.",
  openGraph: {
    type: "website",
    siteName: profile.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${inter.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Nav />
        <main className="mx-auto w-full max-w-3xl grow px-6 py-12 sm:py-16">
          {children}
        </main>
        <footer className="border-t border-hairline">
          <div className="mx-auto max-w-3xl px-6 py-6">
            <p className="meta">{profile.name}</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
