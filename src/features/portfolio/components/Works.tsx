import { TATTOO_WORKS } from "../constants";
import type { TattooWork } from "../constants";

export function Works() {
  return (
    <section id="works" className="py-32 px-6 border-t border-border">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-primary uppercase tracking-[0.4em] text-xs mb-4">03 — Portafolio</p>
            <h2 className="font-display text-5xl md:text-6xl">Trabajos recientes.</h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Una selección de piezas hechas a mano en el estudio. Cada cliente, una historia distinta.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {TATTOO_WORKS.map((work: TattooWork) => (
            <figure
              key={work.title}
              className="relative break-inside-avoid overflow-hidden bg-card group"
            >
              <img
                src={work.image}
                alt={work.title}
                loading="lazy"
                className="w-full h-auto object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-90"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-ink/95 via-ink/60 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition">
                <div className="text-xs uppercase tracking-widest text-primary mb-1">{work.tag}</div>
                <div className="font-display text-xl">{work.title}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
