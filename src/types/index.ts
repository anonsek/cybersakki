export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "security" | "tools";
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  name: string;
  url: string;
  category: string;
  description: string;
  tags: string[];
  gradient: string;
}

export interface WorkflowStep {
  step: number;
  title: string;
  description: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  tagline: string;
  role: string;
  education: string;
  email: string;
  phone: string;
  url: string;
  intro: string;
  about: string[];
  skills: Skill[];
  services: Service[];
  projects: Project[];
  workflow: WorkflowStep[];
  features: Feature[];
  socials: SocialLink[];
}
