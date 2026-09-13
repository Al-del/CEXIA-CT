import { z } from "zod";

export const registrationSchema = z.object({
  elevNume: z.string().trim().min(2, "Introdu numele complet al elevului.").max(120),
  clasa: z.string().trim().min(1, "Selectează clasa.").max(40),
  scoala: z.string().trim().min(2, "Introdu unitatea de învățământ.").max(160),
  experientaPython: z.enum(["niciuna", "incepator", "intermediar", "avansat"], {
    message: "Selectează nivelul de experiență.",
  }),
  parinteNume: z.string().trim().min(2, "Introdu numele părintelui/tutorelui.").max(120),
  parinteEmail: z.string().trim().email("Adresa de email nu este validă."),
  parinteTelefon: z
    .string()
    .trim()
    .min(9, "Introdu un număr de telefon valid.")
    .max(20, "Introdu un număr de telefon valid."),
  mesaj: z.string().trim().max(1000).optional().or(z.literal("")),
});

export type RegistrationInput = z.infer<typeof registrationSchema>;
