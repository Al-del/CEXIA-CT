import Link from "next/link";
import { stages, generalCompetencies } from "@/lib/curriculum";

const OLYMPIADS = [
  {
    acronym: "ONIA",
    name: "Olimpiada Națională de Inteligență Artificială",
    description:
      "Competiția națională de referință pentru elevii de liceu și gimnaziu din România, cu etape județene și naționale.",
  },
  {
    acronym: "ROAI",
    name: "Etapa de selecție națională pentru echipa României",
    description:
      "Procesul prin care se formează reprezentarea României la competițiile internaționale de inteligență artificială.",
  },
  {
    acronym: "IOAI",
    name: "International Olympiad in Artificial Intelligence",
    description:
      "Olimpiada internațională de inteligență artificială — reperul de performanță al programei CEXIA pentru anul 2026–2027.",
  },
];

const FACTS = [
  { label: "Ședințe pe an", value: "36" },
  { label: "Durata unei ședințe", value: "90 min" },
  { label: "An școlar", value: "2026–2027" },
  { label: "Locație", value: "Constanța" },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-line bg-navy text-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.2fr_1fr] md:py-28">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold-soft/90">
              Constanța · An școlar 2026–2027
            </p>
            <h1 className="font-serif-display mt-4 text-4xl font-semibold leading-tight md:text-5xl">
              Centrul de Excelență la Inteligență Artificială
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/80 md:text-lg">
              CEXIA pregătește elevi din Constanța pentru olimpiadele
              naționale și internaționale de inteligență artificială — de la
              fundamentele Python, până la rețele neuronale, computer vision
              și NLP modern, cu programa aliniată la ONIA și la syllabus-ul
              IOAI.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/inscriere"
                className="border border-gold bg-gold px-6 py-3 text-sm font-medium text-navy-deep transition-colors hover:bg-gold-soft"
              >
                Înscrie un elev
              </Link>
              <Link
                href="/programa"
                className="border border-paper/30 px-6 py-3 text-sm font-medium text-paper transition-colors hover:border-paper hover:bg-paper/5"
              >
                Vezi programa completă
              </Link>
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-px self-start border border-paper/15 bg-paper/15 md:mt-2">
            {FACTS.map((fact) => (
              <div key={fact.label} className="bg-navy p-5">
                <dt className="text-xs uppercase tracking-[0.1em] text-paper/60">
                  {fact.label}
                </dt>
                <dd className="font-serif-display mt-1 text-2xl font-semibold text-paper">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
              Ce ne propunem
            </p>
            <h2 className="font-serif-display mt-3 text-2xl font-semibold text-navy md:text-3xl">
              Un traseu gradual, de la primele linii de cod până la
              performanța de concurs.
            </h2>
          </div>
          <div className="space-y-5 text-[15px] leading-relaxed text-ink-soft">
            <p>
              CEXIA — Centrul de Excelență la Inteligență Artificială — își
              propune să formeze și să dezvolte competențe de programare,
              analiză de date, învățare automată și inteligență artificială,
              printr-un traseu gradual, adaptat elevilor care pornesc de la un
              nivel introductiv de Python și au nevoie de consolidare
              înaintea temelor de competiție.
            </p>
            <p>
              În primul interval, octombrie–decembrie, accentul cade pe
              Python, NumPy, Pandas și fundamentele de Machine Learning,
              astfel încât elevii să poată aborda materia de bază relevantă
              pentru etapa județeană. În perioada ianuarie–mai, programa
              continuă gradual cu PyTorch, rețele neuronale, Computer Vision,
              NLP modern și teme selectate din syllabus-ul IOAI.
            </p>
            <p>
              Activitățile sunt organizate predominant practic, prin
              notebook-uri, seturi de probleme, mini-simulări și îmbunătățirea
              unor baseline-uri — nu prin teorie abstractă.
            </p>
          </div>
        </div>
      </section>

      {/* Olympiads */}
      <section className="border-y border-line bg-paper-raised">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
            Pregătire de performanță
          </p>
          <h2 className="font-serif-display mt-3 max-w-2xl text-2xl font-semibold text-navy md:text-3xl">
            Repere principale: ONIA, ROAI și IOAI
          </h2>
          <div className="mt-10 grid gap-px border border-line bg-line md:grid-cols-3">
            {OLYMPIADS.map((o) => (
              <div key={o.acronym} className="bg-paper-raised p-7">
                <p className="font-serif-display text-3xl font-semibold text-navy">
                  {o.acronym}
                </p>
                <p className="mt-2 text-sm font-medium text-ink">{o.name}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {o.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stages */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
          Planificare
        </p>
        <h2 className="font-serif-display mt-3 max-w-2xl text-2xl font-semibold text-navy md:text-3xl">
          Trei etape, un singur traseu spre performanță
        </h2>

        <ol className="mt-10 space-y-0 border-l border-line md:ml-2">
          {stages.map((stage, i) => (
            <li key={stage.label} className="relative pb-10 pl-8 last:pb-0">
              <span className="absolute -left-[7px] top-1 flex h-3.5 w-3.5 items-center justify-center border border-navy bg-paper" />
              <p className="text-xs font-medium uppercase tracking-[0.1em] text-ink-soft">
                {stage.label} · {stage.period}
              </p>
              <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-ink">
                {stage.focus}
              </p>
              {i === stages.length - 1 && (
                <Link
                  href="/programa"
                  className="mt-3 inline-block text-sm font-medium text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-navy-soft"
                >
                  Vezi calendarul detaliat pe luni →
                </Link>
              )}
            </li>
          ))}
        </ol>
      </section>

      {/* Competencies */}
      <section className="border-y border-line bg-navy-deep text-paper">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold-soft/90">
            Competențe generale
          </p>
          <h2 className="font-serif-display mt-3 max-w-2xl text-2xl font-semibold md:text-3xl">
            Ce știe să facă un absolvent al programului
          </h2>
          <div className="mt-10 grid gap-x-10 gap-y-6 md:grid-cols-2">
            {generalCompetencies.map((c) => (
              <div key={c.code} className="flex gap-4 border-t border-paper/15 pt-4">
                <span className="font-serif-display shrink-0 text-sm font-semibold text-gold-soft">
                  {c.code}
                </span>
                <p className="text-sm leading-relaxed text-paper/80">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
          Înscriere
        </p>
        <h2 className="font-serif-display mx-auto mt-3 max-w-xl text-2xl font-semibold text-navy md:text-3xl">
          Locurile pentru grupa Începători sunt limitate
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-ink-soft">
          Completează formularul de înscriere și revenim cu detalii despre
          grupă, orar și prima ședință.
        </p>
        <Link
          href="/inscriere"
          className="mt-8 inline-block border border-navy bg-navy px-7 py-3 text-sm font-medium text-paper transition-colors hover:bg-navy-soft"
        >
          Completează formularul de înscriere
        </Link>
      </section>
    </div>
  );
}
