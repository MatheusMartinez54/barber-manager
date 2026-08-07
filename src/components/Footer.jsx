export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#121212] py-8 text-sm text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="font-semibold text-white">Barber Manager</p>
          <p className="mt-1">Agendamento simples, rápido e profissional.</p>
        </div>

        <div className="flex flex-wrap gap-4 text-slate-300">
          <a href="#services" className="transition hover:text-white">
            Serviços
          </a>
          <a href="#team" className="transition hover:text-white">
            Equipe
          </a>
          <a href="#location" className="transition hover:text-white">
            Localização
          </a>
        </div>
      </div>
    </footer>
  );
}
