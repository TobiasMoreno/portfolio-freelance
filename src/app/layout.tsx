import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import { siteConfig } from "@/data/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: { canonical: "/" },
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  keywords: [
    "desarrollo web",
    "diseño web",
    "páginas web para negocios",
    "desarrollador web Córdoba",
    "sitios web responsive",
  ],
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Tobias Moreno — Desarrollo web para negocios" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f3f0e9",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${manrope.variable} ${instrumentSerif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
