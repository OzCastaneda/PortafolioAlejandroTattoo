import { createFileRoute } from "@tanstack/react-router";
<<<<<<< HEAD
import { Header, Hero, About } from "@/features/home/components";
import { Styles, Works } from "@/features/portfolio/components";
import { Contact, WhatsAppButton, Footer } from "@/features/contact/components";
import { SITE } from "@/shared/constants";
=======
import { SITE } from "@/shared/constants";
import { Hero } from "@/features/home/components";
import { BonusWheel } from "@/features/bonus-wheel";
>>>>>>> 4fc1b16 (feat: refactor architecture, add discount wheel, improve responsive layout and update documentation)

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${SITE.name} — ${SITE.tagline}` },
      { name: "description", content: SITE.description },
      { property: "og:title", content: `${SITE.name} — ${SITE.tagline}` },
<<<<<<< HEAD
      { property: "og:description", content: "Artista bogotano con nueve años de experiencia creando tatuajes únicos." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600&display=swap" },
=======
      {
        property: "og:description",
        content: "Participa y gana hasta un 50% de descuento en tu próximo tatuaje en Bogotá.",
      },
>>>>>>> 4fc1b16 (feat: refactor architecture, add discount wheel, improve responsive layout and update documentation)
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
<<<<<<< HEAD
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
=======
    <>
      <Hero />
      <BonusWheel />
    </>
>>>>>>> 4fc1b16 (feat: refactor architecture, add discount wheel, improve responsive layout and update documentation)
  );
}
