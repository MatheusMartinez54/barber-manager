import { Link } from 'react-router-dom';

export function ServiceCard({ service }) {
  return (
    <article className="group flex h-full flex-col rounded-[24px] border border-white/10 bg-[#171717] p-5 transition duration-200 hover:-translate-y-0.5 hover:border-white/20">
      <div className="flex items-center justify-between gap-3">
        <span className="text-[10px] uppercase tracking-[0.28em] text-slate-400">Serviço</span>
        <span className="text-sm font-semibold text-[#f87171]">{service.price}</span>
      </div>

      <div className="mt-5 flex flex-1 flex-col">
        <h3 className="text-xl font-semibold text-white">{service.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-300">{service.description}</p>

        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
          <span className="text-xs uppercase tracking-[0.2em] text-slate-400">{service.duration}</span>
          <Link
            to="/booking"
            aria-label={`Selecionar serviço ${service.title}`}
            className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-[#d62828] px-4 py-2 text-xs font-semibold text-white transition hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d62828]"
          >
            Selecionar
          </Link>
        </div>
      </div>
    </article>
  );
}
