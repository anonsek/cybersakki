"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, FileDown, Copy, Check, ArrowUpRight, Send } from "lucide-react";
import {
  GitHubIcon,
  LinkedInIcon,
  TikTokIcon,
  YouTubeIcon,
  InstagramIcon,
  SnapchatIcon,
  WhatsAppIcon,
} from "@/components/ui/social-icons";
import { siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/effects/ScrollReveal";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = siteConfig.email;
      textArea.style.position = "fixed";
      textArea.style.left = "-9999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } catch (err) {
        console.error("Copy failed", err);
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <section id="contact" className="relative section-padding">
      <div className="container-custom max-w-4xl">
        <SectionHeading
          label="Contact"
          title="Let's Build Something Great"
          description="Have a project in mind, a security review request, or a collaboration inquiry? Reach out directly via email."
        />

        <ScrollReveal direction="up">
          <div className="glass glow-primary relative overflow-hidden rounded-3xl border border-primary/25 p-8 sm:p-12 text-center shadow-2xl shadow-primary/10">
            {/* Ambient cyber glow */}
            <div
              className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-96 rounded-full bg-primary/15 blur-3xl -z-10"
              aria-hidden="true"
            />

            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 border border-primary/30 text-primary shadow-lg shadow-primary/20">
              <Mail className="h-8 w-8 text-primary" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Direct Email
            </h3>
            <p className="mx-auto mt-2 max-w-lg text-sm sm:text-base text-muted-foreground">
              I am available for penetration testing audits, Next.js web application development, security consulting, and brand sponsorships.
            </p>

            {/* Email Box */}
            <div className="mt-8 mx-auto max-w-md rounded-2xl border border-border bg-card/80 p-4 shadow-inner">
              <span className="block font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1">
                Official Email Address
              </span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-mono text-lg sm:text-2xl font-bold text-primary hover:underline transition-all block break-all"
              >
                {siteConfig.email}
              </a>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" className="rounded-xl px-6">
                <a href={`mailto:${siteConfig.email}`}>
                  <Send className="mr-1.5 h-4 w-4" />
                  Send Email
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={handleCopyEmail}
                className="rounded-xl border-border bg-card/60 hover:bg-primary/10 hover:border-primary/40"
              >
                {copied ? (
                  <>
                    <Check className="mr-1.5 h-4 w-4 text-emerald-400" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="mr-1.5 h-4 w-4" />
                    Copy Email
                  </>
                )}
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-xl border-border bg-card/60 hover:bg-primary/10 hover:border-primary/40"
              >
                <a
                  href={siteConfig.resumeUrl}
                  download="Muhammad-Saqlain-Resume.pdf"
                >
                  <FileDown className="mr-1.5 h-4 w-4" />
                  Download Resume (PDF)
                </a>
              </Button>
            </div>

            {/* Social links row */}
            <div className="mt-12 border-t border-border/60 pt-8">
              <p className="mb-4 text-xs sm:text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Connect Across Platforms
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {siteConfig.socials.map((social) => {
                  const iconMap: Record<
                    string,
                    React.ComponentType<{ className?: string }>
                  > = {
                    Github: GitHubIcon,
                    Linkedin: LinkedInIcon,
                    Tiktok: TikTokIcon,
                    Youtube: YouTubeIcon,
                    Instagram: InstagramIcon,
                    Snapchat: SnapchatIcon,
                    Whatsapp: WhatsAppIcon,
                    Mail: Mail,
                  };
                  const Icon = iconMap[social.icon] || Mail;
                  const isExternal = social.url.startsWith("http");

                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      {...(isExternal
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      whileHover={{ y: -3, scale: 1.05 }}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card/60 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary hover:bg-primary/10"
                      aria-label={social.name}
                      title={social.name}
                    >
                      <Icon className="h-5 w-5" />
                    </motion.a>
                  );
                })}
              </div>

              <div className="mt-6">
                <a
                  href="/join"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:underline"
                >
                  <span>View all social channels & deals on /join</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
