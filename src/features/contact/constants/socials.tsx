import { WhatsAppIcon, InstagramIcon, TikTokIcon, FacebookIcon } from "@/shared/ui";
import { WHATSAPP_URL } from "@/shared/constants";
import type { SocialLink } from "../types";

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "WhatsApp",
    handle: "Chat directo",
    href: WHATSAPP_URL,
    icon: <WhatsAppIcon />,
    isWhatsApp: true,
  },
  {
    name: "Instagram",
    handle: "@alejotatt00",
    href: "https://www.instagram.com/alejotatt00/",
    icon: <InstagramIcon />,
  },
  {
    name: "TikTok",
    handle: "@alejotatuaje",
    href: "https://www.tiktok.com/@alejotatuaje?_r=1&_t=ZS-96Mb5yDFR0H",
    icon: <TikTokIcon />,
  },
  {
    name: "Facebook",
    handle: "Alejandro Tatoo",
    href: "https://www.facebook.com/share/199TyHzbW4/",
    icon: <FacebookIcon />,
  },
];
