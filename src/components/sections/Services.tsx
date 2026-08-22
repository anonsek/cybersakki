"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  ShoppingCart,
  Code2,
  Shield,
  Wrench,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/effects/ScrollReveal";

const iconMap: Record<string, LucideIcon> = {
  Globe,
  ShoppingCart,
  Code2,
  Shield,
  Wrench,
};

export function Services() {
  return (
    <section id="services" className="relative section-padding">
      <div className="container-custom">
        <SectionHeading
          label="Services"
          title="What I Offer"
          description="Comprehensive web development and security services tailored to your business needs."
        />

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.services.map((service, i) => {
            const Icon = iconMap[service.icon] || Code2;
            return (
              <StaggerItem key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="block h-full"
                >
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="glass group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl p-8 transition-all hover:border-primary/30 hover:glow-primary"
                  >
                    <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/5 transition-all group-hover:bg-primary/10" />

                    <div className="relative">
                      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <span className="mb-2 block font-mono text-xs text-primary">
                        0{i + 1}
                      </span>
                      <h3 className="mb-3 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center gap-2 font-mono text-xs text-primary group-hover:translate-x-1 transition-transform">
                      <span>Explore Service Details</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </motion.div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
