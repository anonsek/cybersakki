import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Muhammad Saqlain",
    "Full Stack Web Developer",
    "Web Security",
    "Next.js Developer",
    "React Developer",
    "Web Penetration Testing",
    "Portfolio",
    "Custom Website Development",
    "E-Commerce Development",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: "@cybersakki",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export function getStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    alumniOf: {
      "@type": "EducationalOrganization",
      name: siteConfig.education,
    },
    knowsAbout: [
      "Web Development",
      "Full Stack Development",
      "Cybersecurity",
      "Next.js",
      "React",
      "TypeScript",
      "Web Security",
    ],
    sameAs: siteConfig.socials
      .filter((s) => s.url.startsWith("http"))
      .map((s) => s.url),
  };
}
