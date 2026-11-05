import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { joinProfile } from "@/data/join";
import { constructMetadata, getBreadcrumbSchema } from "@/lib/seo";
import { JoinHub } from "@/components/join/JoinHub";

export const metadata: Metadata = constructMetadata({
  title: `Join & Connect with Muhammad Saqlain (${joinProfile.handle}) | Official Social Links & Deals`,
  description: `Official link-in-bio & join hub for Muhammad Saqlain (${joinProfile.handle}). Direct links to YouTube, Instagram, Snapchat, WhatsApp Channel, TikTok, GitHub, LinkedIn, plus exclusive referral deals like Virtual Number (GetOTP).`,
  path: "/join",
  keywords: [
    "cybersakki",
    "@cybersakki",
    "Join cybersakki",
    "cybersakki social links",
    "cybersakki links",
    "cybersakki youtube",
    "cybersakki instagram",
    "cybersakki snapchat",
    "cybersakki whatsapp channel",
    "cybersakki tiktok",
    "Virtual Number cybersakki",
    "GetOTP referral cybersakki",
    "Pakistani Ethical Hacker socials",
    "Next.js Developer Pakistan",
  ],
});

export default function JoinPage() {
  const breadcrumbItems = [{ label: "Join & Socials", href: "/join" }];
  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbItems);

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteConfig.url}/join#profilepage`,
    url: `${siteConfig.url}/join`,
    name: `Join & Connect with Muhammad Saqlain (${joinProfile.handle})`,
    description: `Official social profiles and referral deals for Muhammad Saqlain (${joinProfile.handle}), Ethical Hacker & Full Stack Next.js Developer in Pakistan.`,
    mainEntity: {
      "@type": "Person",
      name: siteConfig.name,
      alternateName: ["cybersakki", "Cyber Sakki", joinProfile.handle],
      url: siteConfig.url,
      sameAs: [
        "https://www.youtube.com/@cybersakki",
        "https://www.instagram.com/cybersakki",
        "https://www.snapchat.com/add/cybersakki",
        "https://whatsapp.com/channel/0029Vb3hYI8KQuJO5T6XbX1L",
        "https://www.tiktok.com/@cybersakki",
        "https://github.com/anonsek",
        "https://www.linkedin.com/in/muhammad-saqlain-71894b411/",
      ],
    },
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />

      <JoinHub />
    </div>
  );
}

