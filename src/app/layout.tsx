import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "../styles/global.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Santiago Navarro - Desarrollador Web Full Stack",
    template: "%s | Santiago Navarro"
  },
  description: "Desarrollador web full stack especializado en React, Next.js, Node.js y TypeScript. Creo aplicaciones web modernas, escalables y con excelente UX. Disponible para proyectos freelance y colaboraciones.",
  keywords: [
    "desarrollador web",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "JavaScript",
    "full stack developer",
    "frontend developer",
    "backend developer",
    "freelance developer",
    "Tucumán",
    "Argentina"
  ],
  authors: [{ name: "Santiago Navarro", url: "https://santinavarro.dev" }],
  creator: "Santiago Navarro",
  publisher: "Santiago Navarro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://santinavarro.dev"),
  alternates: {
    canonical: "/",
    languages: {
      "es-ES": "/es",
      "en-US": "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://santinavarro.dev",
    siteName: "Santiago Navarro - Portfolio",
    title: "Santiago Navarro - Desarrollador Web Full Stack",
    description: "Desarrollador web full stack especializado en React, Next.js, Node.js y TypeScript. Creo aplicaciones web modernas y escalables.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Santiago Navarro - Desarrollador Web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Santiago Navarro - Desarrollador Web Full Stack",
    description: "Desarrollador web full stack especializado en React, Next.js, Node.js y TypeScript.",
    images: ["/images/twitter-image.jpg"],
    creator: "@santinavarro_dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var shouldBeDark = theme === 'dark' || (!theme && prefersDark);
                  
                  if (shouldBeDark) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <meta name="theme-color" content="#0f172a" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Santiago Navarro",
              "jobTitle": "Desarrollador Web Full Stack",
              "description": "Desarrollador web full stack especializado en React, Next.js, Node.js y TypeScript",
              "url": "https://santinavarro.dev",
              "image": "https://santinavarro.dev/images/profile.jpg",
              "sameAs": [
                "https://github.com/santinava06",
                "https://www.linkedin.com/in/santinavarro-dev/",
                "mailto:sncarp2003@gmail.com"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "San Miguel de Tucumán",
                "addressRegion": "Tucumán",
                "addressCountry": "AR"
              },
              "knowsAbout": [
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "JavaScript",
                "Tailwind CSS",
                "Web Development",
                "Frontend Development",
                "Backend Development"
              ],
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Universidad del Norte Santo Tomas de Aquino"
              }
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white transition-colors duration-300`}
      >
        <ParticlesBackground />
        <div className="relative z-10">
          <Header />
          <main className="pt-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}