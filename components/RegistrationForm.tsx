"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const GRADES = [
  "Clasa a V-a",
  "Clasa a VI-a",
  "Clasa a VII-a",
  "Clasa a VIII-a",
  "Clasa a IX-a",
  "Clasa a X-a",
  "Clasa a XI-a",
  "Clasa a XII-a",
];

const EXPERIENCE_LEVELS: { value: string; label: string }[] = [
  { value: "niciuna", label: "Fără experiență în programare" },
  { value: "incepator", label: "Începător (a scris cod ocazional)" },
  { value: "intermediar", label: "Intermediar (Python de bază)" },
  { value: "avansat", label: "Avansat (proiecte / concursuri anterioare)" },
];

const inputClass =
  "w-full border border-line bg-paper px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-navy";

const labelClass = "text-sm font-medium text-ink";

export function RegistrationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    try {
      const res = await fetch("/api/inscriere", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        setErrorMessage(
          body?.error ??
            "Nu am putut trimite formularul. Încearcă din nou sau scrie-ne pe email.",
        );
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setErrorMessage(
        "Nu am putut trimite formularul. Verifică conexiunea și încearcă din nou.",
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-line bg-paper-raised p-8 text-center">
        <p className="font-serif-display text-xl font-semibold text-navy">
          Înscriere trimisă cu succes.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
          Îți mulțumim! Am înregistrat datele elevului. Un membru al echipei
          CEXIA va reveni pe email cu detalii despre grupă, orar și prima
          ședință.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 border border-navy px-5 py-2.5 text-sm font-medium text-navy transition-colors hover:bg-navy hover:text-paper"
        >
          Înscrie un alt elev
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8" noValidate>
      <fieldset className="space-y-5">
        <legend className="text-xs font-medium uppercase tracking-[0.14em] text-gold">
          Date despre elev
        </legend>

        <div>
          <label htmlFor="elevNume" className={labelClass}>
            Nume și prenume elev
          </label>
          <input
            id="elevNume"
            name="elevNume"
            required
            minLength={2}
            className={`${inputClass} mt-1.5`}
            placeholder="Ex: Maria Popescu"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="clasa" className={labelClass}>
              Clasa
            </label>
            <select id="clasa" name="clasa" required defaultValue="" className={`${inputClass} mt-1.5`}>
              <option value="" disabled>
                Selectează clasa
              </option>
              {GRADES.map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="scoala" className={labelClass}>
              Unitate de învățământ
            </label>
            <input
              id="scoala"
              name="scoala"
              required
              minLength={2}
              className={`${inputClass} mt-1.5`}
              placeholder="Ex: Colegiul Național Mircea cel Bătrân"
            />
          </div>
        </div>

        <div>
          <label htmlFor="experientaPython" className={labelClass}>
            Experiență anterioară în programare
          </label>
          <select
            id="experientaPython"
            name="experientaPython"
            required
            defaultValue=""
            className={`${inputClass} mt-1.5`}
          >
            <option value="" disabled>
              Selectează nivelul
            </option>
            {EXPERIENCE_LEVELS.map((lvl) => (
              <option key={lvl.value} value={lvl.value}>
                {lvl.label}
              </option>
            ))}
          </select>
        </div>
      </fieldset>

      <fieldset className="space-y-5">
        <legend className="text-xs font-medium uppercase tracking-[0.14em] text-gold">
          Date de contact — părinte / tutore
        </legend>

        <div>
          <label htmlFor="parinteNume" className={labelClass}>
            Nume și prenume
          </label>
          <input
            id="parinteNume"
            name="parinteNume"
            required
            minLength={2}
            className={`${inputClass} mt-1.5`}
            placeholder="Ex: Ana Popescu"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="parinteEmail" className={labelClass}>
              Email
            </label>
            <input
              id="parinteEmail"
              name="parinteEmail"
              type="email"
              required
              className={`${inputClass} mt-1.5`}
              placeholder="nume@exemplu.ro"
            />
          </div>
          <div>
            <label htmlFor="parinteTelefon" className={labelClass}>
              Telefon
            </label>
            <input
              id="parinteTelefon"
              name="parinteTelefon"
              type="tel"
              required
              minLength={9}
              className={`${inputClass} mt-1.5`}
              placeholder="07xx xxx xxx"
            />
          </div>
        </div>
      </fieldset>

      <fieldset>
        <label htmlFor="mesaj" className={labelClass}>
          Întrebări sau mențiuni <span className="text-ink-soft">(opțional)</span>
        </label>
        <textarea
          id="mesaj"
          name="mesaj"
          rows={4}
          maxLength={1000}
          className={`${inputClass} mt-1.5 resize-none`}
          placeholder="Ex: elevul a mai participat la etapa județeană ONIA în 2025."
        />
      </fieldset>

      {status === "error" && errorMessage && (
        <p className="border border-line bg-gold-soft/40 px-4 py-3 text-sm text-ink">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full border border-navy bg-navy px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-navy-soft disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Se trimite…" : "Trimite înscrierea"}
      </button>

      <p className="text-xs leading-relaxed text-ink-soft">
        Prin trimiterea formularului, ești de acord ca datele completate să
        fie folosite exclusiv pentru organizarea grupelor CEXIA și pentru a
        te contacta în legătură cu programul.
      </p>
    </form>
  );
}
