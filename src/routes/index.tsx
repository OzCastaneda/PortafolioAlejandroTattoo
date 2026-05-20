import { createFileRoute } from "@tanstack/react-router";
import { Header, Hero, About } from "@/features/home/components";
import { Styles, Works } from "@/features/portfolio/components";
import { Contact, WhatsAppButton, Footer } from "@/features/contact/components";
import { SITE } from "@/shared/constants";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${SITE.name} — ${SITE.tagline}` },
      { name: "description", content: SITE.description },
      { property: "og:title", content: `${SITE.name} — ${SITE.tagline}` },
      { property: "og:description", content: "Artista bogotano con nueve años de experiencia creando tatuajes únicos." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600&display=swap" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <Styles />
      <Works />
      <Contact />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}
