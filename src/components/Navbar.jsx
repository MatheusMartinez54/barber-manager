import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { Menu, CalendarDays, BarChart3 } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Serviços', href: '#services' },
  { label: 'Equipe', href: '#team' },
  { label: 'Contato', href: '#contact' }
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-brand-900/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 text-white">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-danger text-white shadow-softDark">
            <Menu className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-300">Barbearia</p>
            <p className="text-lg font-semibold">Premium</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map(item => (
            <a key={item.label} href={item.href} className="transition-colors hover:text-danger">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link to="/admin-login" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm transition hover:border-danger hover:text-danger">
            <BarChart3 className="h-4 w-4" /> Admin
          </Link>
          <Link to="/booking" className="inline-flex items-center gap-2 rounded-full bg-danger px-4 py-2 text-sm font-semibold text-white shadow-soft hover:bg-[#b01f1f]">
            <CalendarDays className="h-4 w-4" /> Agendar Agora
          </Link>
        </div>
      </div>
    </header>
  );
}
