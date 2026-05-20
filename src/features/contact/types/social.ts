import type { ReactNode } from "react";

export interface SocialLink {
  name: string;
  handle: string;
  href: string;
  icon: ReactNode;
  isWhatsApp?: boolean;
}
