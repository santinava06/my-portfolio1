import { Spinner } from "@/shared/components/ui/Spinner";

export default function GlobalLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <Spinner size="lg" className="mx-auto" />
        <p className="text-sm text-white/40">Cargando...</p>
      </div>
    </div>
  );
}
