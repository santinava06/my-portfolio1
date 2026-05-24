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
    errors.email = "El email no es valido";
  }

  if (!data.subject.trim()) {
    errors.subject = "El tipo de proyecto es requerido";
  }

  if (!data.message.trim()) {
    errors.message = "El contexto del proyecto es requerido";
  } else if (data.message.trim().length < 20) {
    errors.message = "Contame un poco mas sobre el proyecto";
  }

  return errors;
}

export function hasErrors(errors: ValidationErrors): boolean {
  return Object.keys(errors).length > 0;
}
