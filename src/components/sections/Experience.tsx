"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/effects/ScrollReveal";

export function Experience() {
  return (
    <section id="process" className="relative section-padding">
      <div className="container-custom">
        <SectionHeading
          label="Workflow"
          title="Experience & Process"
          description="A proven development workflow ensuring quality, security, and timely delivery."
        />

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent md:left-1/2 md:-translate-x-px" />

          {siteConfig.workflow.map((step, i) => (
            <ScrollReveal key={step.step} delay={i * 0.1}>
              <div
                className={`relative mb-12 flex items-start gap-8 last:mb-0 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className={`hidden flex-1 md:block ${
                    i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass inline-block rounded-xl p-6 text-left"
                  >
                    <span className="mb-2 block font-mono text-xs text-primary">
                      Step {String(step.step).padStart(2, "0")}
                    </span>
                    <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </motion.div>
                </div>

                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center md:absolute md:left-1/2 md:-translate-x-1/2">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-background font-mono text-lg font-bold text-primary glow-primary"
                  >
                    {step.step}
                  </motion.div>
                </div>

                <div className="flex-1 md:hidden">
                  <span className="mb-1 block font-mono text-xs text-primary">
                    Step {String(step.step).padStart(2, "0")}
                  </span>
                  <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>

                <div className="hidden flex-1 md:block" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
