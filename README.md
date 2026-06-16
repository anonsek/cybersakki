# Sakki Portfolio

> A production-ready personal portfolio for **Muhammad Saqlain** — Full Stack Web Developer & Web Security Enthusiast.

Built with a modern SaaS-inspired design, dark cyber-blue aesthetics, and a focus on performance, accessibility, and SEO.

---

## Overview

This repository contains the source code for a high-conversion developer portfolio showcasing skills, services, featured client projects, and a contact workflow. The site is fully static, optimized for Core Web Vitals, and structured for easy content updates without touching component logic.

**Live site:** [muhammadsaqlain.dev](https://muhammadsaqlain.dev) *(update after deployment)*

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| Language | [TypeScript 5](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Animation | [Framer Motion 12](https://www.framer.com/motion/) |
| UI Primitives | [Radix UI](https://www.radix-ui.com/) + Shadcn-style components |
| Icons | [Lucide React](https://lucide.dev/) |
| Tooling | ESLint, PostCSS |

---

## Features

### Design & UX
- Dark theme with cyber-blue accent palette and glassmorphism
- Animated grid background, terminal code blocks, and floating tech icons
- Smooth scroll navigation with active section highlighting
- Custom cursor effect (desktop / pointer-fine devices only)
- Scroll-reveal animations powered by Framer Motion
- Fully responsive layout — mobile, tablet, and desktop

### Sections
| Section | Description |
|---------|-------------|
| **Hero** | Introduction, tagline, CTAs, animated terminal |
| **About** | Background, education, and core strengths |
| **Skills** | 14 skills with animated progress indicators |
| **Services** | Custom web dev, e-commerce, security, maintenance |
| **Projects** | Featured work with live links and tech tags |
| **Process** | 6-step development workflow timeline |
| **Why Me** | Value proposition feature cards |
| **Contact** | Project inquiry form + social links |
| **Footer** | Quick links, contact info, auto-updated copyright |

### Engineering
- Static site generation (SSG) for fast page loads
- Code splitting via Next.js App Router
- Centralized content configuration in a single data file
- Reusable, typed component architecture
- Accessibility best practices (semantic HTML, ARIA labels, keyboard nav)

### SEO & Discoverability
- Dynamic metadata, Open Graph, and Twitter Cards
- JSON-LD structured data (`Person` schema)
- Auto-generated `sitemap.xml` and `robots.txt`
- Web app manifest for PWA-ready metadata

---

## Prerequisites

- **Node.js** 20.x or later
- **npm** 10.x or later

Verify your environment:

```bash
node -v
npm -v
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/anonsek/sakki-portfolio.git
cd sakki-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create an optimized production build |
| `npm start` | Serve the production build locally |
| `npm run lint` | Run ESLint across the codebase |

---

## Project Structure

```
sakki-portfolio/
├── public/
│   └── icon.svg                 # Favicon / PWA icon
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout, fonts, metadata, JSON-LD
│   │   ├── page.tsx             # Home page (section composition)
│   │   ├── loading.tsx          # Route-level loading UI
│   │   ├── globals.css          # Tailwind v4 theme & global styles
│   │   ├── manifest.ts          # PWA manifest
│   │   ├── sitemap.ts           # Dynamic sitemap generation
│   │   └── robots.ts            # Crawler rules
│   ├── components/
│   │   ├── effects/             # AnimatedGrid, CustomCursor, TerminalCode, ScrollReveal
│   │   ├── layout/              # Navbar, Footer
│   │   ├── sections/            # Hero, About, Skills, Services, Projects, etc.
│   │   └── ui/                  # Button, Card, Input, Badge, social icons
│   ├── data/
│   │   └── site.ts              # ⭐ Single source of truth for all site content
│   ├── lib/
│   │   ├── seo.ts               # Metadata & structured data helpers
│   │   └── utils.ts             # cn(), scrollToSection()
│   └── types/
│       └── index.ts               # Shared TypeScript interfaces
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## Configuration

All portfolio content lives in **`src/data/site.ts`**. Edit this file to update the site without modifying components.

```ts
export const siteConfig: SiteConfig = {
  name: "Muhammad Saqlain",
  email: "cybersakki@gmail.com",
  phone: "+923470019309",
  url: "https://muhammadsaqlain.dev",   // Update to your production domain
  skills: [...],
  services: [...],
  projects: [...],
  socials: [...],
};
```

### What you can customize

| Field | Purpose |
|-------|---------|
| `name`, `role`, `education`, `tagline` | Identity & headline copy |
| `email`, `phone`, `socials` | Contact & social links |
| `url` | Canonical domain for SEO, sitemap, and OG tags |
| `skills` | Skill name, proficiency level (0–100), category |
| `services` | Service cards with title, description, icon key |
| `projects` | Portfolio items with live URL, tags, and gradient |
| `workflow` | Process timeline steps |
| `features` | "Why work with me" cards |

SEO metadata is derived automatically from `siteConfig` in `src/lib/seo.ts`.

---

## Deployment

### Vercel (recommended)

1. Push the repository to GitHub
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — no extra config needed
4. Set your custom domain and update `siteConfig.url`

### Other platforms

```bash
npm run build
npm start
```

Any Node.js host that supports Next.js 16 will work (Railway, Render, DigitalOcean App Platform, etc.).

### Pre-deploy checklist

- [ ] Update `siteConfig.url` to your production domain
- [ ] Verify social links and contact info in `site.ts`
- [ ] Run `npm run build` locally to confirm a clean build
- [ ] Run `npm run lint` to catch issues before shipping
- [ ] Test contact form mailto flow on mobile and desktop

---

## Performance Goals

This project is architected to target strong Lighthouse scores:

| Category | Target |
|----------|--------|
| Performance | 95+ |
| SEO | 95+ |
| Accessibility | 95+ |
| Best Practices | 95+ |

Optimizations include static generation, font display swap, minimal client JS per section, and lazy viewport-triggered animations.

---

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome / Edge | ✅ Full |
| Firefox | ✅ Full |
| Safari | ✅ Full |
| Mobile browsers | ✅ Full |
| Custom cursor | Desktop pointer devices only |

---

## Author

**Muhammad Saqlain**  
Full Stack Web Developer & Web Security Enthusiast  
BS Computer Science

| | |
|---|---|
| Email | [cybersakki@gmail.com](mailto:cybersakki@gmail.com) |
| Phone | [+92 347 0019309](tel:+923470019309) |
| GitHub | [@anonsek](https://github.com/anonsek) |
| LinkedIn | [muhammad-saqlain](https://www.linkedin.com/in/muhammad-saqlain-71894b411/) |
| TikTok | [@cybersakki](https://www.tiktok.com/@cybersakki) |

---

## License

This project is **private** and not licensed for redistribution.  
© Muhammad Saqlain. All rights reserved.
