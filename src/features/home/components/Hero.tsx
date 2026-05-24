import Link from "next/link";
import { ArrowRight, Code2, Layers3, Rocket, Sparkles } from "lucide-react";

const highlights = [
  { value: "6+", label: "proyectos en produccion" },
  { value: "Full-stack", label: "frontend, backend y datos" },
  { value: "UX", label: "interfaces claras y usables" },
];

const focusAreas = [
  {
    icon: Layers3,
    title: "Productos web",
    text: "Apps, dashboards y plataformas con flujos completos.",
  },
  {
    icon: Code2,
    title: "Arquitectura",
    text: "Estructura por features, APIs y bases listas para crecer.",
  },
  {
    icon: Sparkles,
    title: "Automatizacion",
    text: "Procesos repetitivos convertidos en herramientas utiles.",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-4 pt-28 pb-12 sm:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(0,113,227,0.18),transparent_30%),radial-gradient(circle_at_18%_75%,rgba(52,199,89,0.08),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0)_58%)]" />
      <div className="absolute right-[-12rem] top-24 hidden h-[36rem] w-[36rem] rounded-full border border-white/10 bg-white/[0.025] blur-2xl lg:block" />
      <div className="absolute bottom-[-18rem] left-1/2 h-[32rem] w-[48rem] -translate-x-1/2 rounded-full bg-[#0071e3]/5 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-10rem)] max-w-7xl flex-col justify-center">
        <div className="max-w-4xl">
          <div className="animate-reveal" style={{ animationDelay: "0.1s" }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/65">
              <span className="h-1.5 w-1.5 rounded-full bg-[#34c759] animate-pulse" />
              Disponible para proyectos freelance y colaboraciones
            </div>
          </div>

          <h1
            className="mt-8 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
          >
            Desarrollo productos web modernos, escalables y pensados para usuarios reales.
          </h1>

          <p
            className="mt-6 max-w-2xl text-lg leading-relaxed text-white/55 sm:text-xl"
          >
            Soy Santiago Navarro. Construyo aplicaciones con React, Next.js,
            Node.js y TypeScript, combinando UI, UX, backend y arquitectura para
            transformar ideas en experiencias funcionales.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/projects"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0071e3] px-8 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition-all duration-200 hover:bg-[#0077ed] active:scale-[0.97]"
            >
              Ver proyectos
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 px-8 text-sm font-medium text-white/70 transition-all duration-200 hover:bg-white/5 hover:text-white active:scale-[0.97]"
            >
              Hablemos
              <Rocket size={15} />
            </Link>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-sm"
              >
                <p className="text-lg font-semibold text-white">{item.value}</p>
                <p className="mt-1 text-sm leading-snug text-white/45">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-3 lg:grid-cols-3">
          {focusAreas.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="flex gap-4 rounded-2xl border border-white/10 bg-black/25 p-5 backdrop-blur-sm"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-[#2997ff]">
                <Icon size={19} />
              </span>
              <div>
                <h2 className="text-sm font-semibold text-white">{title}</h2>
                <p className="mt-1 text-sm leading-relaxed text-white/45">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
