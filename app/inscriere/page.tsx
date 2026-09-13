import type { Metadata } from "next";
import { RegistrationForm } from "@/components/RegistrationForm";

export const metadata: Metadata = {
  title: "Înscriere — CEXIA",
  description:
    "Înscrie un elev la grupa Începători CEXIA, an școlar 2026–2027.",
};

export default function InscrierePage() {
  return (
    <div>
      <section className="border-b border-line bg-navy text-paper">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold-soft/90">
            Grupa Începători – ritm lent · An școlar 2026–2027
          </p>
          <h1 className="font-serif-display mt-4 text-3xl font-semibold leading-tight md:text-4xl">
            Înscriere
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-paper/80">
            Completează formularul de mai jos pentru a înscrie un elev la
            programul CEXIA. Nu este nevoie de experiență anterioară de
            programare — grupa Începători pornește de la fundamentele Python.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1fr_1.5fr]">
          <div className="space-y-6">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.08em] text-navy">
                Cui se adresează
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Elevilor de gimnaziu și liceu din Constanța care vor să
                înceapă sau să-și consolideze pregătirea pentru olimpiadele
                de inteligență artificială (ONIA, ROAI, IOAI).
              </p>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.08em] text-navy">
                Ce urmează după înscriere
              </h2>
              <ul className="mt-2 space-y-2 text-sm leading-relaxed text-ink-soft">
                <li>1. Primești o confirmare pe email.</li>
                <li>2. Echipa CEXIA formează grupele pe niveluri.</li>
                <li>3. Primești orarul și detaliile primei ședințe.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.08em] text-navy">
                Întrebări?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Scrie-ne la{" "}
                <a
                  href="mailto:contact.cexia@gmail.com"
                  className="font-medium text-navy underline decoration-gold decoration-2 underline-offset-4"
                >
                  contact.cexia@gmail.com
                </a>
                .
              </p>
            </div>
          </div>

          <div className="border border-line bg-paper-raised p-6 md:p-8">
            <RegistrationForm />
          </div>
        </div>
      </section>
    </div>
  );
}
