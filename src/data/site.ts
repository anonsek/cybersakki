import type { SiteConfig } from "@/types";
import { projects } from "@/data/projects";

export const siteConfig: SiteConfig = {
  name: "Muhammad Saqlain",
  title: "Muhammad Saqlain | Full Stack Web Developer & Web Security Enthusiast",
  description:
    "Muhammad Saqlain is a Full Stack Web Developer and Web Security Enthusiast specializing in fast, secure, and modern web experiences. View projects and get in touch.",
  tagline: "Building Fast, Secure & Modern Web Experiences",
  role: "Full Stack Web Developer & Web Security Enthusiast",
  education: "BS Computer Science",
  email: "cybersakki@gmail.com",
  phone: "+923470019309",
  url: "https://muhammadsaqlain.dev",
  intro:
    "I create modern, high-performance websites and secure web applications that help businesses grow online.",
  about: [
    "Muhammad Saqlain is a BS Computer Science graduate passionate about building scalable web applications, modern business websites, and improving web security.",
    "He combines frontend excellence, backend development, and security-focused thinking to create fast, reliable, and secure digital experiences.",
  ],
  skills: [
    { name: "Next.js", level: 92, category: "frontend" },
    { name: "React.js", level: 90, category: "frontend" },
    { name: "JavaScript", level: 93, category: "frontend" },
    { name: "TypeScript", level: 88, category: "frontend" },
    { name: "Tailwind CSS", level: 95, category: "frontend" },
    { name: "Git", level: 85, category: "tools" },
    { name: "GitHub", level: 88, category: "tools" },
    { name: "Web Development", level: 92, category: "frontend" },
    { name: "Responsive Design", level: 94, category: "frontend" },
    { name: "REST APIs", level: 87, category: "backend" },
    { name: "Kali Linux", level: 78, category: "security" },
    { name: "Web Penetration Testing", level: 75, category: "security" },
    { name: "SEO Optimization", level: 90, category: "tools" },
    { name: "Performance Optimization", level: 91, category: "tools" },
  ],
  services: [
    {
      title: "Custom Website Development",
      description:
        "Modern business websites, landing pages, and company portals.",
      icon: "Globe",
    },
    {
      title: "E-Commerce Development",
      description:
        "Online stores optimized for conversion and performance.",
      icon: "ShoppingCart",
    },
    {
      title: "Web Application Development",
      description: "Scalable web apps using modern technologies.",
      icon: "Code2",
    },
    {
      title: "Website Security Assessment",
      description:
        "Basic web security reviews and vulnerability identification.",
      icon: "Shield",
    },
    {
      title: "Website Maintenance",
      description: "Ongoing updates, monitoring, and optimization.",
      icon: "Wrench",
    },
  ],
  projects,
  workflow: [
    {
      step: 1,
      title: "Requirement Gathering",
      description: "Understanding your goals, audience, and project scope.",
    },
    {
      step: 2,
      title: "UI/UX Planning",
      description: "Designing wireframes and user-focused interfaces.",
    },
    {
      step: 3,
      title: "Development",
      description: "Building with clean, scalable, modern code.",
    },
    {
      step: 4,
      title: "Security Testing",
      description: "Reviewing for vulnerabilities and best practices.",
    },
    {
      step: 5,
      title: "Deployment",
      description: "Launching with optimized performance and SEO.",
    },
    {
      step: 6,
      title: "Maintenance & Support",
      description: "Ongoing updates, monitoring, and improvements.",
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
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];
