import { Link } from "@tanstack/react-router";
import { WhatsAppIcon, InstagramIcon, TikTokIcon, FacebookIcon } from "@/shared/ui";
import { SITE, WHATSAPP_PHONE } from "@/shared/constants";

const GOLD = "#D4A853";
const GOLD_LIGHT = "#E8C97A";

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/alejotatt00/",
    icon: InstagramIcon,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/alejandrotattoo",
    icon: FacebookIcon,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@alejotatt00",
    icon: TikTokIcon,
  },
  {
    label: "WhatsApp",
    href: `https://wa.me/${WHATSAPP_PHONE}`,
    icon: WhatsAppIcon,
  },
] as const;

function Logo() {
  return (
    <Link
      to="/"
      className="inline-flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A853] rounded-lg"
      aria-label="Ir al inicio"
    >
      <svg width="40" height="40" viewBox="0 0 40 40" className="shrink-0" aria-hidden="true">
        <rect width="40" height="40" rx="8" fill={GOLD} />
        <text
          x="20"
          y="20"
          textAnchor="middle"
          dominantBaseline="central"
          fill="#0a0a0a"
          fontSize="16"
          fontWeight="800"
          fontFamily="system-ui, sans-serif"
        >
          AT
        </text>
      </svg>
      <div className="flex flex-col">
        <span className="text-sm font-bold tracking-wider text-foreground group-hover:text-[#D4A853] transition-colors duration-300">
          {SITE.name}
        </span>
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          Tattoo Studio
        </span>
      </div>
    </Link>
  );
}

const NAV_LINKS_FOOTER = [
  { label: "Inicio", href: "/" },
  { label: "Portafolio", href: "/works" },
  { label: "Estilos", href: "/styles" },
  { label: "Sobre mí", href: "/about" },
  { label: "Contacto", href: "/contact" },
] as const;

function ColumnBrand() {
  return (
    <div className="space-y-4">
      <Logo />
      <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">{SITE.description}</p>
    </div>
  );
}

function ColumnNav() {
  return (
    <div className="space-y-4">
      <h3 className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ color: GOLD }}>
        Navegación
      </h3>
      <nav aria-label="Navegación del footer">
        <ul className="space-y-2.5">
          {NAV_LINKS_FOOTER.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className="text-sm text-muted-foreground hover:text-[#D4A853] transition-all duration-300 hover:translate-x-1 inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A853] focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

function ColumnContact() {
  const mailHref = `mailto:${SITE.email}`;
  const waHref = `https://wa.me/${WHATSAPP_PHONE}`;

  return (
    <div className="space-y-4">
      <h3 className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ color: GOLD }}>
        Contacto
      </h3>
      <ul className="space-y-3">
        <li>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-[#D4A853] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A853] focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
            aria-label="Contactar por WhatsApp"
          >
            <WhatsAppIcon className="h-4 w-4 shrink-0" />
            <span>WhatsApp</span>
          </a>
        </li>
        <li>
          <a
            href={mailHref}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-[#D4A853] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A853] focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
            aria-label="Enviar correo electrónico"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-4 w-4 shrink-0"
              aria-hidden="true"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 4L12 13 2 4" />
            </svg>
            <span className="text-[11px] sm:text-sm break-all">{SITE.email}</span>
          </a>
        </li>
        <li>
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-4 w-4 shrink-0"
              aria-hidden="true"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>{SITE.city}</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

function ColumnSocial() {
  return (
    <div className="space-y-4">
      <h3 className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ color: GOLD }}>
        Redes Sociales
      </h3>
      <div className="flex gap-3">
        {SOCIAL_LINKS.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A853] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            style={{
              borderColor: `${GOLD}44`,
              color: GOLD_LIGHT,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = GOLD;
              e.currentTarget.style.boxShadow = `0 0 20px ${GOLD}33`;
              e.currentTarget.style.backgroundColor = `${GOLD}11`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = `${GOLD}44`;
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
            aria-label={`Seguir en ${social.label}`}
          >
            <social.icon className="h-4 w-4" />
          </a>
        ))}
      </div>
    </div>
  );
}

function BottomBar() {
  const developerMailHref = `mailto:${SITE.email}`;
  const year = new Date().getFullYear();

  return (
    <div className="mt-12 pt-6 border-t text-center space-y-2" style={{ borderColor: `${GOLD}22` }}>
      <p className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground">
        &copy; {year} Alejandro Tatoo Tattoo Studio. Todos los derechos reservados.
      </p>
      <p className="text-[10px] sm:text-xs text-muted-foreground">
        Desarrollado por <span className="text-foreground/80 font-medium">{SITE.developer}</span>
        {" — "}
        <a
          href={developerMailHref}
          className="text-muted-foreground hover:text-[#D4A853] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A853] rounded"
        >
          {SITE.email}
        </a>
      </p>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <ColumnBrand />
          <ColumnNav />
          <ColumnContact />
          <ColumnSocial />
        </div>
        <BottomBar />
      </div>
    </footer>
  );
}
