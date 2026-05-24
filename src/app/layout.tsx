import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "../styles/global.css";
import Header from "@/shared/components/layout/Header";
import Footer from "@/shared/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Santiago Navarro - Desarrollador Web Full Stack",
    template: "%s | Santiago Navarro",
  },
  description:
    "Desarrollador web full stack especializado en React, Next.js, Node.js y TypeScript.",
  authors: [{ name: "Santiago Navarro", url: "https://santinavarro.dev" }],
  metadataBase: new URL("https://santinavarro.dev"),
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://santinavarro.dev",
    siteName: "Santiago Navarro - Portfolio",
    title: "Santiago Navarro - Desarrollador Web Full Stack",
    description:
      "Desarrollador web full stack especializado en React, Next.js, Node.js y TypeScript.",
    images: [
      {
        url: "/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Santiago Navarro - Desarrollador Web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Santiago Navarro - Desarrollador Web Full Stack",
    description:
      "Desarrollador web full stack especializado en React, Next.js, Node.js y TypeScript.",
    images: ["/images/twitter-image.svg"],
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
                  if (theme === 'dark' || (!theme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#f5f5f7" media="(prefers-color-scheme: light)" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-black text-white`}
      >
        <div className="fixed inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10 pointer-events-none" />
        <div className="fixed top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/3 rounded-full blur-3xl pointer-events-none" />
        <div className="fixed bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/3 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
