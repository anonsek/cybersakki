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
    name: "Teen Beauty",
    url: "http://teenbeauty.com.pk/",
    category: "E-Commerce",
    description:
      "Professional e-commerce platform for a cosmetics brand with modern UI, responsive design, and optimized performance.",
    tags: ["Next.js", "E-Commerce", "Responsive", "Performance"],
    gradient: gradients[0],
    featured: true,
  },
  {
    name: "Moonlight Motifs",
    url: "https://www.moonlightmotifs.com/",
    category: "Business",
    description:
      "Elegant fashion-focused website with premium aesthetics, mobile optimization, and enhanced user experience.",
    tags: ["React", "Fashion", "UI/UX", "Mobile First"],
    gradient: gradients[1],
    featured: true,
  },
  {
    name: "Tools Web Pro",
    url: "https://toolswebpro.com/",
    category: "Tools",
    description:
      "Full-featured utility tools platform focused on speed, usability, and SEO optimization.",
    tags: ["Next.js", "SEO", "Utilities", "Performance"],
    gradient: gradients[2],
    featured: true,
  },
  {
    name: "Learnofy",
    url: "https://github.com/anonsek/learnofy",
    category: "Web App",
    description:
      "Modern learning platform built with TypeScript for delivering structured educational content and interactive experiences.",
    tags: ["TypeScript", "Web App", "Education", "React"],
    gradient: gradients[3],
  },
  {
    name: "Cybersakki Portfolio",
    url: "https://github.com/anonsek/cybersakki",
    category: "Business",
    description:
      "Production-ready developer portfolio with dark cyber theme, animations, SEO optimization, and responsive design.",
    tags: ["Next.js", "TypeScript", "Framer Motion", "Tailwind"],
    gradient: gradients[4],
  },
  {
    name: "Car Parking System",
    url: "https://github.com/anonsek/car-parking",
    category: "Web App",
    description:
      "Frontend for a smart car parking management website with booking interface and responsive layout.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
    gradient: gradients[5],
  },
  {
    name: "Automation Bot",
    url: "https://github.com/anonsek/bot",
    category: "Web App",
    description:
      "JavaScript automation bot for streamlining repetitive web tasks and workflow integrations.",
    tags: ["JavaScript", "Automation", "Node.js", "Bot"],
    gradient: gradients[6],
  },
  {
    name: "PDF Tools Suite",
    url: "https://toolswebpro.com/",
    category: "Tools",
    description:
      "Online PDF conversion and manipulation tools with fast processing and clean user interface.",
    tags: ["PDF", "Converter", "Utilities", "SEO"],
    gradient: gradients[7],
  },
  {
    name: "Image Compressor",
    url: "https://toolswebpro.com/",
    category: "Tools",
    description:
      "Lightweight image compression tool that reduces file size while maintaining visual quality.",
    tags: ["Image", "Compression", "Performance", "Web Tool"],
    gradient: gradients[0],
  },
  {
    name: "QR Code Generator",
    url: "https://toolswebpro.com/",
    category: "Tools",
    description:
      "Instant QR code generator for URLs, text, and contact info with downloadable output formats.",
    tags: ["QR Code", "Generator", "Utilities", "Free Tool"],
    gradient: gradients[1],
  },
  {
    name: "Password Generator",
    url: "https://toolswebpro.com/",
    category: "Security",
    description:
      "Secure password generator with customizable length, symbols, and entropy options.",
    tags: ["Security", "Password", "Generator", "Privacy"],
    gradient: gradients[2],
  },
  {
    name: "JSON Formatter",
    url: "https://toolswebpro.com/",
    category: "Tools",
    description:
      "Developer-friendly JSON formatter and validator with syntax highlighting and error detection.",
    tags: ["JSON", "Developer", "Formatter", "Validation"],
    gradient: gradients[3],
  },
  {
    name: "SEO Meta Analyzer",
    url: "https://toolswebpro.com/",
    category: "Tools",
    description:
      "SEO meta tag analyzer that inspects titles, descriptions, and Open Graph data for any URL.",
    tags: ["SEO", "Analyzer", "Meta Tags", "Marketing"],
    gradient: gradients[4],
  },
  {
    name: "Base64 Encoder/Decoder",
    url: "https://toolswebpro.com/",
    category: "Tools",
    description:
      "Fast Base64 encode and decode utility for developers working with data encoding tasks.",
    tags: ["Base64", "Encoder", "Developer", "Utilities"],
    gradient: gradients[5],
  },
  {
    name: "Word Counter Pro",
    url: "https://toolswebpro.com/",
    category: "Tools",
    description:
      "Advanced word and character counter with reading time estimates for content creators.",
    tags: ["Word Counter", "Content", "Writing", "Analytics"],
    gradient: gradients[6],
  },
  {
    name: "Color Palette Generator",
    url: "https://toolswebpro.com/",
    category: "Tools",
    description:
      "Interactive color palette generator for designers with hex, RGB, and copy-to-clipboard support.",
    tags: ["Design", "Colors", "UI/UX", "Generator"],
    gradient: gradients[7],
  },
  {
    name: "Hash Generator",
    url: "https://toolswebpro.com/",
    category: "Security",
    description:
      "Cryptographic hash generator supporting MD5, SHA-256, and other algorithms for developers.",
    tags: ["Hash", "Security", "Cryptography", "Developer"],
    gradient: gradients[0],
  },
  {
    name: "SSL Certificate Checker",
    url: "https://toolswebpro.com/",
    category: "Security",
    description:
      "Web security tool that validates SSL certificates, expiry dates, and HTTPS configuration.",
    tags: ["SSL", "Security", "HTTPS", "Audit"],
    gradient: gradients[1],
  },
  {
    name: "Website Speed Analyzer",
    url: "https://toolswebpro.com/",
    category: "Tools",
    description:
      "Performance analysis tool measuring page load metrics and optimization opportunities.",
    tags: ["Performance", "Speed", "Lighthouse", "Audit"],
    gradient: gradients[2],
  },
  {
    name: "Meta Tag Generator",
    url: "https://toolswebpro.com/",
    category: "Tools",
    description:
      "SEO meta tag generator for creating optimized title, description, and social preview tags.",
    tags: ["SEO", "Meta Tags", "Open Graph", "Marketing"],
    gradient: gradients[3],
  },
  {
    name: "IP Address Lookup",
    url: "https://toolswebpro.com/",
    category: "Security",
    description:
      "Network utility for IP geolocation, ISP lookup, and basic network information retrieval.",
    tags: ["IP Lookup", "Network", "Security", "Utilities"],
    gradient: gradients[4],
  },
  {
    name: "WHOIS Domain Lookup",
    url: "https://toolswebpro.com/",
    category: "Security",
    description:
      "Domain WHOIS lookup tool for checking registration details, expiry, and DNS information.",
    tags: ["WHOIS", "Domain", "DNS", "Security"],
    gradient: gradients[5],
  },
  {
    name: "Text Case Converter",
    url: "https://toolswebpro.com/",
    category: "Tools",
    description:
      "Multi-format text case converter supporting uppercase, lowercase, title case, and camelCase.",
    tags: ["Text", "Converter", "Utilities", "Developer"],
    gradient: gradients[6],
  },
  {
    name: "URL Encoder/Decoder",
    url: "https://toolswebpro.com/",
    category: "Tools",
    description:
      "URL encoding and decoding utility for handling special characters in web applications.",
    tags: ["URL", "Encoder", "Developer", "Web"],
    gradient: gradients[7],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const projectCount = projects.length;
