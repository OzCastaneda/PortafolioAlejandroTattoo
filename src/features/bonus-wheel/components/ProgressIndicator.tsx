import { GOLD, GOLD_LIGHT } from "../constants";

const STEPS = [
  { label: "Primer giro realizado", icon: "✅" },
  { label: "Completa tus datos", icon: "📝" },
  { label: "Segunda oportunidad", icon: "🎯" },
  { label: "Reclama tu descuento", icon: "🎉" },
] as const;

export function ProgressIndicator({ current }: { current: number }) {
  return (
    <div
      className="w-full max-w-md mx-auto"
      role="progressbar"
      aria-valuenow={current}
      aria-valuemin={0}
      aria-valuemax={STEPS.length - 1}
    >
      <div className="flex items-start justify-between">
        {STEPS.map((step, i) => {
          const isCompleted = i < current;
          const isCurrent = i === current;
          return (
            <div key={i} className="flex flex-col items-center gap-1.5 flex-1">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${
                  isCompleted ? "scale-100" : isCurrent ? "scale-110" : "opacity-40"
                }`}
                style={{
                  backgroundColor: isCompleted || isCurrent ? GOLD : "transparent",
                  border: `2px solid ${isCompleted || isCurrent ? GOLD : GOLD_LIGHT}44`,
                  color: isCompleted || isCurrent ? "#1a1a1a" : GOLD_LIGHT,
                }}
              >
                {isCompleted ? "✓" : i + 1}
              </div>
              <span
                className={`text-[10px] text-center leading-tight max-w-[80px] transition-opacity duration-300 ${
                  isCompleted || isCurrent ? "opacity-100" : "opacity-40"
                }`}
                style={{ color: isCompleted || isCurrent ? GOLD_LIGHT : undefined }}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>

      <div className="relative mt-2 h-1 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700 ease-out"
          style={{
            width: `${(current / (STEPS.length - 1)) * 100}%`,
            background: `linear-gradient(90deg, ${GOLD}, ${GOLD_LIGHT})`,
          }}
        />
      </div>
    </div>
  );
}
