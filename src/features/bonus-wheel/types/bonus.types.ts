export interface BonusPrize {
  value: number;
  weight: number;
}

export interface VisualSegment {
  value: number;
  color: string;
  label: string;
}

export interface FirstSpinData {
  used: boolean;
  prize: number;
  code: string;
}

export interface SecondSpinData {
  used: boolean;
  prize: number;
  code: string;
}

export interface CustomerData {
  name: string;
  phone: string;
  secondChanceGranted: boolean;
  registeredAt: number;
}

export interface FinalResult {
  firstPrize: number;
  secondPrize: number;
  finalPrize: number;
  finalCode: string;
  customerName: string;
  customerPhone: string;
  bonusCompleted: boolean;
}

export type BonusStep =
  | "idle"
  | "first_result"
  | "lead_form"
  | "second_ready"
  | "second_result"
  | "final";
