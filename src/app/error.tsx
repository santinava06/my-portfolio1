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
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <div className="text-6xl mb-4">🚨</div>
          <h1 className="text-3xl font-bold text-white mb-4">
            ¡Ups! Algo salió mal
          </h1>
          <p className="text-gray-300 mb-6">
            Parece que hubo un error inesperado. No te preocupes, estos errores son temporales.
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={reset}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
          >
            Intentar de nuevo
          </button>
          
          <Link
            href="/"
            className="block w-full border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center"
          >
            Volver al inicio
          </Link>
        </div>

        <div className="mt-8 p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
          <p className="text-red-300 text-sm">
            <strong>Error ID:</strong> {error.digest || 'N/A'}
          </p>
        </div>
      </div>
    </div>
  );
}
