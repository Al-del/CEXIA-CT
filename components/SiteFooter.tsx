import Link from "next/link";

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-line bg-navy-deep text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <p className="font-serif-display text-lg font-semibold">CEXIA</p>
          <p className="mt-2 max-w-xs text-sm text-paper/70">
            Centrul de Excelență la Inteligență Artificială — Constanța.
            Pregătim elevi pentru olimpiadele naționale și internaționale de
            inteligență artificială, de la fundamentele Python până la
            deep learning.
          </p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-paper/50">
            Navigare
          </p>
          <ul className="mt-3 space-y-2 text-sm text-paper/80">
            <li><Link href="/" className="hover:text-gold-soft">Acasă</Link></li>
            <li><Link href="/programa" className="hover:text-gold-soft">Programă</Link></li>
            <li><Link href="/inscriere" className="hover:text-gold-soft">Înscriere</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-paper/50">
            Contact
          </p>
          <ul className="mt-3 space-y-2 text-sm text-paper/80">
            <li>
              <a href="mailto:contact.cexia@gmail.com" className="hover:text-gold-soft">
                contact.cexia@gmail.com
              </a>
            </li>
            <li>Constanța, România</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/10 px-6 py-5 text-center text-xs text-paper/50">
        © {new Date().getFullYear()} CEXIA — Centrul de Excelență la Inteligență Artificială. Toate drepturile rezervate.
      </div>
    </footer>
  );
}
