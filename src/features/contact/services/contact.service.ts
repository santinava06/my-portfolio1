import { sendEmail } from "@/services/email/email.service";
import type { ContactFormData } from "@/features/contact/types/contact";

export interface ContactResult {
  success: boolean;
  error?: string;
}

export async function submitContactForm(
  data: ContactFormData,
): Promise<ContactResult> {
  const sourceUrl =
    typeof window !== "undefined" ? window.location.href : "Portfolio web";
  const userAgent =
    typeof window !== "undefined" ? window.navigator.userAgent : "Unknown";
  const normalizedSubject = data.subject.trim();
  const normalizedMessage = data.message.trim();
  const message = [
    "Nuevo mensaje recibido desde el portfolio.",
    "",
    `Nombre: ${data.name.trim()}`,
    `Email: ${data.email.trim()}`,
    `Tipo de proyecto: ${normalizedSubject}`,
    "",
    "Mensaje:",
    normalizedMessage,
    "",
    "Contexto tecnico:",
    `Origen: ${sourceUrl}`,
    `Fecha: ${new Date().toLocaleString("es-AR", {
      dateStyle: "full",
      timeStyle: "short",
    })}`,
  ].join("\n");

  return sendEmail({
    title: "Nuevo contacto desde el portfolio",
    from_name: data.name.trim(),
    from_email: data.email.trim(),
    reply_to: data.email.trim(),
    subject: `Portfolio - ${normalizedSubject}`,
    project_type: normalizedSubject,
    raw_message: normalizedMessage,
    message,
    source_url: sourceUrl,
    user_agent: userAgent,
  });
}
