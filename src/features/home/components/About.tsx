import { HERO_STATS } from "../constants";

<<<<<<< HEAD
export function About() {
  return (
    <section id="about" className="py-32 px-6 border-t border-border">
      <div className="mx-auto max-w-5xl grid md:grid-cols-3 gap-12">
        <div className="md:col-span-1">
          <p className="text-primary uppercase tracking-[0.4em] text-xs mb-4">01 — Sobre mí</p>
          <h2 className="font-display text-5xl">La aguja como voz.</h2>
        </div>
        <div className="md:col-span-2 space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Soy Alejandro, tatuador nacido y criado en Bogotá. Llevo casi una década perfeccionando un oficio que para mí es más arte que técnica: traducir ideas, recuerdos y obsesiones en líneas que duren toda una vida.
          </p>
          <p>
            Trabajo bajo los estándares más altos de higiene, con materiales de primera y un proceso íntimo donde cada cliente recibe atención completa. La cita es tuya, sin afanes.
          </p>
          <div className="grid grid-cols-3 gap-6 pt-8">
=======
const sectionBase = "section-anchor border-t border-border";

export function About() {
  return (
    <section id="about" className={`${sectionBase} py-16 sm:py-24 lg:py-32 px-4 sm:px-6`}>
      <div className="mx-auto max-w-5xl grid md:grid-cols-3 gap-8 sm:gap-12">
        <div className="md:col-span-1">
          <p className="text-primary uppercase tracking-[0.4em] text-[10px] sm:text-xs mb-3 sm:mb-4">
            01 — Sobre mí
          </p>
          <h2 className="font-display text-4xl sm:text-5xl">La aguja como voz.</h2>
        </div>
        <div className="md:col-span-2 space-y-4 sm:space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
          <p>
            Soy Alejandro, tatuador nacido y criado en Bogotá. Llevo casi una década perfeccionando
            un oficio que para mí es más arte que técnica: traducir ideas, recuerdos y obsesiones en
            líneas que duren toda una vida.
          </p>
          <p>
            Trabajo bajo los estándares más altos de higiene, con materiales de primera y un proceso
            íntimo donde cada cliente recibe atención completa. La cita es tuya, sin afanes.
          </p>
          <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8">
>>>>>>> 4fc1b16 (feat: refactor architecture, add discount wheel, improve responsive layout and update documentation)
            <Stat value={HERO_STATS.years} label={HERO_STATS.yearsLabel} />
            <Stat value={HERO_STATS.pieces} label={HERO_STATS.piecesLabel} />
            <Stat value={HERO_STATS.custom} label={HERO_STATS.customLabel} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
<<<<<<< HEAD
      <div className="font-display text-5xl text-primary">{value}</div>
      <div className="text-xs uppercase tracking-widest mt-2">{label}</div>
=======
      <div className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary leading-none">
        {value}
      </div>
      <div className="text-[10px] sm:text-xs uppercase tracking-widest mt-1 sm:mt-2 text-muted-foreground">
        {label}
      </div>
>>>>>>> 4fc1b16 (feat: refactor architecture, add discount wheel, improve responsive layout and update documentation)
    </div>
  );
}
