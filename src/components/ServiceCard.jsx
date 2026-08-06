import { Link } from 'react-router-dom';

export function ServiceCard({ service }) {
  return (
    <article className="card-surface rounded-[32px] border border-white/10 p-6 shadow-soft transition hover:-translate-y-1 hover:border-danger">
      <div className="flex items-center justify-between gap-4 mb-4">
        <span className="rounded-full bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.35em] text-slate-300">{service.duration}</span>
        <span className="text-sm font-semibold text-danger">{service.price}</span>
      </div>
      <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
      <p className="mt-3 text-slate-300">{service.description}</p>
      <Link to="/booking" className="mt-6 inline-flex items-center rounded-full bg-danger px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#b01f1f]">Agendar</Link>
    </article>
  );
}
