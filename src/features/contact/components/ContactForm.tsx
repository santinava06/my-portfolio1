"use client";

import { useContactForm } from "@/features/contact/hooks/useContactForm";
import { Input } from "@/shared/components/ui/Input";
import { Textarea } from "@/shared/components/ui/Textarea";
import { Button } from "@/shared/components/ui/Button";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export function ContactForm() {
  const { formData, errors, isLoading, submitStatus, handleChange, handleSubmit } =
    useContactForm();

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <h3 className="text-xl font-semibold text-white">
          Enviame un mensaje
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-white/45">
          Cuanto mas contexto me des, mejor puedo ayudarte: objetivo,
          funcionalidades, plazos o referencias.
        </p>
      </div>

      {submitStatus === "success" && (
        <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#34c759]/10 border border-[#34c759]/20 animate-reveal-fast">
          <CheckCircle size={18} className="text-[#34c759] mt-0.5 shrink-0" />
          <div>
            <p className="text-sm font-medium text-[#34c759]">Mensaje enviado</p>
            <p className="text-xs text-[#34c759]/60 mt-1">
              Te respondere en las proximas 24 horas.
            </p>
          </div>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="flex items-start gap-3 p-4 rounded-2xl bg-red-500/10 border border-red-500/20 animate-reveal-fast">
          <AlertCircle size={18} className="text-red-400 mt-0.5 shrink-0" />
          <div>
            <p className="text-sm font-medium text-red-400">Error al enviar</p>
            <p className="text-xs text-red-400/60 mt-1">
              Intenta de nuevo o escribime directamente a{" "}
              <a href="mailto:sncarp2003@gmail.com" className="underline">
                sncarp2003@gmail.com
              </a>
            </p>
          </div>
        </div>
      )}

      <Input
        name="name"
        label="Nombre"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
        required
      />

      <Input
        name="email"
        label="Email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        required
      />

      <Input
        name="subject"
        label="Tipo de proyecto"
        value={formData.subject}
        onChange={handleChange}
        error={errors.subject}
        required
      />

      <Textarea
        name="message"
        label="Contexto del proyecto"
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
        rows={5}
        required
      />

      <Button
        type="submit"
        isLoading={isLoading}
        size="lg"
        className="w-full"
        rightIcon={!isLoading ? <Send size={14} /> : undefined}
      >
        Enviar mensaje
      </Button>
    </form>
  );
}
