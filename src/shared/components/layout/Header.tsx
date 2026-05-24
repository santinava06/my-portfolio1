"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Sun, Moon, X } from "lucide-react";
import { navItems } from "@/config/navigation";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/cn";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
          scrolled
            ? "glass bg-black/50 shadow-lg shadow-black/10"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link
              href="/"
              className="flex items-center gap-3 group select-none"
            >
              <div className="relative w-8 h-8 md:w-9 md:h-9 rounded-full overflow-hidden ring-2 ring-white/20 transition-all duration-300 group-hover:ring-blue-400/50">
                <Image
                  src="/images/profile.jpg"
                  alt="Santiago Navarro"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <span className="hidden sm:inline text-sm font-semibold text-white/90 tracking-tight">
                Santiago Navarro
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200",
                      isActive
                        ? "text-white bg-white/10"
                        : "text-white/60 hover:text-white hover:bg-white/5",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="relative w-9 h-9 flex items-center justify-center rounded-full text-white/60 hover:text-white hover:bg-white/5 transition-all duration-200 active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/40"
                title={isDark ? "Modo claro" : "Modo oscuro"}
              >
                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out" style={{ transform: isDark ? "rotate(0deg)" : "rotate(90deg)" }}>
                  <Sun size={18} />
                </div>
                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out" style={{ transform: isDark ? "rotate(-90deg)" : "rotate(0deg)" }}>
                  <Moon size={18} />
                </div>
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden relative w-9 h-9 flex items-center justify-center rounded-full text-white/60 hover:text-white hover:bg-white/5 transition-all duration-200 active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/40"
                aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              >
                <div className="absolute inset-0 flex items-center justify-center transition-all duration-300" style={{ opacity: isMenuOpen ? 0 : 1, transform: isMenuOpen ? "rotate(90deg)" : "rotate(0deg)" }}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </div>
                <div className="absolute inset-0 flex items-center justify-center transition-all duration-300" style={{ opacity: isMenuOpen ? 1 : 0, transform: isMenuOpen ? "rotate(0deg)" : "rotate(-90deg)" }}>
                  <X size={20} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-500 ease-out",
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500",
            isMenuOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setIsMenuOpen(false)}
        />
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 bg-black/90 backdrop-blur-2xl rounded-t-3xl border-t border-white/10 transition-all duration-500 ease-out",
            isMenuOpen ? "translate-y-0" : "translate-y-full",
          )}
        >
          <div className="px-6 pt-8 pb-10">
            <nav className="flex flex-col gap-1">
              {navItems.map((item, i) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center h-12 px-4 text-base font-medium rounded-2xl transition-all duration-300",
                      "animate-reveal-fast",
                      isActive
                        ? "text-white bg-white/10"
                        : "text-white/60 hover:text-white hover:bg-white/5",
                    )}
                    style={{ animationDelay: `${i * 0.05}s` }}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
