export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-900/95 py-8 text-sm text-slate-400">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="font-semibold text-white">Barbearia Premium</p>
          <p>Um sistema moderno de agendamento e gestão para barbearias profissionais.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a href="#contact" className="transition hover:text-white">Contato</a>
          <a href="https://wa.me/5511999999999" className="transition hover:text-white">WhatsApp</a>
          <a href="https://instagram.com" className="transition hover:text-white">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
