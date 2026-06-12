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
<<<<<<< HEAD
    handle: "@alejotatuaje",
    href: "https://www.instagram.com/alejotatuaje?utm_source=qr&igsh=MW0yZHdyOTlybmpvdw==",
=======
    handle: "@alejotatt00",
    href: "https://www.instagram.com/alejotatt00/",
>>>>>>> 4fc1b16 (feat: refactor architecture, add discount wheel, improve responsive layout and update documentation)
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
