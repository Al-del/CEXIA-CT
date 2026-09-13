# CEXIA — site

Site Next.js pentru Centrul de Excelență la Inteligență Artificială
(Constanța): pagina de prezentare, programa completă pentru grupa
Începători (an școlar 2026–2027) și formularul de înscriere, care salvează
datele într-un Google Sheet.

## Dezvoltare locală

```bash
npm install
npm run dev
```

Deschide [http://localhost:3000](http://localhost:3000).

## Conectarea formularului la Google Sheets

Vezi [`GOOGLE_SHEETS_SETUP.md`](./GOOGLE_SHEETS_SETUP.md) pentru pașii
completi. Pe scurt: formularul trimite datele către `/api/inscriere`, care
le validează și le retrimite către un Google Apps Script publicat ca web
app, care adaugă un rând nou într-un Google Sheet. URL-ul scriptului se
configurează prin variabila de mediu `GOOGLE_SHEETS_WEBHOOK_URL` (vezi
`.env.local.example`).

Fără această variabilă configurată, formularul afișează o eroare clară în
loc să piardă datele în tăcere.

## Structură

- `app/page.tsx` — pagina principală (misiune, olimpiade, etape, competențe)
- `app/programa/page.tsx` — programa completă, structurată din documentul
  oficial (`lib/curriculum.ts`)
- `app/inscriere/page.tsx` + `components/RegistrationForm.tsx` — formularul
  de înscriere
- `app/api/inscriere/route.ts` — validare (Zod) și trimitere către Google
  Sheets
- `components/SiteHeader.tsx`, `components/SiteFooter.tsx` — navigare comună

## Deploy

Proiectul este un site Next.js standard — se poate publica pe Vercel sau pe
orice platformă compatibilă cu Next.js. Nu uita să setezi
`GOOGLE_SHEETS_WEBHOOK_URL` în variabilele de mediu ale platformei alese.
