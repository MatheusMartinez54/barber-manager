import { Link } from 'react-router-dom';

export function ServiceCard({ service }) {
  return (
    <article className="group overflow-hidden rounded-[20px] border border-white/6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="h-44 w-full overflow-hidden rounded-t-[20px] bg-black/10">
        {service.image ? (
          <img
            src={service.image}
            alt={service.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full bg-white/5" />
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">{service.title}</h3>
          <span className="text-sm font-semibold text-danger">{service.price}</span>
        </div>

        <p className="mt-3 text-sm text-slate-300">{service.description}</p>

        <div className="mt-6 flex items-center justify-between">
          <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">{service.duration}</span>
          <Link
            to="/booking"
            className="inline-flex items-center gap-2 rounded-full bg-danger px-4 py-2 text-xs font-semibold text-white transition hover:scale-105"
          >
            Agendar
          </Link>
        </div>
      </div>
    </article>
  );
}
