"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Inicio" },
    { href: "/about", label: "Sobre mí" },
    { href: "/projects", label: "Proyectos" },
    { href: "/contact", label: "Contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-gradient-to-b from-black/90 via-gray-900/80 to-transparent border-b border-white/20 dark:border-gray-800/50 animate-fade-in">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Nombre con foto */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-blue-400/30 dark:border-blue-300/30 shadow-lg">
              <Image
                src="/images/profile.jpg"
                alt="SantiDev Profile"
                fill
                className="object-cover"
              />
            </div>
            
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 animate-slide-in-right">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-300 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-400 transition-all duration-300 relative group font-medium"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-400 focus:outline-none transition-all duration-300 hover:bg-white/10"
          >
            <svg className="h-6 w-6 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/20 dark:border-gray-800/50 animate-fade-in backdrop-blur-xl bg-gradient-to-b from-black/90 via-gray-900/80 to-transparent">
            <div className="flex flex-col space-y-4 animate-stagger">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-300 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-400 transition-all duration-300 font-medium px-4 py-2 rounded-lg hover:bg-white/10"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
} 