import type { Metadata } from "next";
import { LocalBusinessJsonLd } from "@/components/seo/local-business-json-ld";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  category: "restaurant local",
  keywords: [
    "Le Parameen",
    "kebab à emporter",
    "kebab Saint-Malo",
    "kebab Paramé",
    "Saint-Malo Paramé",
  ],
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <LocalBusinessJsonLd />
        {children}
      </body>
    </html>
  );
}
