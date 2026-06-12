import { createFileRoute } from "@tanstack/react-router";
import { BonusWheel } from "@/features/bonus-wheel";

export const Route = createFileRoute("/bonus")({
  component: BonusWheel,
});
