import type { Metadata, Viewport } from "next";
import { Space_Grotesk, DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgressIndicator } from "@/components/common/ScrollProgressIndicator";
import { BackToTop } from "@/components/common/BackToTop";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  style: ["normal", "italic"],
});

export const viewport: Viewport = {
  themeColor: "#532510",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Creative & Digital Marketing Agency`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "creative agency",
    "digital marketing",
    "web design",
    "brand identity",
    "software development",
    "automation",
    "AI solutions",
    "oopswedidit",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} — Creative & Digital Marketing Agency`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Creative & Digital Marketing Agency`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${instrumentSerif.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-cream text-coffee flex flex-col font-sans selection:bg-terracotta selection:text-cream">
        <ScrollProgressIndicator />
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
