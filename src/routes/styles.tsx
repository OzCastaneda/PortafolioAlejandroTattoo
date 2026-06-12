import { createFileRoute } from "@tanstack/react-router";
import { Styles } from "@/features/portfolio/components";

export const Route = createFileRoute("/styles")({
  head: () => ({
    meta: [
      { title: "Estilos — Alejandro Tatoo" },
      {
        name: "description",
        content:
          "Blackwork, realismo, neotradicional, lettering y anime. Descubre los estilos que tatúa Alejandro.",
      },
    ],
  }),
  component: Styles,
});
