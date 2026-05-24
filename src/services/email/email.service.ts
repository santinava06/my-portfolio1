import emailjs from "@emailjs/browser";
import { env } from "@/config/env";

export interface EmailPayload {
  title?: string;
  from_name: string;
  from_email: string;
  reply_to?: string;
  subject: string;
  project_type?: string;
  message: string;
  raw_message?: string;
  source_url?: string;
  user_agent?: string;
}

export interface EmailResult {
  success: boolean;
  error?: string;
}

export async function sendEmail(payload: EmailPayload): Promise<EmailResult> {
  const { serviceId, templateId, publicKey } = env.emailjs;

  if (!serviceId || !templateId || !publicKey) {
    return {
      success: false,
      error: "Email service not configured. Check environment variables.",
    };
  }

  try {
    const result = await emailjs.send(
      serviceId,
      templateId,
      {
        ...payload,
        title: payload.title ?? "Nuevo mensaje desde el portfolio",
        reply_to: payload.reply_to ?? payload.from_email,
        date: new Date().toLocaleString("es-ES", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "America/Argentina/Buenos_Aires",
        }),
      },
      publicKey,
    );

    if (result.status === 200) {
      return { success: true };
    }

    return { success: false, error: `Unexpected status: ${result.status}` };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("[email.service] Failed to send email:", message);
    return { success: false, error: message };
  }
}
