import { createFileRoute } from "@tanstack/react-router";
import { Works } from "@/features/portfolio/components";

export const Route = createFileRoute("/works")({
  head: () => ({
    meta: [
      { title: "Trabajos — Alejandro Tatoo" },
      {
        name: "description",
        content:
          "Galería de trabajos recientes de Alejandro Tatoo. Tatuajes personalizados en Bogotá.",
      },
    ],
  }),
  component: Works,
});
