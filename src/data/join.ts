export interface LinktreeItem {
  id: string;
  title: string;
  subtitle?: string;
  url: string;
  icon:
    | "Youtube"
    | "Instagram"
    | "Snapchat"
    | "Whatsapp"
    | "Tiktok"
    | "Globe"
    | "Github"
    | "Linkedin"
    | "Mail";
  accentColor: string;
  badge?: string;
}

export const joinProfile = {
  title: "cybersakki",
  handle: "@cybersakki",
};

export const linktreeItems: LinktreeItem[] = [
  {
    id: "virtual-number",
    title: "Virtual Number",
    subtitle: "getotp.net referl cybersakki",
    url: "https://getotp.net/register.php?ref=cybersakki",
    icon: "Globe",
    accentColor: "#00b4ff",
  },
  {
    id: "youtube",
    title: "YouTube",
    subtitle: "@cybersakki",
    url: "https://www.youtube.com/@cybersakki",
    icon: "Youtube",
    accentColor: "#ef4444",
    badge: "600+ Subs",
  },
  {
    id: "instagram",
    title: "Instagram",
    subtitle: "@cybersakki",
    url: "https://www.instagram.com/cybersakki",
    icon: "Instagram",
    accentColor: "#e1306c",
  },
  {
    id: "snapchat",
    title: "Snapchat",
    subtitle: "@cybersakki",
    url: "https://www.snapchat.com/add/cybersakki",
    icon: "Snapchat",
    accentColor: "#eab308",
  },
  {
    id: "whatsapp-channel",
    title: "WhatsApp Channel",
    subtitle: "@cybersakki",
    url: "https://whatsapp.com/channel/0029Vb3hYI8KQuJO5T6XbX1L",
    icon: "Whatsapp",
    accentColor: "#22c55e",
    badge: "Official",
  },
  {
    id: "tiktok",
    title: "TikTok",
    subtitle: "@cybersakki",
    url: "https://www.tiktok.com/@cybersakki",
    icon: "Tiktok",
    accentColor: "#00f2fe",
    badge: "20K+",
  },
  {
    id: "github",
    title: "GitHub",
    subtitle: "@anonsek",
    url: "https://github.com/anonsek",
    icon: "Github",
    accentColor: "#94a3b8",
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    subtitle: "Muhammad Saqlain",
    url: "https://www.linkedin.com/in/muhammad-saqlain-71894b411/",
    icon: "Linkedin",
    accentColor: "#3b82f6",
  },
  {
    id: "email",
    title: "Email",
    subtitle: "cybersakki@gmail.com",
    url: "mailto:cybersakki@gmail.com",
    icon: "Mail",
    accentColor: "#00b4ff",
  },
];
