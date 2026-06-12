import type { BonusPrize, VisualSegment } from "../types";

export const PRIZES: BonusPrize[] = [
  { value: 50, weight: 5 },
  { value: 40, weight: 10 },
  { value: 30, weight: 15 },
  { value: 20, weight: 25 },
  { value: 10, weight: 45 },
];

export const VISUAL_SEGMENTS: VisualSegment[] = [
  { value: 10, color: "#16213e", label: "10%" },
  { value: 20, color: "#0f3460", label: "20%" },
  { value: 30, color: "#533483", label: "30%" },
  { value: 40, color: "#7b2d8e", label: "40%" },
  { value: 50, color: "#1a1a2e", label: "50%" },
  { value: 10, color: "#16213e", label: "10%" },
  { value: 20, color: "#0f3460", label: "20%" },
  { value: 30, color: "#533483", label: "30%" },
  { value: 40, color: "#7b2d8e", label: "40%" },
  { value: 50, color: "#1a1a2e", label: "50%" },
];

export const STORAGE_KEY_RESULT = "bonus_result";

export const SPIN_DURATION_MS = 5000;
export const EXTRA_SPINS = 6;

export const GOLD = "#D4A853";
export const GOLD_DARK = "#B8933A";
export const GOLD_LIGHT = "#E8C97A";
