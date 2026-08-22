import type { Project } from "@/types";

const gradients = [
  "from-pink-500/20 via-rose-500/10 to-purple-500/20",
  "from-indigo-500/20 via-violet-500/10 to-blue-500/20",
  "from-cyan-500/20 via-blue-500/10 to-teal-500/20",
  "from-emerald-500/20 via-green-500/10 to-lime-500/20",
  "from-orange-500/20 via-amber-500/10 to-yellow-500/20",
  "from-red-500/20 via-orange-500/10 to-rose-500/20",
  "from-sky-500/20 via-blue-500/10 to-indigo-500/20",
  "from-fuchsia-500/20 via-purple-500/10 to-violet-500/20",
];

export const projectCategories = [
  "All",
  "E-Commerce",
  "Business",
  "Web App",
  "Tools",
  "Security",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export const projects: Project[] = [
  {
    slug: "teen-beauty",
    name: "Teen Beauty",
    url: "http://teenbeauty.com.pk/",
    category: "E-Commerce",
    description:
      "Professional e-commerce platform for a cosmetics brand with modern UI, responsive design, and optimized performance.",
    tags: ["Next.js", "E-Commerce", "Responsive", "Performance"],
    gradient: gradients[0],
    featured: true,
    challenge:
      "Developing a high-speed e-commerce interface capable of displaying vast beauty catalog items on mobile devices with smooth product rendering.",
    solution:
      "Built a Next.js frontend with dynamic routing, optimized image compression, fast client-side state transitions, and responsive cart interaction.",
    keyHighlights: [
      "Sub-second page load times with Next.js image optimization",
      "Mobile-first checkout and product browsing UI",
      "Clean semantic markup for e-commerce search visibility",
    ],
  },
  {
    slug: "moonlight-motifs",
    name: "Moonlight Motifs",
    url: "https://www.moonlightmotifs.com/",
    category: "Business",
    description:
      "Elegant fashion-focused website with premium aesthetics, mobile optimization, and enhanced user experience.",
    tags: ["React", "Fashion", "UI/UX", "Mobile First"],
    gradient: gradients[1],
    featured: true,
    challenge:
      "Balancing high-resolution visual lookbooks with fast page loading speeds and fluid mobile layout rendering.",
    solution:
      "Designed a sleek React interface using modular UI components, lazy-loaded visual media, and smooth micro-animations.",
    keyHighlights: [
      "Fluid micro-animations with minimal JS overhead",
      "Mobile-first responsive typography and touch targets",
      "Structured OpenGraph metadata for social sharing",
    ],
  },
  {
    slug: "tools-web-pro",
    name: "Tools Web Pro",
    url: "https://toolswebpro.com/",
    category: "Tools",
    description:
      "Full-featured utility tools platform focused on speed, usability, and SEO optimization.",
    tags: ["Next.js", "SEO", "Utilities", "Performance"],
    gradient: gradients[2],
    featured: true,
    challenge:
      "Building a suite of client-side web utilities (image compression, PDF converters, SEO analyzers) while maintaining exceptional Google Lighthouse performance scores.",
    solution:
      "Implemented a modular Next.js App Router architecture where each utility runs efficiently in-browser with zero server bottleneck.",
    keyHighlights: [
      "100/100 Google Lighthouse SEO score",
      "20+ client-side web utilities running with zero server delay",
      "Dynamic XML sitemap indexing every tool page",
    ],
  },
  {
    slug: "learnofy",
    name: "Learnofy",
    url: "https://github.com/anonsek/learnofy",
    category: "Web App",
    description:
      "Modern learning platform built with TypeScript for delivering structured educational content and interactive experiences.",
    tags: ["TypeScript", "Web App", "Education", "React"],
    gradient: gradients[3],
    challenge:
      "Designing an intuitive web application state management flow for interactive course navigation and user progress tracking.",
    solution:
      "Leveraged TypeScript type safety and React component state architecture to provide seamless course interaction.",
    keyHighlights: [
      "Strict TypeScript interfaces for state predictability",
      "Accessible interactive course layout",
      "Clean modular code structure for rapid maintenance",
    ],
  },
  {
    slug: "cybersakki-portfolio",
    name: "Cybersakki Portfolio",
    url: "https://cybersakki.vercel.app",
    category: "Business",
    description:
      "Production-ready developer portfolio with dark cyber theme, animations, SEO optimization, and responsive design.",
    tags: ["Next.js", "TypeScript", "Framer Motion", "Tailwind"],
    gradient: gradients[4],
    challenge:
      "Creating a high-performance personal brand portfolio that combines rich visual animations with maximum SEO indexability.",
    solution:
      "Engineered with Next.js 16, Tailwind CSS v4, dynamic JSON-LD schemas, breadcrumb navigation, and multi-page routing.",
    keyHighlights: [
      "Next.js App Router multi-page SEO architecture",
      "Comprehensive Person, WebSite, & Service JSON-LD schemas",
      "100% Core Web Vitals optimization",
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const projectCount = projects.length;
