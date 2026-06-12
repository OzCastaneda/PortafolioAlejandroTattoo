import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/alejandro-hero.jpeg";
import { WhatsAppIcon, PlayIcon } from "@/shared/ui";
import { WHATSAPP_URL } from "@/shared/constants";

const btnBase =
  "inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm uppercase tracking-widest font-semibold transition rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary";

export function Hero() {
  return (
    <section className="relative min-h-dvh grid lg:grid-cols-2">
      <div className="relative overflow-hidden bg-ink min-h-[50dvh] lg:min-h-dvh">
        <img
          src={heroImg}
          alt="Alejandro Tatoo, artista tatuador bogotano"
          className="h-full w-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background/60" />
      </div>

      <div className="relative flex items-center justify-center px-4 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-0">
        <div
          className="absolute top-6 right-4 sm:top-10 sm:right-10 text-[5rem] sm:text-[8rem] lg:text-[14rem] font-display leading-none text-primary/5 select-none pointer-events-none"
          aria-hidden="true"
        >
          09
        </div>
        <div className="relative max-w-xl w-full">
          <p className="text-primary uppercase tracking-[0.4em] text-[10px] sm:text-xs mb-4 sm:mb-6">
            Bogotá · Colombia
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] mb-4 sm:mb-6">
            Alejandro
            <br />
            <span className="text-primary">Tatoo</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-md">
            Artista bogotano con <strong className="text-foreground">nueve años</strong> dejando
            historias bajo la piel. Cada pieza, una conversación.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${btnBase} bg-[#25D366] text-white hover:bg-[#20BA5A] shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 hover:-translate-y-0.5 justify-center sm:justify-start`}
            >
              <WhatsAppIcon className="h-5 w-5 shrink-0" />
              Agenda por WhatsApp
            </a>
            <Link
              to="/styles"
              className={`${btnBase} border-2 border-border hover:border-primary hover:text-primary justify-center sm:justify-start`}
            >
              <PlayIcon className="h-5 w-5 shrink-0" />
              Ver estilos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
