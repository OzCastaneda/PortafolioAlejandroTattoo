import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/features/home/components";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Sobre mí — Alejandro Tatoo" },
      {
        name: "description",
        content:
          "Conoce a Alejandro, tatuador bogotano con más de 9 años de experiencia creando piezas únicas.",
      },
    ],
  }),
  component: About,
});
