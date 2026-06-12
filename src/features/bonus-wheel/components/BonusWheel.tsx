import { useBonusWheel } from "../hooks";
import { Wheel } from "./Wheel";
import { PrizeCard } from "./PrizeCard";
import { BonusResult } from "./BonusResult";
import { ProgressIndicator } from "./ProgressIndicator";
import { SpinButton } from "./SpinButton";
import { SecondChanceCard } from "./SecondChanceCard";
import { GOLD } from "../constants";

const STEP_PROGRESS: Record<string, number> = {
  idle: 0,
  first_result: 1,
  second_ready: 2,
  second_result: 3,
  final: 4,
};

export function BonusWheel() {
  const {
    step,
    spinning,
    rotation,
    firstSpin,
    secondSpin,
    finalResult,
    spin,
    submitLead,
    bonusWhatsAppUrl,
    secondBetter,
  } = useBonusWheel();

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

        <div className="mb-8 sm:mb-10">
          <ProgressIndicator current={STEP_PROGRESS[step]} />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="flex flex-col items-center gap-8">
            <Wheel rotation={rotation} spinning={spinning} />

            {step === "idle" && <SpinButton onClick={spin} disabled={spinning} />}

            {step === "second_ready" && (
              <SpinButton onClick={spin} disabled={spinning} label="Girar nuevamente" />
            )}

            {(step === "first_result" || step === "second_result") && !spinning && (
              <p className="text-sm text-muted-foreground">
                {step === "first_result" ? "Primer giro completado" : "Segundo giro completado"}
              </p>
            )}

            {step === "final" && (
              <p className="text-sm text-muted-foreground">¡Ruleta completada!</p>
            )}
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

            {step === "first_result" && !spinning && (
              <>
                <PrizeCard
                  discount={firstSpin.prize}
                  code={firstSpin.code}
                  onClaim={() => window.open(bonusWhatsAppUrl(), "_blank")}
                  spinNumber={1}
                />
                <SecondChanceCard onSubmit={submitLead} />
              </>
            )}

            {step === "second_ready" && !spinning && (
              <div className="text-center lg:text-left space-y-4 max-w-md animate-[fadeInUp_0.5s_ease-out]">
                <p className="text-lg" style={{ color: GOLD }}>
                  Tu segunda oportunidad está lista.
                </p>
                <p className="text-sm text-muted-foreground">
                  Gira nuevamente para intentar obtener un mejor descuento.{" "}
                  {firstSpin.prize < 50 && "¡Puedes mejorar tu " + firstSpin.prize + "%!"}
                </p>
              </div>
            )}

            {step === "second_result" && !spinning && (
              <PrizeCard discount={secondSpin.prize} code={secondSpin.code} spinNumber={2} />
            )}

            {step === "final" && finalResult && (
              <BonusResult
                result={finalResult}
                onClaim={() => window.open(bonusWhatsAppUrl(), "_blank")}
                isSecondBetter={secondBetter}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
