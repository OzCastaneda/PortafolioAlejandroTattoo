import { WhatsAppIcon } from "@/shared/ui";
import { GOLD, GOLD_LIGHT } from "../constants";

function Confetti() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 0.5}s`,
    duration: `${1.5 + Math.random() * 2}s`,
    color: ["#D4A853", "#E8C97A", "#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4"][
      Math.floor(Math.random() * 6)
    ],
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute w-2 h-2 rounded-full animate-[confetti_3s_ease-out_forwards]"
          style={{
            left: p.left,
            top: "-10px",
            backgroundColor: p.color,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}

interface PrizeCardProps {
  discount: number;
  code: string;
  onClaim?: () => void;
  spinNumber?: 1 | 2;
}

export function PrizeCard({ discount, code, onClaim, spinNumber }: PrizeCardProps) {
  return (
    <div className="relative overflow-hidden">
      <Confetti />

      <div
        className="border-2 rounded-2xl p-6 sm:p-8 text-center space-y-5"
        style={{
          borderColor: GOLD,
          background: "linear-gradient(135deg, rgba(212, 168, 83, 0.08), rgba(212, 168, 83, 0.02))",
          boxShadow: `0 0 30px ${GOLD}22, inset 0 0 30px ${GOLD}11`,
        }}
      >
        <div className="space-y-2">
          <p className="text-lg text-[#D4A853] font-semibold tracking-wider animate-[fadeInUp_0.6s_ease-out]">
            {spinNumber === 2 ? "¡Segundo giro!" : "¡Felicidades!"}
          </p>
          <p
            className="font-display text-5xl sm:text-6xl leading-none animate-[fadeInUp_0.6s_ease-out_0.1s_both]"
            style={{ color: GOLD_LIGHT }}
          >
            {discount}%
          </p>
          <p className="text-sm sm:text-base text-muted-foreground animate-[fadeInUp_0.6s_ease-out_0.2s_both]">
            {spinNumber === 2
              ? "de descuento en tu segundo giro"
              : "de descuento en tu próximo tatuaje"}
          </p>
        </div>

        <div
          className="inline-block border border-dashed rounded-lg px-5 py-3 animate-[fadeInUp_0.6s_ease-out_0.3s_both]"
          style={{ borderColor: GOLD }}
        >
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Código</p>
          <p
            className="font-mono text-lg sm:text-xl font-bold tracking-wider"
            style={{ color: GOLD_LIGHT }}
          >
            {code}
          </p>
        </div>

        {onClaim && (
          <button
            onClick={onClaim}
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 text-sm uppercase tracking-widest font-semibold hover:bg-[#20BA5A] transition rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] animate-[fadeInUp_0.6s_ease-out_0.4s_both]"
          >
            <WhatsAppIcon className="h-5 w-5 shrink-0" />
            Reclamar por WhatsApp
          </button>
        )}
      </div>
    </div>
  );
}

export function AlreadyPlayedCard({ discount, code }: { discount: number; code: string }) {
  return (
    <div
      className="border rounded-2xl p-6 sm:p-8 text-center space-y-4"
      style={{
        borderColor: GOLD,
        background: "linear-gradient(135deg, rgba(212, 168, 83, 0.05), transparent)",
      }}
    >
      <p className="text-muted-foreground text-sm uppercase tracking-widest">
        Ya utilizaste tu oportunidad
      </p>
      <p className="font-display text-4xl sm:text-5xl leading-none" style={{ color: GOLD_LIGHT }}>
        {discount}%
      </p>
      <p className="text-sm text-muted-foreground">
        Código: <span className="font-mono font-bold text-foreground">{code}</span>
      </p>
    </div>
  );
}
