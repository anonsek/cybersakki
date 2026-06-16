"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/effects/ScrollReveal";

export function Projects() {
  return (
    <section id="projects" className="relative section-padding">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent" />

      <div className="container-custom relative">
        <SectionHeading
          label="Portfolio"
          title="Featured Projects"
          description="Real-world projects delivering modern, high-performance web experiences."
        />

        <StaggerContainer className="grid gap-8 lg:grid-cols-3">
          {siteConfig.projects.map((project) => (
            <StaggerItem key={project.name}>
              <motion.article
                whileHover={{ y: -8 }}
                className="glass group flex h-full flex-col overflow-hidden rounded-2xl transition-all hover:border-primary/30 hover:glow-primary"
              >
                <div
                  className={`relative h-48 overflow-hidden bg-gradient-to-br ${project.gradient}`}
                >
                  <div className="absolute inset-0 grid-bg opacity-50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="glass rounded-xl p-6 transition-transform group-hover:scale-105">
                      <div className="mb-3 flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-red-500/80" />
                        <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                        <div className="h-3 w-3 rounded-full bg-green-500/80" />
                      </div>
                      <div className="space-y-2 font-mono text-xs">
                        <div className="h-2 w-32 rounded bg-primary/30" />
                        <div className="h-2 w-24 rounded bg-primary/20" />
                        <div className="h-2 w-28 rounded bg-primary/15" />
                        <div className="mt-3 h-16 w-40 rounded border border-primary/20 bg-primary/5" />
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="rounded-full bg-background/80 px-3 py-1 text-xs font-medium backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    <ArrowUpRight className="h-10 w-10 text-primary" />
                  </motion.div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 text-xl font-bold group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <p className="mb-4 flex-1 text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full group/btn" asChild>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.name} website`}
                    >
                      Live Website
                      <ExternalLink className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  </Button>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
