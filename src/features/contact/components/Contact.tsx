import { SOCIAL_LINKS } from "../constants";

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 border-t border-border">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-primary uppercase tracking-[0.4em] text-xs mb-4">04 — Contacto</p>
        <h2 className="font-display text-5xl md:text-7xl mb-6">
          Hablemos de<br />
          <span className="text-primary">tu próximo tatuaje.</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
          Escríbeme por cualquiera de mis redes. Cuéntame tu idea, dimensión y zona del cuerpo — coordinamos el resto.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {SOCIAL_LINKS.map((social) => (
            <SocialCard key={social.name} social={social} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialCard({ social }: { social: { name: string; handle: string; href: string; icon: React.ReactNode; isWhatsApp?: boolean } }) {
  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex flex-col items-center gap-3 border-2 border-border p-8 hover:-translate-y-1 transition-all duration-300 rounded-2xl ${
        social.isWhatsApp
          ? "border-[#25D366]/30 hover:border-[#25D366] hover:bg-[#25D366]/5 hover:shadow-lg hover:shadow-[#25D366]/20"
          : "hover:border-primary hover:bg-card hover:shadow-lg hover:shadow-primary/10"
      }`}
    >
      <div className={`transition-colors duration-300 ${
        social.isWhatsApp
          ? "text-[#25D366] group-hover:scale-110 transition-transform"
          : "text-foreground group-hover:text-primary"
      }`}>
        {social.icon}
      </div>
      <div className="font-display text-xl tracking-wider">{social.name}</div>
      <div className="text-xs text-muted-foreground uppercase tracking-widest">{social.handle}</div>
    </a>
  );
}
