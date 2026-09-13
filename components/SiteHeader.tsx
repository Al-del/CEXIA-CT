"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Acasă" },
  { href: "/programa", label: "Programă" },
  { href: "/inscriere", label: "Înscriere" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/cexia-wordmark.png"
            alt="CEXIA"
            width={1803}
            height={236}
            priority
            className="h-7 w-auto"
          />
          <span className="hidden border-l border-line pl-3 text-[11px] uppercase leading-tight tracking-[0.1em] text-ink-soft sm:block">
            Centrul de Excelență
            <br />
            la Inteligență Artificială
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition-colors hover:text-navy ${
                  active ? "text-navy font-medium" : "text-ink-soft"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/inscriere"
            className="border border-navy bg-navy px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-navy-soft"
          >
            Înscrie un elev
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Deschide meniul"
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 border border-line md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="h-px w-5 bg-ink" />
          <span className="h-px w-5 bg-ink" />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line px-6 pb-4 pt-2 md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm text-ink-soft transition-colors hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/inscriere"
            onClick={() => setOpen(false)}
            className="mt-2 border border-navy bg-navy px-4 py-2 text-center text-sm font-medium text-paper"
          >
            Înscrie un elev
          </Link>
        </nav>
      )}
    </header>
  );
}
