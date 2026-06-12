import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { NAV_LINKS } from "@/shared/constants";
import { CalendarIcon } from "@/shared/ui";

const linkBase =
  "block text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground [&.active]:text-foreground transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <Link
          to="/"
          className="font-display text-xl sm:text-2xl tracking-widest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
        >
          ALEJANDRO<span className="text-primary">.</span>TATOO
        </Link>

        <nav
          className="hidden md:flex items-center gap-8 text-sm"
          aria-label="Navegación principal"
        >
          {NAV_LINKS.map((link) => (
            <Link key={link.href} to={link.href} className={linkBase}>
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 text-xs uppercase tracking-widest font-semibold hover:bg-primary/90 transition rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <CalendarIcon />
          Reservar cita
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-6 w-6"
          >
            {isOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 top-[57px] sm:top-[61px] z-40 md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="absolute inset-0 bg-background/95 backdrop-blur-md" onClick={close} />
          <nav
            className="relative flex flex-col items-center gap-6 pt-12 pb-8 px-6 text-lg"
            aria-label="Navegación móvil"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={close}
                className={`${linkBase} text-lg`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={close}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm uppercase tracking-widest font-semibold hover:bg-primary/90 transition rounded-full mt-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <CalendarIcon />
              Reservar cita
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
