import type { Metadata } from "next";
import { Playfair_Display, Source_Serif_4, IBM_Plex_Mono } from "next/font/google";
import { Nav } from "@/components/Nav";
import { profile } from "@/content/profile";
import "./globals.css";

/*
  Type system, aiming at the Wall Street Journal's newspaper feel.

  WSJ sets headlines in Escrow and body text in Exchange, both proprietary
  Font Bureau faces. These are the closest open equivalents: Playfair Display
  is a Scotch Roman in the same family of shapes as Escrow, and Source Serif
  is a text serif built for continuous reading at small sizes like Exchange.
  Metadata stays mono, which is this site's own idea rather than WSJ's.

  Each face is exposed as a CSS variable and consumed by @theme in
  globals.css, so swapping one is a single-line change here.
*/
const playfair = Playfair_Display({
  variable: "--font-display-face",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-body-face",
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
      className={`${playfair.variable} ${sourceSerif.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        {/*
          The content sits on a paper column against a deeper ground, so a wide
          window shows two tonal bars either side rather than an unbroken field
          of ivory. Hairlines mark the column edges; on narrow screens the
          column fills the viewport and the bars disappear on their own.
        */}
        <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col border-hairline bg-paper sm:border-x">
          <Nav />
          <main className="grow px-6 py-12 sm:py-16">{children}</main>
          <footer className="border-t border-hairline px-6 py-6">
            <p className="meta">{profile.name}</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
