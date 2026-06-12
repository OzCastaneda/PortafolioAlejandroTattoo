import { useState, useCallback, useMemo, useEffect } from "react";
import type { BonusStep, FirstSpinData, SecondSpinData, CustomerData, FinalResult } from "../types";
import {
  PRIZES,
  SPIN_DURATION_MS,
  EXTRA_SPINS,
  STORAGE_KEY_FIRST_SPIN,
  STORAGE_KEY_SECOND_SPIN,
  STORAGE_KEY_CUSTOMER,
  STORAGE_KEY_FINAL,
} from "../constants";
import { pickPrize, getTargetAngle, generateCoupon } from "../utils";
import { loadFromStorage, saveToStorage } from "../utils/storage";
import { pickBestPrize, isSecondBetter } from "../utils/prizeEvaluator";

const FIRST_FALLBACK: FirstSpinData = { used: false, prize: 0, code: "" };
const SECOND_FALLBACK: SecondSpinData = { used: false, prize: 0, code: "" };
const CUSTOMER_FALLBACK: CustomerData = {
  name: "",
  phone: "",
  secondChanceGranted: false,
  registeredAt: 0,
};

function initFinalFromStorage(): FinalResult | null {
  const saved = loadFromStorage<FinalResult | null>(STORAGE_KEY_FINAL, null);
  if (saved) return saved;
  const second = loadFromStorage(STORAGE_KEY_SECOND_SPIN, SECOND_FALLBACK);
  if (!second.used) return null;
  const first = loadFromStorage(STORAGE_KEY_FIRST_SPIN, FIRST_FALLBACK);
  const cust = loadFromStorage(STORAGE_KEY_CUSTOMER, CUSTOMER_FALLBACK);
  const best = pickBestPrize(first.prize, second.prize);
  const r: FinalResult = {
    firstPrize: first.prize,
    secondPrize: second.prize,
    finalPrize: best,
    finalCode: second.code,
    customerName: cust.name,
    customerPhone: cust.phone,
    bonusCompleted: true,
  };
  saveToStorage(STORAGE_KEY_FINAL, r);
  return r;
}

function initStepFromStorage(): BonusStep {
  if (loadFromStorage(STORAGE_KEY_FINAL, null)) return "final";
  if (loadFromStorage(STORAGE_KEY_SECOND_SPIN, SECOND_FALLBACK).used) return "final";
  if (loadFromStorage(STORAGE_KEY_CUSTOMER, CUSTOMER_FALLBACK).secondChanceGranted)
    return "second_ready";
  if (loadFromStorage(STORAGE_KEY_FIRST_SPIN, FIRST_FALLBACK).used) return "first_result";
  return "idle";
}

export function useBonusWheel() {
  const [firstSpin, setFirstSpin] = useState<FirstSpinData>(() =>
    loadFromStorage(STORAGE_KEY_FIRST_SPIN, FIRST_FALLBACK),
  );
  const [secondSpin, setSecondSpin] = useState<SecondSpinData>(() =>
    loadFromStorage(STORAGE_KEY_SECOND_SPIN, SECOND_FALLBACK),
  );
  const [customer, setCustomer] = useState<CustomerData>(() =>
    loadFromStorage(STORAGE_KEY_CUSTOMER, CUSTOMER_FALLBACK),
  );
  const [finalResult, setFinalResult] = useState<FinalResult | null>(initFinalFromStorage);
  const [step, setStep] = useState<BonusStep>(initStepFromStorage);

  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [currentDiscount, setCurrentDiscount] = useState(0);
  const [currentCode, setCurrentCode] = useState("");

  const spin = useCallback(() => {
    if (spinning) return;

    setSpinning(true);

    const prize = pickPrize(PRIZES);
    const targetAngle = getTargetAngle(prize.value, EXTRA_SPINS);
    setRotation((prev) => prev + targetAngle);
    setCurrentDiscount(prize.value);

    setTimeout(() => {
      const code = generateCoupon();
      setCurrentCode(code);
      setSpinning(false);

      if (step === "idle") {
        const data: FirstSpinData = { used: true, prize: prize.value, code };
        setFirstSpin(data);
        saveToStorage(STORAGE_KEY_FIRST_SPIN, data);
        setStep("first_result");
      } else {
        const data: SecondSpinData = { used: true, prize: prize.value, code };
        setSecondSpin(data);
        saveToStorage(STORAGE_KEY_SECOND_SPIN, data);
        setStep("second_result");
      }
    }, SPIN_DURATION_MS);
  }, [spinning, step]);

  useEffect(() => {
    if (step !== "second_result" || spinning) return;
    const timer = setTimeout(() => {
      setStep("final");
    }, 3000);
    return () => clearTimeout(timer);
  }, [step, spinning]);

  useEffect(() => {
    if (step !== "final" || finalResult) return;
    const best = pickBestPrize(firstSpin.prize, secondSpin.prize);
    const r: FinalResult = {
      firstPrize: firstSpin.prize,
      secondPrize: secondSpin.prize,
      finalPrize: best,
      finalCode: secondSpin.code,
      customerName: customer.name,
      customerPhone: customer.phone,
      bonusCompleted: true,
    };
    setFinalResult(r);
    saveToStorage(STORAGE_KEY_FINAL, r);
  }, [step, finalResult, firstSpin, secondSpin, customer]);

  const submitLead = useCallback((name: string, phone: string) => {
    const data: CustomerData = {
      name,
      phone,
      secondChanceGranted: true,
      registeredAt: Date.now(),
    };
    setCustomer(data);
    saveToStorage(STORAGE_KEY_CUSTOMER, data);
    setRotation(0);
    setStep("second_ready");
  }, []);

  const bonusWhatsAppUrl = useMemo(() => {
    if (!finalResult) return "";
    const phone = "573143732759";
    const msg = encodeURIComponent(
      [
        "Hola.",
        "Participé en la ruleta de descuentos.",
        "",
        `Nombre: ${finalResult.customerName}`,
        `Celular: ${finalResult.customerPhone}`,
        "",
        `Primer descuento: ${finalResult.firstPrize}%`,
        `Segundo descuento: ${finalResult.secondPrize}%`,
        "",
        `Descuento final: ${finalResult.finalPrize}%`,
        `Código: ${finalResult.finalCode}`,
        "",
        "Quiero reclamar mi bono para mi próximo tatuaje.",
      ].join("\n"),
    );
    return `https://wa.me/${phone}?text=${msg}`;
  }, [finalResult]);

  const secondBetter = useMemo(
    () => (finalResult ? isSecondBetter(finalResult.firstPrize, finalResult.secondPrize) : false),
    [finalResult],
  );

  return {
    step,
    spinning,
    rotation,
    currentDiscount,
    currentCode,
    firstSpin,
    secondSpin,
    customer,
    finalResult,
    spin,
    submitLead,
    bonusWhatsAppUrl,
    secondBetter,
  };
}
