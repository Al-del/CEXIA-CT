# Conectarea formularului de înscriere la Google Sheets

Formularul de pe `/inscriere` trimite datele către `/api/inscriere`, care le
validează și le retrimite către un **Google Apps Script** publicat ca web
app. Scriptul adaugă fiecare înscriere ca rând nou într-un Google Sheet.
Nu este nevoie de cont de service sau de cheie de API — doar de contul tău
Google.

## 1. Creează Google Sheet-ul

1. Creează un Google Sheet nou (de exemplu „CEXIA — Înscrieri”).
2. Pe primul rând (header), adaugă coloanele, în această ordine:

   ```
   dataInscrierii | elevNume | clasa | scoala | experientaPython | parinteNume | parinteEmail | parinteTelefon | mesaj
   ```

## 2. Adaugă scriptul

1. În Sheet, mergi la **Extensii → Apps Script**.
2. Șterge codul din `Code.gs` și lipește următorul script:

   ```javascript
   const SHEET_NAME = "Sheet1"; // schimbă dacă foaia ta are alt nume

   function doPost(e) {
     const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
     const data = JSON.parse(e.postData.contents);

     sheet.appendRow([
       data.dataInscrierii || new Date().toISOString(),
       data.elevNume || "",
       data.clasa || "",
       data.scoala || "",
       data.experientaPython || "",
       data.parinteNume || "",
       data.parinteEmail || "",
       data.parinteTelefon || "",
       data.mesaj || "",
     ]);

     return ContentService
       .createTextOutput(JSON.stringify({ ok: true }))
       .setMimeType(ContentService.MimeType.JSON);
   }
   ```

3. Salvează proiectul (de exemplu „CEXIA înscrieri”).

## 3. Publică scriptul ca web app

1. În Apps Script, apasă **Deploy → New deployment**.
2. La tipul deployment-ului, alege **Web app**.
3. Setează:
   - **Execute as:** Me (contul tău)
   - **Who has access:** Anyone
4. Apasă **Deploy** și autorizează accesul când ți se cere.
5. Copiază **Web app URL**-ul rezultat (arată cam așa:
   `https://script.google.com/macros/s/AKfycb.../exec`).

## 4. Configurează site-ul

1. În rădăcina proiectului, creează fișierul `.env.local` (nu se
   urcă în git) pornind de la `.env.local.example`:

   ```
   GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/AKfycb.../exec
   ```

2. Repornește serverul de dezvoltare (`npm run dev`) dacă rulează.
3. Pentru producție (Vercel, etc.), adaugă aceeași variabilă de mediu în
   setările proiectului.

## 5. Testează

Trimite o înscriere de test din `/inscriere` și verifică apariția unui rând
nou în Google Sheet. Dacă apare o eroare, verifică:

- că URL-ul din `.env.local` se termină în `/exec`, nu `/dev`;
- că deployment-ul are acces setat la „Anyone”;
- log-urile din terminalul unde rulează `npm run dev` (`console.error`
  afișează motivul exact al erorii).

## Actualizarea scriptului mai târziu

Orice modificare a codului din Apps Script necesită un **New deployment**
(sau „Manage deployments → Edit → New version”) pentru a intra în vigoare —
salvarea fișierului `Code.gs` singură nu este suficientă.
