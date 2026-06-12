import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/shared/constants";
import { Hero } from "@/features/home/components";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${SITE.name} — ${SITE.tagline}` },
      { name: "description", content: SITE.description },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return <Hero />;
}
