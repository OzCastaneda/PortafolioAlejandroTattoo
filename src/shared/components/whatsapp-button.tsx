import { WhatsAppIcon } from "@/shared/ui";
import { WHATSAPP_URL } from "@/shared/constants";

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40 bg-[#25D366] text-white p-3.5 sm:p-4 rounded-full shadow-2xl shadow-[#25D366]/40 hover:scale-110 hover:shadow-[#25D366]/60 transition-all duration-300 animate-bounce-slow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppIcon className="h-6 w-6 sm:h-7 sm:w-7" />
    </a>
  );
}
