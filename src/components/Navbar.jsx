import { Link } from 'react-router-dom';
import { CalendarDays } from 'lucide-react';

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#121212]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-2 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d62828]"
          aria-label="Ir para a página inicial"
        >
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-slate-300">Barber</span>
          <span className="text-sm font-semibold">Manager</span>
        </Link>

        <Link
          to="/booking"
          className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[#d62828] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d62828]"
        >
          <CalendarDays className="h-4 w-4" />
          Agendar
        </Link>
      </div>
    </header>
  );
}
