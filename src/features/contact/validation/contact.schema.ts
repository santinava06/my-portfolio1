import type { ContactFormData } from "@/features/contact/types/contact";

export interface ValidationErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(data: ContactFormData): ValidationErrors {
  const errors: ValidationErrors = {};

  if (!data.name.trim()) {
    errors.name = "El nombre es requerido";
  }

  if (!data.email.trim()) {
    errors.email = "El email es requerido";
  } else if (!emailRegex.test(data.email)) {
    errors.email = "El email no es válido";
  }

  if (!data.subject.trim()) {
    errors.subject = "El asunto es requerido";
  }

  if (!data.message.trim()) {
    errors.message = "El mensaje es requerido";
  } else if (data.message.trim().length < 10) {
    errors.message = "El mensaje debe tener al menos 10 caracteres";
  }

  return errors;
}

export function hasErrors(errors: ValidationErrors): boolean {
  return Object.keys(errors).length > 0;
}
