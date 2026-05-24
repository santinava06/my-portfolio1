export const env = {
  emailjs: {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "",
  },
  site: {
    url: "https://santinavarro.dev",
    name: "Santiago Navarro",
    locale: "es_ES" as const,
  },
} as const;

export function validateEnv(): void {
  const missing: string[] = [];
  if (!env.emailjs.serviceId) missing.push("NEXT_PUBLIC_EMAILJS_SERVICE_ID");
  if (!env.emailjs.templateId) missing.push("NEXT_PUBLIC_EMAILJS_TEMPLATE_ID");
  if (!env.emailjs.publicKey) missing.push("NEXT_PUBLIC_EMAILJS_PUBLIC_KEY");
  if (missing.length > 0) {
    console.warn(`Missing environment variables: ${missing.join(", ")}`);
  }
}
