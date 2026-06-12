export function pickBestPrize(first: number, second: number): number {
  return Math.max(first, second);
}

export function isSecondBetter(first: number, second: number): boolean {
  return second > first;
}

export function isSecondWorse(first: number, second: number): boolean {
  return second < first;
}
