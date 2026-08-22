import type { SiteConfig } from "@/types";
import { projects } from "@/data/projects";
import { services } from "@/data/services";

export const siteConfig: SiteConfig = {
  name: "Muhammad Saqlain",
  title: "Muhammad Saqlain | Full Stack Web Developer & Web Security Specialist",
  description:
    "Muhammad Saqlain is a Full Stack Web Developer and Web Security Specialist creating ultra-fast, secure, and modern web applications with Next.js, React, and TypeScript.",
  tagline: "Building Fast, Secure & Modern Web Applications",
  role: "Full Stack Web Developer & Web Security Specialist",
  education: "BS Computer Science",
  email: "cybersakki@gmail.com",
  phone: "+923470019309",
  url: "https://cybersakki.vercel.app",
  resumeUrl: "/resume.pdf",
  intro:
    "I engineer high-performance business websites, scalable React/Next.js web applications, and security-hardened digital platforms that help companies grow online.",
  about: [
    "Muhammad Saqlain is a BS Computer Science graduate passionate about building scalable web applications, modern business websites, and improving web security.",
    "He combines frontend excellence with React and Next.js, full-stack API development, and security-focused testing to create fast, reliable, and secure web experiences.",
  ],
  skills: [
    { name: "Next.js", level: 95, category: "frontend" },
    { name: "React.js", level: 92, category: "frontend" },
    { name: "JavaScript", level: 94, category: "frontend" },
    { name: "TypeScript", level: 90, category: "frontend" },
    { name: "Tailwind CSS", level: 95, category: "frontend" },
    { name: "Node.js", level: 86, category: "backend" },
    { name: "REST APIs", level: 88, category: "backend" },
    { name: "Git", level: 85, category: "tools" },
    { name: "GitHub", level: 88, category: "tools" },
    { name: "Web Development", level: 95, category: "frontend" },
    { name: "Responsive Design", level: 95, category: "frontend" },
    { name: "Kali Linux", level: 80, category: "security" },
    { name: "Web Security Review", level: 78, category: "security" },
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
      name: "TikTok",
      url: "https://www.tiktok.com/@cybersakki",
      icon: "Tiktok",
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

