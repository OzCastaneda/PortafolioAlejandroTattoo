import { GOLD } from "../constants";

interface SpinButtonProps {
  onClick: () => void;
  disabled: boolean;
  label?: string;
}

export function SpinButton({ onClick, disabled, label = "Girar Ruleta" }: SpinButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="relative px-10 py-4 text-sm uppercase tracking-[0.15em] font-bold rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A853] disabled:opacity-50 disabled:cursor-not-allowed"
      style={{
        color: "#1a1a1a",
        background: `linear-gradient(135deg, ${GOLD}, #B8933A, ${GOLD})`,
        boxShadow: disabled ? "none" : `0 4px 20px ${GOLD}44, 0 0 40px ${GOLD}22`,
      }}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.boxShadow = `0 6px 30px ${GOLD}66, 0 0 60px ${GOLD}33`;
          e.currentTarget.style.transform = "translateY(-2px) scale(1.02)";
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = disabled
          ? "none"
          : `0 4px 20px ${GOLD}44, 0 0 40px ${GOLD}22`;
        e.currentTarget.style.transform = "";
      }}
    >
      {disabled ? "Girando..." : label}
    </button>
  );
}
