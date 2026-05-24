"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-sm">
        <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-6">
          <span className="text-red-400 text-xl">!</span>
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">
          Algo salió mal
        </h1>
        <p className="text-sm text-white/50 mb-8">
          Parece que hubo un error inesperado. Estos errores suelen ser
          temporales.
        </p>
        <div className="space-y-3">
          <button
            onClick={reset}
            className="w-full h-10 rounded-full bg-[#0071e3] text-white text-sm font-medium hover:bg-[#0077ed] transition-all duration-200 active:scale-[0.97]"
          >
            Intentar de nuevo
          </button>
          <Link
            href="/"
            className="block w-full h-10 leading-10 rounded-full border border-white/10 text-white/60 text-sm font-medium hover:text-white hover:border-white/20 transition-all duration-200 text-center"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
