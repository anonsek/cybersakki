"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/effects/ScrollReveal";

const categoryColors = {
  frontend: "from-blue-500 to-cyan-500",
  backend: "from-purple-500 to-pink-500",
  security: "from-red-500 to-orange-500",
  tools: "from-green-500 to-emerald-500",
};

const categoryLabels = {
  frontend: "Frontend",
  backend: "Backend",
  security: "Security",
  tools: "Tools & SEO",
};

export function Skills() {
  const categories = ["frontend", "backend", "security", "tools"] as const;

  return (
    <section id="skills" className="relative section-padding">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="container-custom relative">
        <SectionHeading
          label="Skills"
          title="Technical Expertise"
          description="A comprehensive toolkit for building modern, secure web applications."
        />

        {categories.map((category) => {
          const skills = siteConfig.skills.filter(
            (s) => s.category === category
          );
          if (skills.length === 0) return null;

          return (
            <div key={category} className="mb-12 last:mb-0">
              <h3 className="mb-6 text-lg font-semibold text-primary">
                {categoryLabels[category]}
              </h3>
              <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {skills.map((skill) => (
                  <StaggerItem key={skill.name}>
                    <motion.div
                      whileHover={{ y: -4, scale: 1.02 }}
                      className="glass group rounded-xl p-5 transition-all hover:border-primary/30"
                    >
                      <div className="mb-3 flex items-center justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span className="font-mono text-xs text-primary">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-muted">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: 0.2,
                            ease: [0.25, 0.4, 0.25, 1],
                          }}
                          className={`h-full rounded-full bg-gradient-to-r ${categoryColors[skill.category]}`}
                        />
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          );
        })}
      </div>
    </section>
  );
}
