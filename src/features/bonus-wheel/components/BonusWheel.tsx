import { useBonusWheel } from "../hooks";
import { Wheel } from "./Wheel";
import { PrizeCard } from "./PrizeCard";
import { SpinButton } from "./SpinButton";
import { GOLD } from "../constants";

export function BonusWheel() {
  const { step, spinning, rotation, spinData, spin, reset, whatsAppUrl } = useBonusWheel();

  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 border-t border-border overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${GOLD}08, transparent 70%)`,
        }}
      />

      <div className="mx-auto max-w-6xl relative">
        <div className="text-center mb-6 sm:mb-8">
          <p
            className="uppercase tracking-[0.4em] text-[10px] sm:text-xs mb-3 sm:mb-4"
            style={{ color: GOLD }}
          >
            Bono de Bienvenida
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl max-w-3xl mx-auto leading-[1.1]">
            Gira y gana un descuento <span style={{ color: GOLD }}>para tu próximo tatuaje</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="flex flex-col items-center gap-8">
            <Wheel rotation={rotation} spinning={spinning} />

            {step === "idle" && <SpinButton onClick={spin} disabled={spinning} />}
          </div>

          <div className="flex flex-col items-center lg:items-start justify-start min-h-[350px] gap-6">
            {step === "idle" && !spinning && (
              <div className="text-center lg:text-left space-y-4 max-w-md">
                <p className="text-lg text-muted-foreground">
                  Participa y gana hasta un{" "}
                  <strong className="text-foreground">50% de descuento</strong> en tu próxima pieza.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2">
                    <span style={{ color: GOLD }}>✦</span> Válido en cualquier diseño
                  </li>
                  <li className="flex items-center gap-2">
                    <span style={{ color: GOLD }}>✦</span> Aplica para primera sesión
                  </li>
                  <li className="flex items-center gap-2">
                    <span style={{ color: GOLD }}>✦</span> Canjeable por WhatsApp
                  </li>
                </ul>
              </div>
            )}

            {step === "result" && !spinning && (
              <>
                <PrizeCard
                  discount={spinData.prize}
                  code={spinData.code}
                  onClaim={() => window.open(whatsAppUrl, "_blank")}
                />

                <button
                  onClick={reset}
                  className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-3 py-1.5"
                >
                  Reiniciar ruleta
                </button>
              </>
            )}
          </div>
        </div>

        <p className="mt-12 text-center text-[11px] sm:text-xs text-muted-foreground/60 max-w-xl mx-auto leading-relaxed">
          Aplican condiciones y restricciones: es solo un bono por participante. Si ya redimiste el
          tuyo permite que otro participe.
        </p>
      </div>
    </section>
  );
}
