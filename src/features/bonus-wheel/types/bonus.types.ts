export interface BonusPrize {
  value: number;
  weight: number;
}

export interface VisualSegment {
  value: number;
  color: string;
  label: string;
}

export interface SpinData {
  used: boolean;
  prize: number;
  code: string;
}

export type BonusStep = "idle" | "result";
