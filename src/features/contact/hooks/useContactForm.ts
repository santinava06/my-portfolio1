"use client";

import { useState, useCallback, useEffect } from "react";
import { initEmailService } from "@/services/email/email.config";
import { submitContactForm } from "@/features/contact/services/contact.service";
import {
  validateContactForm,
  hasErrors,
} from "@/features/contact/validation/contact.schema";
import type { ContactFormData, SubmitStatus } from "@/features/contact/types/contact";
import type { ValidationErrors } from "@/features/contact/validation/contact.schema";

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  useEffect(() => {
    initEmailService();
  }, []);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (errors[name as keyof ValidationErrors]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    },
    [errors],
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      const validationErrors = validateContactForm(formData);
      setErrors(validationErrors);

      if (hasErrors(validationErrors)) return;

      setIsLoading(true);
      setSubmitStatus("idle");

      const result = await submitContactForm(formData);

      if (result.success) {
        setSubmitStatus("success");
        setFormData(initialFormData);
      } else {
        setSubmitStatus("error");
      }

      setIsLoading(false);
    },
    [formData],
  );

  const resetStatus = useCallback(() => {
    setSubmitStatus("idle");
  }, []);

  return {
    formData,
    errors,
    isLoading,
    submitStatus,
    handleChange,
    handleSubmit,
    resetStatus,
  };
}
