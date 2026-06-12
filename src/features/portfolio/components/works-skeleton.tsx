const sectionBase = "section-anchor border-t border-border";

export function WorksSkeleton() {
  return (
    <section id="works" className={`${sectionBase} py-16 sm:py-24 lg:py-32 px-4 sm:px-6`}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-16">
          <p className="text-primary uppercase tracking-[0.4em] text-[10px] sm:text-xs mb-3 sm:mb-4">
            03 — Portafolio
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl">Trabajos recientes.</h2>
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 sm:gap-4 space-y-3 sm:space-y-4">
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} className="aspect-[3/4] bg-card animate-pulse rounded-lg" />
          ))}
        </div>
      </div>
    </section>
  );
}
