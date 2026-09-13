import type { Metadata } from "next";
import Link from "next/link";
import {
  calendar,
  contentBlocks,
  evaluation,
  generalCompetencies,
  resources,
  specificCompetencies,
  stages,
} from "@/lib/curriculum";

export const metadata: Metadata = {
  title: "Programă — CEXIA",
  description:
    "Competențe, conținuturi și planificare calendaristică pentru grupa Începători, anul școlar 2026–2027.",
};

function SectionLabel({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="font-serif-display text-sm font-semibold text-gold">{n}</span>
      <h2 className="font-serif-display text-2xl font-semibold text-navy md:text-3xl">
        {children}
      </h2>
    </div>
  );
}

export default function ProgramaPage() {
  return (
    <div>
      <section className="border-b border-line bg-navy text-paper">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold-soft/90">
            Programă · Grupa Începători – ritm lent · An școlar 2026–2027
          </p>
          <h1 className="font-serif-display mt-4 max-w-3xl text-3xl font-semibold leading-tight md:text-4xl">
            Competențe, conținuturi și planificare calendaristică
          </h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-paper/80">
            Programă destinată elevilor care pornesc de la un nivel
            introductiv de Python și au nevoie de consolidare înaintea
            temelor de competiție de la ONIA, ROAI și IOAI.
          </p>
        </div>
      </section>

      {/* 1. Introducere */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionLabel n="1">Introducere</SectionLabel>
        <div className="mt-6 max-w-3xl space-y-4 text-[15px] leading-relaxed text-ink-soft">
          <p>
            Prezenta programă este destinată grupei <strong className="text-ink">Începători – ritm lent</strong>.
            În primul interval, octombrie–decembrie 2026, accentul cade pe
            Python, NumPy, Pandas și fundamentele de Machine Learning, astfel
            încât elevii să poată aborda materia de bază relevantă pentru
            etapa județeană. În perioada ianuarie–mai 2027, programa continuă
            gradual cu PyTorch, rețele neuronale, Computer Vision, NLP modern
            și teme selectate din syllabus-ul IOAI.
          </p>
          <p>
            Pentru pregătirea de performanță se folosesc ca repere principale
            Programa Olimpiadei Naționale de Inteligență Artificială și
            syllabus-ul oficial IOAI 2026. Activitățile sunt organizate
            predominant practic, prin notebook-uri, seturi de probleme,
            mini-simulări și îmbunătățirea unor baseline-uri.
          </p>
        </div>
      </section>

      {/* 2. Organizare */}
      <section className="border-y border-line bg-paper-raised">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <SectionLabel n="2">Organizare</SectionLabel>
          <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-ink-soft">
            Pregătirea se desfășoară pentru grupa Începători – ritm lent,
            destinată elevilor care au nevoie de o introducere mai amplă în
            Python înainte de parcurgerea conținuturilor de inteligență
            artificială.
          </p>

          <div className="mt-8 grid gap-px border border-line bg-line md:grid-cols-3">
            {stages.map((stage) => (
              <div key={stage.label} className="bg-paper-raised p-6">
                <p className="text-xs font-medium uppercase tracking-[0.1em] text-gold">
                  {stage.label}
                </p>
                <p className="mt-1 text-sm font-medium text-navy">{stage.period}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{stage.focus}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-navy">
                Orar și ritm
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                Ședința standard are durata de 90 de minute. Pentru
                octombrie–decembrie sunt prevăzute 16 ședințe, iar pentru
                ianuarie–mai 20 de ședințe. Pentru atingerea ritmului complet,
                unele săptămâni pot include o a doua întâlnire sau o ședință
                de recuperare, în funcție de calendarul școlar și de
                disponibilitatea grupei.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-navy">
                Structura unei ședințe
              </h3>
              <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-ink-soft">
                <li>25–35 min — explicație și demonstrație</li>
                <li>50–60 min — laborator practic</li>
                <li>5–10 min — recapitulare și exerciții de consolidare</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. General competencies */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionLabel n="3">Competențe generale</SectionLabel>
        <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-ink-soft">
          Competențele generale urmăresc o progresie de la utilizarea
          instrumentelor de bază până la analiza, evaluarea și îmbunătățirea
          unor soluții de inteligență artificială.
        </p>
        <div className="mt-8 overflow-x-auto border border-line">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="bg-navy text-left text-paper">
                <th className="w-20 px-4 py-3 font-medium">Cod</th>
                <th className="px-4 py-3 font-medium">Competența generală</th>
              </tr>
            </thead>
            <tbody>
              {generalCompetencies.map((c, i) => (
                <tr
                  key={c.code}
                  className={i % 2 === 0 ? "bg-paper-raised" : "bg-paper"}
                >
                  <td className="border-t border-line px-4 py-3 font-serif-display font-semibold text-gold">
                    {c.code}
                  </td>
                  <td className="border-t border-line px-4 py-3 text-ink-soft">{c.text}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. Specific competencies + content */}
      <section className="border-y border-line bg-paper-raised">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <SectionLabel n="4">Competențe specifice și conținuturi</SectionLabel>
          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-ink-soft">
            Grupa Începători – ritm lent
          </p>

          <div className="mt-8 overflow-x-auto border border-line">
            <table className="w-full min-w-[720px] border-collapse text-sm">
              <thead>
                <tr className="bg-navy text-left text-paper">
                  <th className="w-20 px-4 py-3 font-medium">Cod</th>
                  <th className="px-4 py-3 font-medium">Competența specifică</th>
                  <th className="px-4 py-3 font-medium">Exemplu de activitate</th>
                </tr>
              </thead>
              <tbody>
                {specificCompetencies.map((c, i) => (
                  <tr key={c.code} className={i % 2 === 0 ? "bg-paper" : "bg-paper-raised"}>
                    <td className="border-t border-line px-4 py-3 align-top font-serif-display font-semibold text-gold">
                      {c.code}
                    </td>
                    <td className="border-t border-line px-4 py-3 align-top text-ink-soft">
                      {c.text}
                      <span className="mt-1 block text-xs text-ink-soft/70">
                        Corelat cu {c.linked}
                      </span>
                    </td>
                    <td className="border-t border-line px-4 py-3 align-top text-ink-soft">
                      {c.activity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-navy">
                Conținuturi — Octombrie–Decembrie
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink-soft">
                {contentBlocks.fall.map((item, i) => (
                  <li key={i} className="border-t border-line pt-3 first:border-0 first:pt-0">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-navy">
                Conținuturi — Ianuarie–Mai
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink-soft">
                {contentBlocks.spring.map((item, i) => (
                  <li key={i} className="border-t border-line pt-3 first:border-0 first:pt-0">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Calendar */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionLabel n="5">Planificarea calendaristică</SectionLabel>
        <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-ink-soft">
          Datele exacte ale întâlnirilor se stabilesc prin calendarul intern;
          numărul de ședințe este orientativ și poate fi redistribuit în
          funcție de vacanțe, concursuri și ritmul real al grupei.
        </p>

        <div className="mt-10 space-y-12">
          {calendar.map((term) => (
            <div key={term.term}>
              <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line pb-3">
                <h3 className="font-serif-display text-lg font-semibold text-navy">
                  {term.term}
                </h3>
                <p className="text-sm text-ink-soft">{term.subtitle}</p>
              </div>
              <div className="mt-4 divide-y divide-line">
                {term.months.map((m) => (
                  <div key={m.month} className="grid gap-2 py-4 md:grid-cols-[160px_100px_1fr]">
                    <p className="text-sm font-medium text-navy">{m.month}</p>
                    <p className="text-xs uppercase tracking-wide text-gold">{m.sessions}</p>
                    <p className="text-sm leading-relaxed text-ink-soft">{m.content}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-3xl border-t border-line pt-6 text-sm leading-relaxed text-ink-soft">
          <strong className="text-ink">Total orientativ: 36 de ședințe × 90 de minute.</strong>{" "}
          Primele 16 ședințe sunt dedicate intervalului octombrie–decembrie,
          iar următoarele 20 intervalului ianuarie–mai.
        </p>
      </section>

      {/* 6. Evaluation */}
      <section className="border-y border-line bg-navy-deep text-paper">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex items-baseline gap-3">
            <span className="font-serif-display text-sm font-semibold text-gold-soft">6</span>
            <h2 className="font-serif-display text-2xl font-semibold md:text-3xl">
              Evaluare
            </h2>
          </div>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {evaluation.map((item, i) => (
              <li key={i} className="flex gap-3 border-t border-paper/15 pt-4 text-sm leading-relaxed text-paper/80">
                <span className="font-serif-display text-gold-soft">{String(i + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7. Resources */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionLabel n="7">Resurse</SectionLabel>

        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-navy">
              Resurse principale
            </h3>
            <ul className="mt-4 space-y-3">
              {resources.main.map((r) => (
                <li key={r.href} className="border-t border-line pt-3 first:border-0 first:pt-0">
                  <a
                    href={r.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-navy-soft"
                  >
                    {r.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-navy">
              Resurse suport
            </h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink-soft">
              {resources.support.map((item, i) => (
                <li key={i} className="border-t border-line pt-3 first:border-0 first:pt-0">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border border-line bg-gold-soft/40 p-6">
          <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-navy">
            Notă de prioritizare
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            Dacă ritmul real al grupei este mai lent decât planificarea, se
            prioritizează în această ordine: PyTorch și bucla de antrenare;
            MLP, backpropagation și regularizare; CNN, clasificare de imagini
            și transfer learning; BERT/attention/transformers la nivel de
            bază; detecție/segmentare și audio la nivel de utilizare;
            GAN/diffusion/self-supervised ca overview aplicativ. Scopul este
            ca elevii să stăpânească bine nucleul, nu să parcurgă superficial
            toate extensiile.
          </p>
        </div>

        <div className="mt-14 flex flex-col items-start gap-4 border-t border-line pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-sm leading-relaxed text-ink-soft">
            Vrei ca fiul sau fiica ta să parcurgă acest traseu? Înscrierile
            pentru grupa Începători sunt deschise.
          </p>
          <Link
            href="/inscriere"
            className="shrink-0 border border-navy bg-navy px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-navy-soft"
          >
            Înscrie un elev
          </Link>
        </div>
      </section>
    </div>
  );
}
