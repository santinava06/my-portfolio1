import { sendEmail } from "@/services/email/email.service";
import type { ContactFormData } from "@/features/contact/types/contact";

export interface ContactResult {
  success: boolean;
  error?: string;
}

export async function submitContactForm(
  data: ContactFormData,
): Promise<ContactResult> {
  return sendEmail({
    from_name: data.name,
    from_email: data.email,
    subject: data.subject,
    message: data.message,
  });
}
