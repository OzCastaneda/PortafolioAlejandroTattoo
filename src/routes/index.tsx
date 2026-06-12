import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/shared/constants";
import { Hero } from "@/features/home/components";
import { BonusWheel } from "@/features/bonus-wheel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${SITE.name} — ${SITE.tagline}` },
      { name: "description", content: SITE.description },
      { property: "og:title", content: `${SITE.name} — ${SITE.tagline}` },
      {
        property: "og:description",
        content: "Participa y gana hasta un 50% de descuento en tu próximo tatuaje en Bogotá.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <BonusWheel />
    </>
  );
}
