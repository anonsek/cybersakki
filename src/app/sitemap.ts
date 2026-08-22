import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const primaryUrl = (process.env.NEXT_PUBLIC_SITE_URL || siteConfig.url).replace(/\/$/, "");

  const urls = [
    primaryUrl,
    "https://cybersakki.vercel.app",
    "https://muhammadsaqlain.dev",
  ];

  const uniqueUrls = Array.from(new Set(urls));

  return uniqueUrls.map((url, index) => ({
    url,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: index === 0 ? 1.0 : 0.8,
  }));
}


