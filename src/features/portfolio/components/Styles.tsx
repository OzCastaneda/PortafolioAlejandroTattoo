import { TATTOO_STYLES } from "../constants";

<<<<<<< HEAD
export function Styles() {
  return (
    <section id="styles" className="py-32 px-6 bg-card border-t border-border">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="text-primary uppercase tracking-[0.4em] text-xs mb-4">02 — Estilos</p>
          <h2 className="font-display text-5xl md:text-6xl max-w-2xl">Lo que tatúo.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border">
=======
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
>>>>>>> 4fc1b16 (feat: refactor architecture, add discount wheel, improve responsive layout and update documentation)
          {TATTOO_STYLES.map((style, index) => (
            <StyleCard key={style.name} style={style} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

<<<<<<< HEAD
function StyleCard({ style, index }: { style: { name: string; description: string }; index: number }) {
  return (
    <div className="bg-card p-8 hover:bg-background transition group">
      <div className="font-display text-6xl text-primary/40 group-hover:text-primary transition mb-4">
        {String(index + 1).padStart(2, "0")}
      </div>
      <h3 className="font-display text-2xl mb-2">{style.name}</h3>
      <p className="text-sm text-muted-foreground">{style.description}</p>
=======
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
>>>>>>> 4fc1b16 (feat: refactor architecture, add discount wheel, improve responsive layout and update documentation)
    </div>
  );
}
