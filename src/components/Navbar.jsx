import { Link } from 'react-router-dom';
import { CalendarDays, BarChart3 } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Serviços', href: '#services' },
  { label: 'Equipe', href: '#team' },
  { label: 'Contato', href: '#contact' },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-brand-900/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 text-white">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-slate-300">Barbearia</p>
            <p className="text-base font-semibold leading-none">Premium</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm transition-colors hover:text-danger">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            to="/admin-login"
            className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs sm:px-4 sm:py-2 sm:text-sm transition hover:border-danger hover:text-danger"
          >
            <BarChart3 className="h-4 w-4" />
            <span>Admin</span>
          </Link>
          <Link
            to="/booking"
            className="inline-flex items-center gap-1 rounded-full bg-danger px-3 py-2 text-xs font-semibold text-white shadow-soft transition hover:bg-[#b01f1f] sm:px-4 sm:py-2 sm:text-sm"
          >
            <CalendarDays className="h-4 w-4" />
            <span>Agendar</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
