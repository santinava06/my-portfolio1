import emailjs from "@emailjs/browser";
import { env, validateEnv } from "@/config/env";

let initialized = false;

export function initEmailService(): void {
  if (initialized) return;
  validateEnv();
  if (env.emailjs.publicKey) {
    emailjs.init(env.emailjs.publicKey);
    initialized = true;
  }
}
