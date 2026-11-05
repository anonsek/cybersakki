"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Mail } from "lucide-react";
import {
  GitHubIcon,
  LinkedInIcon,
  TikTokIcon,
  YouTubeIcon,
  InstagramIcon,
  SnapchatIcon,
  WhatsAppIcon,
} from "@/components/ui/social-icons";
import { joinProfile, linktreeItems, type LinktreeItem } from "@/data/join";

const iconMap = {
  Youtube: YouTubeIcon,
  Instagram: InstagramIcon,
  Snapchat: SnapchatIcon,
  Whatsapp: WhatsAppIcon,
  Tiktok: TikTokIcon,
  Globe: Globe,
  Github: GitHubIcon,
  Linkedin: LinkedInIcon,
  Mail: Mail,
};

export function JoinHub() {
  return (
    <div className="relative mx-auto max-w-md px-4 pt-16 sm:pt-20 pb-12">
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 h-56 w-56 rounded-full bg-primary/15 blur-[80px] -z-10"
        aria-hidden="true"
      />

      {/* Header - Just cybersakki */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-center"
      >
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground font-mono">
          {joinProfile.title}
        </h1>
      </motion.div>

      {/* Link List */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.05 }}
        className="mt-4 sm:mt-5 space-y-2.5"
      >
        {linktreeItems.map((item: LinktreeItem, idx: number) => {
          const Icon = iconMap[item.icon] || Globe;
          const isExternal = item.url.startsWith("http");

          return (
            <motion.a
              key={item.id}
              href={item.url}
              {...(isExternal
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.03 * idx }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="glass group relative flex items-center justify-between rounded-2xl border p-3.5 transition-all duration-200 hover:border-primary/50 hover:bg-primary/10 shadow-sm hover:shadow-lg hover:shadow-primary/10"
              style={{
                borderColor: `${item.accentColor}30`,
              }}
            >
              {/* Left: App Icon & Name */}
              <div className="flex items-center gap-3.5 min-w-0">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-110"
                  style={{
                    backgroundColor: `${item.accentColor}18`,
                    color: item.accentColor,
                  }}
                >
                  <Icon className="h-5 w-5" />
                </div>

                <div className="min-w-0 text-left">
                  <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                    {item.title}
                  </div>
                  {item.subtitle && (
                    <div className="font-mono text-[11px] text-muted-foreground truncate">
                      {item.subtitle}
                    </div>
                  )}
                </div>
              </div>

              {/* Right: Badge / Arrow */}
              <div className="flex items-center gap-2 shrink-0 ml-3">
                {item.badge && (
                  <span
                    className="rounded-full px-2 py-0.5 font-mono text-[10px] font-semibold border"
                    style={{
                      backgroundColor: `${item.accentColor}15`,
                      color: item.accentColor,
                      borderColor: `${item.accentColor}30`,
                    }}
                  >
                    {item.badge}
                  </span>
                )}
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/60 bg-card/60 text-muted-foreground group-hover:text-primary group-hover:border-primary/40 transition-colors">
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.a>
          );
        })}
      </motion.div>

      {/* Footer link to home */}
      <div className="mt-8 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
        >
          <span>← cybersakki</span>
        </Link>
      </div>
    </div>
  );
}
