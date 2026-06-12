import { useState, useCallback, useMemo } from "react";
import type { BonusStep, SpinData } from "../types";
import { PRIZES, SPIN_DURATION_MS, EXTRA_SPINS, STORAGE_KEY_RESULT } from "../constants";
import { pickPrize, getTargetAngle, generateCoupon } from "../utils";
import { loadFromStorage, saveToStorage } from "../utils/storage";

function initFromStorage(): { step: BonusStep; data: SpinData } {
  const saved = loadFromStorage<SpinData | null>(STORAGE_KEY_RESULT, null);
  if (saved?.used) return { step: "result", data: saved };
  return { step: "idle", data: { used: false, prize: 0, code: "" } };
}

export function useBonusWheel() {
  const [spinData, setSpinData] = useState<SpinData>(() => initFromStorage().data);
  const [step, setStep] = useState<BonusStep>(() => initFromStorage().step);
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);

  const spin = useCallback(() => {
    if (spinning) return;
    setSpinning(true);

    const prize = pickPrize(PRIZES);
    const targetAngle = getTargetAngle(prize.value, EXTRA_SPINS);
    setRotation((prev) => prev + targetAngle);

    setTimeout(() => {
      const code = generateCoupon();
      const data: SpinData = { used: true, prize: prize.value, code };
      setSpinData(data);
      saveToStorage(STORAGE_KEY_RESULT, data);
      setSpinning(false);
      setStep("result");
    }, SPIN_DURATION_MS);
  }, [spinning]);

  const reset = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY_RESULT);
    setSpinData({ used: false, prize: 0, code: "" });
    setRotation(0);
    setStep("idle");
  }, []);

  const whatsAppUrl = useMemo(() => {
    if (!spinData.used) return "";
    const phone = "573143732759";
    const msg = encodeURIComponent(
      [
        "Hola.",
        "Participé en la ruleta de descuentos.",
        "",
        `Descuento: ${spinData.prize}%`,
        `Código: ${spinData.code}`,
        "",
        "Quiero reclamar mi bono para mi próximo tatuaje.",
      ].join("\n"),
    );
    return `https://wa.me/${phone}?text=${msg}`;
  }, [spinData]);

  return { step, spinning, rotation, spinData, spin, reset, whatsAppUrl };
}
