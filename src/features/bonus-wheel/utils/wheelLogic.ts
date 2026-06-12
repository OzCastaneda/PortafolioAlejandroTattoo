import type { BonusPrize } from "../types";
import { VISUAL_SEGMENTS } from "../constants";

export function pickPrize(prizes: BonusPrize[]): BonusPrize {
  const totalWeight = prizes.reduce((sum, p) => sum + p.weight, 0);
  let random = Math.random() * totalWeight;
  for (const prize of prizes) {
    random -= prize.weight;
    if (random <= 0) return prize;
  }
  return prizes[prizes.length - 1];
}

export function getTargetAngle(prizeValue: number, extraSpins: number): number {
  const segmentAngle = 360 / VISUAL_SEGMENTS.length;

  const matchingIndices = VISUAL_SEGMENTS.map((seg, i) =>
    seg.value === prizeValue ? i : -1,
  ).filter((i) => i !== -1);

  const idx = matchingIndices[Math.floor(Math.random() * matchingIndices.length)];

  const segmentCenter = idx * segmentAngle + segmentAngle / 2;

  return extraSpins * 360 + (360 - segmentCenter);
}
