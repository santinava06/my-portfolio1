import Link from "next/link";
import { GitHubIcon, LinkedInIcon, EmailIcon } from "@/components/icons";

const socialLinks = [
  {
    href: "https://github.com/santinava06",
    label: "GitHub",
    icon: GitHubIcon,
  },
  {
    href: "https://www.linkedin.com/in/santinavarro-dev/",
    label: "LinkedIn",
    icon: LinkedInIcon,
  },
  {
    href: "mailto:santnavarro08@gmail.com",
    label: "Email",
    icon: EmailIcon,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-8">
          <p className="text-sm text-white/40">
            &copy; {currentYear} Santiago Navarro
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white/80 transition-all duration-200 hover:scale-110 active:scale-95"
                title={link.label}
              >
                <link.icon size={20} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
