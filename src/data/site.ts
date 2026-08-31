import type { SiteConfig } from "@/types";
import { projects } from "@/data/projects";
import { services } from "@/data/services";

export const siteConfig: SiteConfig = {
  name: "Muhammad Saqlain",
  title: "Muhammad Saqlain | Ethical Hacker & Full Stack Next.js Developer in Pakistan",
  description:
    "Muhammad Saqlain (@cybersakki) is a leading Ethical Hacker and Full Stack Next.js Developer in Pakistan. Specializing in penetration testing, web security reviews, custom high-performance React/Next.js web applications, and technical SEO.",
  tagline: "Pakistani Ethical Hacker & Full Stack Next.js Developer",
  role: "Ethical Hacker & Full Stack Next.js Developer in Pakistan",
  education: "BS Computer Science",
  email: "cybersakki@gmail.com",
  phone: "+923470019309",
  url: "https://cybersakki.vercel.app",
  resumeUrl: "/resume.pdf",
  intro:
    "Ethical Hacker and Full Stack Next.js Developer based in Pakistan. I engineer high-performance, security-hardened web applications with React, Next.js, and TypeScript, and conduct comprehensive web penetration testing and vulnerability assessments. Also a prominent Cybersecurity Content Creator on TikTok (@cybersakki, 20k+ followers) and YouTube (600+ subscribers).",
  about: [
    "Muhammad Saqlain is a BS Computer Science graduate, Ethical Hacker, and Full Stack Next.js Developer based in Pakistan.",
    "Specializing in penetration testing, OWASP web security auditing, Kali Linux, and full-stack Next.js architecture, he builds resilient, ultra-fast, and secure web applications.",
    "As an active Pakistani cybersecurity content creator with 20k+ followers on TikTok (@cybersakki) and 600+ YouTube subscribers, he teaches ethical hacking, bug hunting techniques, and modern full-stack web development.",
    "Open for penetration testing audits, custom Next.js web application development, security consulting, technical SEO, brand collaborations, and tech sponsorships across Pakistan and worldwide.",
  ],
  skills: [
    { name: "Next.js", level: 95, category: "frontend" },
    { name: "React.js", level: 92, category: "frontend" },
    { name: "JavaScript", level: 94, category: "frontend" },
    { name: "TypeScript", level: 90, category: "frontend" },
    { name: "Tailwind CSS", level: 95, category: "frontend" },
    { name: "Node.js", level: 86, category: "backend" },
    { name: "REST APIs", level: 88, category: "backend" },
    { name: "Full Stack Architecture", level: 90, category: "backend" },
    { name: "Git & GitHub", level: 88, category: "tools" },
    { name: "Responsive Design", level: 95, category: "frontend" },
    { name: "Ethical Hacking", level: 90, category: "security" },
    { name: "Penetration Testing", level: 88, category: "security" },
    { name: "Kali Linux", level: 85, category: "security" },
    { name: "OWASP Top 10 & Web Security", level: 90, category: "security" },
    { name: "Vulnerability Assessment", level: 86, category: "security" },
    { name: "Technical SEO", level: 92, category: "tools" },
    { name: "Core Web Vitals", level: 94, category: "tools" },
  ],
  services,
  projects,
  workflow: [
    {
      step: 1,
      title: "Requirement & Architecture Planning",
      description: "Understanding business goals, target audience, technical scope, and SEO objectives.",
    },
    {
      step: 2,
      title: "UI/UX & Mobile First Design",
      description: "Crafting wireframes and responsive interfaces optimized for conversion.",
    },
    {
      step: 3,
      title: "Clean Next.js & React Codebase",
      description: "Engineering scalable frontend and backend code with strict TypeScript safety.",
    },
    {
      step: 4,
      title: "Security & Vulnerability Review",
      description: "Auditing headers, input handling, and security best practices.",
    },
    {
      step: 5,
      title: "Technical SEO & Speed Launch",
      description: "Optimizing Core Web Vitals, JSON-LD schemas, and launching with zero downtime.",
    },
    {
      step: 6,
      title: "Ongoing Maintenance & Growth",
      description: "Monitoring performance, security updates, and continuous platform improvements.",
    },
  ],
  features: [
    {
      title: "Clean Code",
      description: "Maintainable, well-structured codebase built to scale.",
      icon: "FileCode2",
    },
    {
      title: "Fast Loading Websites",
      description: "Optimized performance for lightning-fast page loads.",
      icon: "Zap",
    },
    {
      title: "Mobile First Development",
      description: "Responsive designs that work flawlessly on every device.",
      icon: "Smartphone",
    },
    {
      title: "Security Focused",
      description: "Security best practices integrated from the start.",
      icon: "Lock",
    },
    {
      title: "SEO Friendly",
      description: "Built for search visibility and organic growth.",
      icon: "Search",
    },
    {
      title: "Modern Technologies",
      description: "Latest frameworks and tools for future-proof solutions.",
      icon: "Cpu",
    },
    {
      title: "Reliable Communication",
      description: "Clear updates and transparent project collaboration.",
      icon: "MessageCircle",
    },
    {
      title: "Long-Term Support",
      description: "Continued maintenance and partnership after launch.",
      icon: "HeartHandshake",
    },
  ],
  socials: [
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@cybersakki",
      icon: "Tiktok",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@cybersakki",
      icon: "Youtube",
    },
    {
      name: "GitHub",
      url: "https://github.com/anonsek",
      icon: "Github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/muhammad-saqlain-71894b411/",
      icon: "Linkedin",
    },
    {
      name: "Email",
      url: "mailto:cybersakki@gmail.com",
      icon: "Mail",
    },
  ],
};


export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

