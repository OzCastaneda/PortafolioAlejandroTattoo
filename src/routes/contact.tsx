import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/features/contact/components";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contacto — Alejandro Tatoo" },
      {
        name: "description",
        content: "Agenda tu cita con Alejandro Tatoo. WhatsApp, Instagram, TikTok y Facebook.",
      },
    ],
  }),
  component: Contact,
});
