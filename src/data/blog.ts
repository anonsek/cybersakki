import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "nextjs-16-technical-seo-guide",
    title: "Mastering Technical SEO in Next.js 16 App Router",
    description:
      "A practical guide to metadata, dynamic sitemaps, canonical tags, and JSON-LD structured data in modern Next.js applications.",
    metaDescription:
      "Learn how to implement technical SEO best practices in Next.js 16 App Router: dynamic sitemaps, JSON-LD schema, canonical URLs, and OpenGraph metadata.",
    publishedAt: "2026-08-20",
    readTime: "6 min read",
    author: "Muhammad Saqlain",
    category: "Technical SEO",
    tags: ["Next.js", "SEO", "TypeScript", "App Router"],
    content: [
      "Technical SEO is critical for modern web applications built with Next.js. While React provides great interactive client rendering, search engines rely heavily on fast server-side HTML generation and structured metadata.",
      "In Next.js 16 App Router, metadata management is handled directly via metadata exports and special route files like sitemap.ts, robots.ts, and manifest.ts.",
      "1. Dynamic Metadata API: Next.js allows you to export static metadata objects or dynamic generateMetadata functions for page-level canonical tags, title templates, and OpenGraph previews.",
      "2. JSON-LD Structured Data: Adding Schema.org JSON-LD scripts to your layout or page components gives search engines explicit contextual signals about your business, services, articles, and products.",
      "3. Dynamic Sitemap Generation: Native sitemap.ts files compile into fast XML sitemap endpoints at build time, ensuring search crawlers discover every canonical path effortlessly.",
    ],
  },
  {
    slug: "web-security-fundamentals-developers",
    title: "Web Security Hardening: Essential Protection for Web Applications",
    description:
      "Key web security practices every frontend and full stack developer must implement: HTTP security headers, input sanitization, and XSS defense.",
    metaDescription:
      "Essential web security hardening techniques for developers. Protect your website from XSS, SQLi, and misconfigurations with security headers and OWASP standards.",
    publishedAt: "2026-08-15",
    readTime: "8 min read",
    author: "Muhammad Saqlain",
    category: "Web Security",
    tags: ["Security", "Web Dev", "OWASP", "Headers"],
    content: [
      "Web security should never be an afterthought. Integrating security best practices during initial architecture prevents catastrophic data breaches and builds long-term user trust.",
      "1. HTTP Security Headers: Implementing headers like Content-Security-Policy (CSP), Strict-Transport-Security (HSTS), X-Frame-Options, and X-Content-Type-Options blocks common clickjacking and injection vectors.",
      "2. Input Sanitization & Encoding: Never trust raw client input. Always validate and sanitize user entries on both client and server boundaries.",
      "3. HTTPS & SSL/TLS Configuration: Ensure strict HTTPS redirection and modern TLS protocol versions across all environments.",
    ],
  },
  {
    slug: "core-web-vitals-nextjs-optimization",
    title: "Optimizing Core Web Vitals for Next.js Applications",
    description:
      "How to achieve 100/100 Google Lighthouse scores by accelerating LCP, reducing CLS, and improving INP responsiveness.",
    metaDescription:
      "Practical tips for optimizing Next.js Core Web Vitals (LCP, INP, CLS). Improve site speed, user experience, and search rankings effortlessly.",
    publishedAt: "2026-08-10",
    readTime: "7 min read",
    author: "Muhammad Saqlain",
    category: "Performance",
    tags: ["Next.js", "Core Web Vitals", "Performance", "Lighthouse"],
    content: [
      "Google's Core Web Vitals measure real-world user experience metrics: Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS).",
      "1. Accelerating LCP: Optimize hero images using Next.js Image component with priority loading, WebP format, and proper aspect ratios.",
      "2. Minimizing Layout Shift (CLS): Explicitly define layout container dimensions and avoid dynamically inserted un-sized elements.",
      "3. Improving INP: Keep client JavaScript bundles lightweight, eliminate unnecessary hydration overhead, and defer non-critical scripts.",
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
