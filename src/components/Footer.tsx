import Link from "next/link";
import { GitHubIcon, LinkedInIcon, EmailIcon } from "./icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { href: "https://github.com/santinava06", label: "GitHub", icon: GitHubIcon },
    { href: "https://www.linkedin.com/in/santinavarro-dev/", label: "LinkedIn", icon: LinkedInIcon },
    { href: "mailto:sncarp2003@gmail.com", label: "Email", icon: EmailIcon },
  ];

  return (
    <footer className="bg-gradient-to-t from-black/90 via-gray-900/80 to-transparent backdrop-blur-xl border-t border-white/20 dark:border-gray-700 animate-fade-in">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo y copyright */}
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary dark:text-primary-light">Santiago Navarro</span>
            <span className="text-accent">•</span>
            <span className="text-gray-600 dark:text-gray-400 text-sm">
              © {currentYear} Todos los derechos reservados
            </span>
          </div>

          {/* Enlaces sociales */}
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-smooth hover:scale-110"
                style={{ animationDelay: `${index * 0.1}s` }}
                title={link.label}
              >
                <link.icon size={24} className="w-6 h-6" />
              </Link>
            ))}
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-500 dark:text-gray-500 text-sm">
            Hecho usando Next.js y Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
} 