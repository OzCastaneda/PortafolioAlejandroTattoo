import { GOLD, GOLD_LIGHT } from "../constants";
import { LeadForm } from "./LeadForm";

interface SecondChanceCardProps {
  onSubmit: (name: string, phone: string) => void;
}

export function SecondChanceCard({ onSubmit }: SecondChanceCardProps) {
  return (
    <div
      className="w-full border rounded-2xl p-5 sm:p-6 space-y-4 animate-[fadeInUp_0.5s_ease-out]"
      style={{
        borderColor: GOLD,
        background: "linear-gradient(135deg, rgba(212, 168, 83, 0.08), rgba(212, 168, 83, 0.02))",
        boxShadow: `0 0 20px ${GOLD}11`,
      }}
    >
      <div className="text-center space-y-1">
        <p className="text-lg font-semibold" style={{ color: GOLD_LIGHT }}>
          ¿Quieres una segunda oportunidad?
        </p>
        <p className="text-sm text-muted-foreground">
          Registra tus datos y recibe un giro adicional para obtener un mejor descuento.
        </p>
      </div>
      <LeadForm onSubmit={onSubmit} />
    </div>
  );
}
