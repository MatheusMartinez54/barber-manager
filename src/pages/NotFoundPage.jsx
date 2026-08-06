import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center justify-center rounded-[32px] border border-white/10 bg-surface p-12 text-center shadow-soft">
      <p className="text-sm uppercase tracking-[0.4em] text-slate-400">404</p>
      <h1 className="mt-4 text-4xl font-semibold text-white">Página não encontrada</h1>
      <p className="mt-4 max-w-xl text-slate-300">A rota que você tentou acessar não existe ou foi movida. Volte para a página inicial e continue agendando.</p>
      <Link to="/" className="mt-8 inline-flex rounded-full bg-danger px-6 py-3 text-sm font-semibold text-white hover:bg-[#b01f1f]">Voltar ao Início</Link>
    </div>
  );
}
