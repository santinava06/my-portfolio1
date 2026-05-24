import { Clock, MessageSquare, Sparkles } from "lucide-react";
import { ContactInfo } from "@/features/contact/components/ContactInfo";
import { ContactForm } from "@/features/contact/components/ContactForm";
import { Card } from "@/shared/components/ui/Card";

const contactHighlights = [
  {
    icon: MessageSquare,
    title: "Contame la idea",
    text: "Producto, landing, dashboard, automatizacion o mejora de una app existente.",
  },
  {
    icon: Sparkles,
    title: "Definimos alcance",
    text: "Te ayudo a ordenar objetivos, funcionalidades y una primera version viable.",
  },
  {
    icon: Clock,
    title: "Respuesta rapida",
    text: "Normalmente respondo dentro de las proximas 24 horas.",
  },
];

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden pt-28 pb-20 px-4 sm:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_10%,rgba(0,113,227,0.12),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0)_42%)]" />

      <div className="mx-auto max-w-6xl">
        <div className="mb-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="animate-reveal">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/60">
              <span className="h-1.5 w-1.5 rounded-full bg-[#34c759] animate-pulse" />
              Disponible para nuevos proyectos
            </div>
            <h1 className="mt-6 max-w-3xl text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
              Hablemos de lo que queres construir.
            </h1>
            <p className="mt-5 max-w-2xl text-base sm:text-lg text-white/50 leading-relaxed">
              Si tenes una idea, un proceso para automatizar o una interfaz que
              necesita mejorar, escribime con el contexto y vemos la mejor forma
              de convertirlo en algo usable.
            </p>
          </div>

          <div className="grid gap-3 animate-reveal" style={{ animationDelay: "0.1s" }}>
            {contactHighlights.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-[#2997ff]">
                  <Icon size={18} />
                </span>
                <div>
                  <h2 className="text-sm font-semibold text-white">{title}</h2>
                  <p className="mt-1 text-sm leading-relaxed text-white/45">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] items-start">
          <div className="animate-reveal" style={{ animationDelay: "0.15s" }}>
            <ContactInfo />
          </div>
          <div className="animate-reveal" style={{ animationDelay: "0.2s" }}>
            <Card variant="glass" className="p-6 sm:p-8">
              <ContactForm />
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
