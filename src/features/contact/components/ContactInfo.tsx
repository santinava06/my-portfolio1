import { Mail, MapPin, Timer } from "lucide-react";
import { Card } from "@/shared/components/ui/Card";
import { LinkedInIcon, GitHubIcon } from "@/components/icons";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "santnavarro08@gmail.com",
    href: "mailto:santnavarro08@gmail.com",
  },
  {
    icon: MapPin,
    label: "Ubicacion",
    value: "San Miguel de Tucuman, Argentina",
  },
  {
    icon: (props: { size?: number; className?: string }) => (
      <LinkedInIcon size={props.size ?? 14} className={props.className} />
    ),
    label: "LinkedIn",
    value: "santinavarro-dev",
    href: "https://www.linkedin.com/in/santinavarro-dev/",
  },
  {
    icon: (props: { size?: number; className?: string }) => (
      <GitHubIcon size={props.size ?? 14} className={props.className} />
    ),
    label: "GitHub",
    value: "santinava06",
    href: "https://github.com/santinava06",
  },
];

export function ContactInfo() {
  return (
    <div className="space-y-5">
      <Card variant="glass" className="p-6">
        <h3 className="text-sm font-medium text-white/40 uppercase tracking-wider mb-2">
          Contacto directo
        </h3>
        <p className="mb-6 text-sm leading-relaxed text-white/45">
          Para consultas rapidas, escribime por email o LinkedIn. Para proyectos,
          el formulario me ayuda a entender mejor el contexto.
        </p>
        <div className="space-y-4">
          {contactDetails.map((detail) => (
            <div key={detail.label} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                <detail.icon size={15} className="text-white/45" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-white/40">{detail.label}</p>
                {detail.href ? (
                  <a
                    href={detail.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block truncate text-sm text-white/80 hover:text-blue-400 transition-colors"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <p className="text-sm text-white/80">{detail.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card variant="glass" className="p-6">
        <div className="flex items-start gap-3">
          <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#34c759]/10">
            <Timer size={16} className="text-[#34c759]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#34c759] animate-pulse" />
              <span className="text-sm font-medium text-white/80">
                Disponible para proyectos freelance
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-white/45">
              Ideal para landing pages, dashboards, MVPs, mejoras de UI y
              automatizaciones web.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
