import { useState } from "react";
import { GOLD, GOLD_LIGHT } from "../constants";

interface LeadFormProps {
  onSubmit: (name: string, phone: string) => void;
}

interface Errors {
  name?: string;
  phone?: string;
}

export function LeadForm({ onSubmit }: LeadFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  function validate(): Errors {
    const e: Errors = {};
    const trimmedName = name.trim();
    if (!trimmedName) {
      e.name = "El nombre es obligatorio";
    } else if (trimmedName.length < 3) {
      e.name = "El nombre debe tener al menos 3 caracteres";
    }
    const digitsOnly = phone.replace(/\D/g, "");
    if (!phone.trim()) {
      e.phone = "El número de celular es obligatorio";
    } else if (phone.trim() !== digitsOnly) {
      e.phone = "Solo se permiten números";
    } else if (digitsOnly.length < 10) {
      e.phone = "Debe tener al menos 10 dígitos";
    } else if (digitsOnly.length > 15) {
      e.phone = "Debe tener máximo 15 dígitos";
    }
    return e;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    setTouched({ name: true, phone: true });
    if (v.name || v.phone) return;
    onSubmit(name.trim(), phone.replace(/\D/g, ""));
  }

  function handleBlur(field: string) {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate());
  }

  const currentErrors = touched.name || touched.phone ? errors : {};

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="lead-name" className="block text-sm font-medium mb-1.5 text-foreground">
          Nombre completo
        </label>
        <input
          id="lead-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => handleBlur("name")}
          className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 transition ${
            currentErrors.name
              ? "border-red-500 focus:ring-red-500/50"
              : "border-white/10 focus:ring-[#D4A853]/50"
          }`}
          placeholder="Ej: Juan Pérez"
          aria-invalid={!!currentErrors.name}
          aria-describedby={currentErrors.name ? "lead-name-error" : undefined}
        />
        {currentErrors.name && (
          <p id="lead-name-error" className="mt-1 text-xs text-red-400" role="alert">
            {currentErrors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="lead-phone" className="block text-sm font-medium mb-1.5 text-foreground">
          Número de celular
        </label>
        <input
          id="lead-phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          onBlur={() => handleBlur("phone")}
          className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 transition ${
            currentErrors.phone
              ? "border-red-500 focus:ring-red-500/50"
              : "border-white/10 focus:ring-[#D4A853]/50"
          }`}
          placeholder="Ej: 3001234567"
          inputMode="numeric"
          aria-invalid={!!currentErrors.phone}
          aria-describedby={currentErrors.phone ? "lead-phone-error" : undefined}
        />
        {currentErrors.phone && (
          <p id="lead-phone-error" className="mt-1 text-xs text-red-400" role="alert">
            {currentErrors.phone}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full py-3.5 text-sm uppercase tracking-[0.15em] font-bold rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A853]"
        style={{
          color: "#1a1a1a",
          background: `linear-gradient(135deg, ${GOLD}, #B8933A, ${GOLD})`,
          boxShadow: `0 4px 20px ${GOLD}44`,
        }}
      >
        Obtener segunda oportunidad
      </button>
    </form>
  );
}
