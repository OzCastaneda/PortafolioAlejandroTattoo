import { NAV_LINKS } from "../constants";
import { CalendarIcon } from "@/shared/ui";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#top" className="font-display text-2xl tracking-widest">
          ALEJANDRO<span className="text-primary">.</span>TATOO
        </a>
        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-muted-foreground">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-foreground transition">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 text-xs uppercase tracking-widest font-semibold hover:bg-primary/90 transition rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
        >
          <CalendarIcon />
          Reservar cita
        </a>
      </div>
    </header>
  );
}
