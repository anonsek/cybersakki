import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Custom Website Development",
    fullTitle: "Custom Website Development & Modern Web Solutions",
    description:
      "Modern business websites, landing pages, and company portals built with clean code, modern UI/UX, and high-performance standards.",
    metaDescription:
      "Professional custom website development by Muhammad Saqlain. Modern, fast, and responsive business websites engineered with Next.js, React, and Tailwind CSS.",
    icon: "Globe",
    longDescription: [
      "Custom web development is the foundation of a strong online presence. I design and engineer custom business websites, corporate portals, and high-converting landing pages tailored specifically to your business goals.",
      "Every project is crafted using clean, maintainable code structures, modern responsive design principles, and lightning-fast loading speeds to ensure your visitors enjoy an exceptional user experience on every device.",
    ],
    keyFeatures: [
      "Custom responsive UI/UX tailored to your brand identity",
      "Clean, modular codebase using React and Next.js",
      "Core Web Vitals and speed optimization built-in",
      "Semantic HTML5 for search engine visibility",
      "Cross-browser and multi-device compatibility",
    ],
    techStack: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3"],
    faqs: [
      {
        question: "How long does custom website development usually take?",
        answer:
          "Standard custom business websites typically take 1 to 3 weeks depending on scope, design requirements, and custom feature complexity.",
      },
      {
        question: "Will my website be mobile friendly and responsive?",
        answer:
          "Yes, every website is built using a mobile-first approach, ensuring flawless layout and interaction across smartphones, tablets, and desktops.",
      },
      {
        question: "Do you optimize custom websites for SEO during development?",
        answer:
          "Absolutely. Every custom site includes semantic HTML structure, optimized title/meta tags, OpenGraph data, fast loading speeds, and XML sitemaps.",
      },
    ],
  },
  {
    slug: "nextjs-development",
    title: "Next.js & React Development",
    fullTitle: "Next.js 16 & React Full Stack Application Development",
    description:
      "Scalable Next.js App Router applications with Server Components, SSR, static generation, and high-speed client interactions.",
    metaDescription:
      "Expert Next.js & React development services. Build ultra-fast, SEO-optimized web applications with Next.js App Router, TypeScript, and server rendering.",
    icon: "Code2",
    longDescription: [
      "Next.js is the premier React framework for building production-grade web applications. I specialize in developing modern Next.js 16 applications utilizing the App Router, Server Components, dynamic SSR, and static site generation.",
      "By leveraging server-side rendering and client-side optimization, your web application will achieve top-tier Google Lighthouse performance scores, instant page transitions, and effortless search engine indexability.",
    ],
    keyFeatures: [
      "Next.js App Router architecture and Server Components",
      "Server-Side Rendering (SSR) & Static Site Generation (SSG)",
      "Strict TypeScript type safety and maintainable patterns",
      "API Route integration and REST/GraphQL connectivity",
      "Automated SEO metadata generation and dynamic sitemaps",
    ],
    techStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Node.js"],
    faqs: [
      {
        question: "Why choose Next.js over traditional single-page React apps?",
        answer:
          "Next.js provides built-in Server-Side Rendering (SSR), automatic code splitting, and native SEO optimization out of the box, unlike client-only React apps.",
      },
      {
        question: "Can existing React applications be migrated to Next.js?",
        answer:
          "Yes, I can convert existing React codebase into a structured Next.js App Router application to improve load speed, SEO performance, and maintainability.",
      },
    ],
  },
  {
    slug: "ecommerce-development",
    title: "E-Commerce Development",
    fullTitle: "High-Conversion E-Commerce Website & Storefront Development",
    description:
      "Online stores and e-commerce platforms optimized for conversion rate, seamless checkout, mobile shopping, and speed.",
    metaDescription:
      "Custom e-commerce development services. Fast, secure online stores built for high conversion, mobile shopping, and fast checkout experiences.",
    icon: "ShoppingCart",
    longDescription: [
      "Your e-commerce storefront is your digital revenue driver. I build high-conversion online shopping experiences designed to turn casual browsers into loyal customers.",
      "From mobile-optimized product galleries to intuitive cart flows and secure checkout procedures, every store is engineered for speed, reliability, and sales growth.",
    ],
    keyFeatures: [
      "High-speed product catalog browsing and filtering",
      "Mobile-first responsive shopping interface",
      "Seamless cart state management and checkout integration",
      "Product schema structured data for Google Shopping visibility",
      "Optimized media loading for fast product page rendering",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Stripe / Payment APIs"],
    faqs: [
      {
        question: "How do you ensure e-commerce site speed?",
        answer:
          "By implementing automated image optimization, lazy loading, static page generation for product listings, and minimal JavaScript bundle sizes.",
      },
      {
        question: "Can you integrate custom payment gateways?",
        answer:
          "Yes, custom checkout flows can be integrated with Stripe, PayPal, or regional payment processors according to your business requirements.",
      },
    ],
  },
  {
    slug: "web-application-development",
    title: "Web Application Development",
    fullTitle: "Scalable Full Stack Web Application Development",
    description:
      "Interactive web apps, SaaS dashboards, and complex digital tools engineered with modern frontend & backend integration.",
    metaDescription:
      "Custom full stack web application development. Robust SaaS dashboards, dynamic tools, and web applications built with TypeScript and React.",
    icon: "Code2",
    longDescription: [
      "Complex digital products require robust architecture and predictable logic. I develop full stack web applications, SaaS admin dashboards, and custom web tools that scale gracefully with your user base.",
      "Using TypeScript type safety, modular component architecture, and clean state handling, your web application will remain fast, reliable, and easy to extend.",
    ],
    keyFeatures: [
      "Custom dashboard and web portal UI development",
      "Complex state management and real-time user interaction",
      "RESTful API design and backend endpoint integration",
      "Role-based access control and user authentication UI",
      "Comprehensive frontend testing and error boundary protection",
    ],
    techStack: ["TypeScript", "React", "Next.js", "Node.js", "REST APIs"],
    faqs: [
      {
        question: "What types of web applications do you build?",
        answer:
          "I build custom SaaS dashboards, client portals, utility web tools, workflow automation platforms, and interactive web applications.",
      },
      {
        question: "How do you handle application security?",
        answer:
          "Security best practices like input sanitization, CSRF prevention, HTTPS enforcement, and secure header configurations are implemented from day one.",
      },
    ],
  },
  {
    slug: "website-security",
    title: "Website Security Assessment",
    fullTitle: "Web Security Review, Audit & Vulnerability Hardening",
    description:
      "Web security reviews, vulnerability identification, security header configuration, and defensive web hardening.",
    metaDescription:
      "Professional web security assessment services by security enthusiast Muhammad Saqlain. Vulnerability audits, HTTPS hardening, and security review.",
    icon: "Shield",
    longDescription: [
      "Web security is essential for protecting user data and maintaining user trust. Drawing from web security assessment concepts and penetration testing tools like Kali Linux, I audit web applications for common security flaws.",
      "I identify configuration missteps, audit HTTP security headers, inspect authorization patterns, and provide actionable security hardening recommendations.",
    ],
    keyFeatures: [
      "OWASP Top 10 vulnerability checks and assessment",
      "Security headers configuration (CSP, HSTS, X-Frame-Options)",
      "HTTPS & SSL configuration validation",
      "Authentication and input validation audit",
      "Actionable security remediation reporting",
    ],
    techStack: ["Kali Linux", "OWASP ZAP", "Security Headers", "SSL Audit", "HTTP Standards"],
    faqs: [
      {
        question: "What is included in a web security assessment?",
        answer:
          "A security review includes checking HTTP headers, SSL/TLS setup, input handling, common XSS/SQLi vectors, and security misconfigurations.",
      },
      {
        question: "Do you provide fix implementation after the assessment?",
        answer:
          "Yes, after identifying security issues, I can directly implement header fixes, sanitization logic, and server configuration hardening.",
      },
    ],
  },
  {
    slug: "seo-optimization",
    title: "Technical SEO & Performance",
    fullTitle: "Technical SEO Optimization & Core Web Vitals Acceleration",
    description:
      "Comprehensive technical SEO audits, Core Web Vitals optimization, JSON-LD schema implementation, and search indexing enhancement.",
    metaDescription:
      "Technical SEO & performance optimization services. Improve Google search rankings, Core Web Vitals scores, JSON-LD schemas, and indexability.",
    icon: "Wrench",
    longDescription: [
      "High rankings in search engines require more than content—they require technical excellence. I audit and optimize web applications to ensure maximum crawlability, fast indexation, and top Core Web Vitals performance.",
      "From dynamic XML sitemaps and canonical tags to structured JSON-LD data and LCP acceleration, your website will be engineered for organic search success.",
    ],
    keyFeatures: [
      "Core Web Vitals audit and LCP/INP/CLS speed optimization",
      "Valid Schema.org JSON-LD structured data implementation",
      "Canonical URL configuration and duplicate content prevention",
      "Dynamic XML sitemap and robots.txt generation",
      "Mobile-first indexability and HTML header optimization",
    ],
    techStack: ["Next.js Metadata", "Schema.org", "Lighthouse", "Core Web Vitals", "XML Sitemaps"],
    faqs: [
      {
        question: "What is Technical SEO?",
        answer:
          "Technical SEO focuses on site infrastructure—speed, mobile responsiveness, structured data, clean URLs, and crawlability—so search engines can index your site effectively.",
      },
      {
        question: "How fast can I see SEO improvements after technical fixes?",
        answer:
          "Search engine crawlers typically re-index updated pages within a few days to weeks, after which improvements in crawl speed and search performance become visible.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
