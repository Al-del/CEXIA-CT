import { NextResponse } from "next/server";
import { registrationSchema } from "@/lib/schema";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Cerere invalidă." }, { status: 400 });
  }

  const parsed = registrationSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Date invalide.", issues: parsed.error.flatten() },
      { status: 422 },
    );
  }

  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (!webhookUrl) {
    // No sheet configured yet — log so the submission isn't silently lost
    // during local development, and tell the caller clearly.
    console.error(
      "GOOGLE_SHEETS_WEBHOOK_URL is not set. Registration received but not forwarded:",
      parsed.data,
    );
    return NextResponse.json(
      {
        error:
          "Formularul nu este încă conectat la Google Sheets. Vezi GOOGLE_SHEETS_SETUP.md.",
      },
      { status: 500 },
    );
  }

  try {
    const upstream = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...parsed.data,
        dataInscrierii: new Date().toISOString(),
      }),
      // Apps Script web apps redirect the POST; follow it.
      redirect: "follow",
    });

    if (!upstream.ok) {
      const text = await upstream.text().catch(() => "");
      console.error("Google Sheets webhook responded with an error:", upstream.status, text);
      return NextResponse.json(
        { error: "Nu am putut salva înscrierea. Încearcă din nou în câteva minute." },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error("Failed to reach Google Sheets webhook:", err);
    return NextResponse.json(
      { error: "Nu am putut salva înscrierea. Încearcă din nou în câteva minute." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
