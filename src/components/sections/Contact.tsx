"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, CheckCircle } from "lucide-react";
import { GitHubIcon, LinkedInIcon, TikTokIcon } from "@/components/ui/social-icons";
import { siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ScrollReveal } from "@/components/effects/ScrollReveal";

const projectTypes = [
  "Custom Website",
  "E-Commerce Store",
  "Web Application",
  "Security Assessment",
  "Website Maintenance",
  "Other",
];

const budgetRanges = [
  "Under $500",
  "$500 - $1,000",
  "$1,000 - $5,000",
  "$5,000+",
  "Let's Discuss",
];

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const subject = encodeURIComponent(
      `Project Inquiry: ${data.projectType} - ${data.name}`
    );
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nProject Type: ${data.projectType}\nBudget: ${data.budget}\n\nMessage:\n${data.message}`
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="relative section-padding">
      <div className="container-custom">
        <SectionHeading
          label="Contact"
          title="Let's Build Something Great"
          description="Have a project in mind? Get in touch and let's discuss how I can help."
        />

        <div className="grid gap-12 lg:grid-cols-5">
          <ScrollReveal direction="left" className="lg:col-span-2">
            <div className="glass glow-primary rounded-2xl p-8">
              <h3 className="mb-4 text-xl font-semibold">Get In Touch</h3>
              <p className="mb-8 text-muted-foreground leading-relaxed">
                Whether you need a new website, web application, or security
                assessment, I&apos;m here to help bring your vision to life.
              </p>

              <div className="space-y-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  {siteConfig.email}
                </a>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  {siteConfig.phone}
                </a>
              </div>

              <div className="mt-8">
                <p className="mb-4 text-sm font-medium text-muted-foreground">
                  Connect with me
                </p>
                <div className="flex gap-3">
                  {siteConfig.socials.map((social) => {
                    const Icon =
                      social.icon === "Github"
                        ? GitHubIcon
                        : social.icon === "Linkedin"
                          ? LinkedInIcon
                          : social.icon === "Tiktok"
                            ? TikTokIcon
                            : Mail;
                    const isExternal = social.url.startsWith("http");
                    return (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        {...(isExternal
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        whileHover={{ y: -3, scale: 1.05 }}
                        className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-muted/30 text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                        aria-label={social.name}
                      >
                        <Icon className="h-5 w-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" className="lg:col-span-3">
            <div className="glass rounded-2xl p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <CheckCircle className="mb-4 h-16 w-16 text-primary" />
                  <h3 className="mb-2 text-xl font-semibold">Message Ready!</h3>
                  <p className="text-muted-foreground">
                    Your email client should open shortly. I&apos;ll get back to
                    you as soon as possible.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        aria-required="true"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        aria-required="true"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="projectType">Project Type</Label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        aria-required="true"
                        className="flex h-11 w-full rounded-lg border border-border bg-muted/50 px-4 py-2 text-sm text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary/50"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select project type
                        </option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget</Label>
                      <select
                        id="budget"
                        name="budget"
                        required
                        aria-required="true"
                        className="flex h-11 w-full rounded-lg border border-border bg-muted/50 px-4 py-2 text-sm text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary/50"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select budget range
                        </option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      required
                      aria-required="true"
                      rows={5}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      "Preparing..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-1" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
