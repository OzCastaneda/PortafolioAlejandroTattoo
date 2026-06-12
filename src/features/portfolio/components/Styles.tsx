import { TATTOO_STYLES } from "../constants";

const sectionBase = "section-anchor border-t border-border";

export function Styles() {
  return (
    <section id="styles" className={`${sectionBase} py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-card`}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 sm:mb-16">
          <p className="text-primary uppercase tracking-[0.4em] text-[10px] sm:text-xs mb-3 sm:mb-4">
            02 — Estilos
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl max-w-2xl">Lo que tatúo.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border">
          {TATTOO_STYLES.map((style, index) => (
            <StyleCard key={style.name} style={style} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StyleCard({
  style,
  index,
}: {
  style: { name: string; description: string };
  index: number;
}) {
  return (
    <div className="bg-card p-6 sm:p-8 hover:bg-background transition group">
      <div className="font-display text-4xl sm:text-6xl text-primary/40 group-hover:text-primary transition mb-3 sm:mb-4">
        {String(index + 1).padStart(2, "0")}
      </div>
      <h3 className="font-display text-xl sm:text-2xl mb-2">{style.name}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{style.description}</p>
    </div>
  );
}
