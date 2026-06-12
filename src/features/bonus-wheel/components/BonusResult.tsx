import { WhatsAppIcon } from "@/shared/ui";
import { GOLD, GOLD_LIGHT } from "../constants";
import type { FinalResult } from "../types";

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

interface Props {
  result: FinalResult;
  onClaim: () => void;
  isSecondBetter: boolean;
}

export function BonusResult({ result, onClaim, isSecondBetter }: Props) {
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
            ¡Felicidades!
          </p>
          <p
            className="font-display text-5xl sm:text-6xl leading-none animate-[fadeInUp_0.6s_ease-out_0.1s_both]"
            style={{ color: GOLD_LIGHT }}
          >
            {result.finalPrize}%
          </p>
          <p className="text-sm sm:text-base text-muted-foreground animate-[fadeInUp_0.6s_ease-out_0.2s_both]">
            de descuento en tu próximo tatuaje
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 sm:gap-6 text-sm animate-[fadeInUp_0.6s_ease-out_0.25s_both]">
          <div className="text-center">
            <p className="text-xs text-muted-foreground">Primer giro</p>
            <p className="text-lg font-bold" style={{ color: GOLD_LIGHT }}>
              {result.firstPrize}%
            </p>
          </div>
          {isSecondBetter ? (
            <span className="text-green-400 text-lg">→</span>
          ) : (
            <span className="text-amber-400 text-lg">←</span>
          )}
          <div className="text-center">
            <p className="text-xs text-muted-foreground">Segundo giro</p>
            <p className="text-lg font-bold" style={{ color: GOLD_LIGHT }}>
              {result.secondPrize}%
            </p>
          </div>
        </div>

        {!isSecondBetter && (
          <p className="text-xs text-muted-foreground animate-[fadeInUp_0.6s_ease-out_0.3s_both]">
            Conservamos automáticamente tu mejor descuento.
          </p>
        )}

        <div
          className="inline-block border border-dashed rounded-lg px-5 py-3 animate-[fadeInUp_0.6s_ease-out_0.35s_both]"
          style={{ borderColor: GOLD }}
        >
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
            Código final
          </p>
          <p
            className="font-mono text-lg sm:text-xl font-bold tracking-wider"
            style={{ color: GOLD_LIGHT }}
          >
            {result.finalCode}
          </p>
        </div>

        <button
          onClick={onClaim}
          className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 text-sm uppercase tracking-widest font-semibold hover:bg-[#20BA5A] transition rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] animate-[fadeInUp_0.6s_ease-out_0.45s_both]"
        >
          <WhatsAppIcon className="h-5 w-5 shrink-0" />
          Reclamar por WhatsApp
        </button>
      </div>
    </div>
  );
}
