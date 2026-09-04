import type { Metadata } from "next";
import { Source_Sans_3, IBM_Plex_Mono } from "next/font/google";
import { Nav } from "@/components/Nav";
import { profile } from "@/content/profile";
import "./globals.css";

/*
  Type system.

  Headings and body are Times New Roman, taken from the reader's own system
  rather than loaded. Every desktop and mobile platform that matters ships it
  or ships Times, so there is no webfont to download for the text, and the
  fallbacks cover Linux and Android.

  Labels and nav stay in Source Sans, which is the one loaded face left for
  the interface. Mono is kept for inline code.
*/
const sourceSans = Source_Sans_3({
  variable: "--font-ui-face",
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
    template: `%s | ${profile.name}`,
  },
  description:
    "Projects and ideas I've explored and learned from, including blockchain ticketing, AI infrastructure, and applied machine learning.",
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
      className={`${sourceSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        {/*
          The content sits on a paper column against a deeper ground, so a wide
          window shows two tonal bars either side rather than an unbroken field
          of ivory. Hairlines mark the column edges; on narrow screens the
          column fills the viewport and the bars disappear on their own.

          Line length is set by the column width less its side margins, rather
          than by a separate cap on the prose, so everything shares one right
          edge: nav, headings, body, rules and images all stop in the same
          place. The margins widen at sm, which is what makes the column read
          as a sheet of paper rather than a full-bleed panel.
        */}
        <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col border-hairline bg-paper sm:border-x">
          <Nav />
          <main className="grow px-6 py-12 sm:px-12 sm:py-16">{children}</main>
          <footer className="border-t border-hairline px-6 py-6 sm:px-12">
            <p className="meta">{profile.name}</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
