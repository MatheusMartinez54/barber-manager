import { Link } from 'react-router-dom';

export function BarberCard({ barber }) {
  return (
    <article className="group rounded-[24px] border border-white/10 bg-[#171717] p-3 transition duration-200 hover:-translate-y-0.5 hover:border-white/20">
      <div className="relative overflow-hidden rounded-[20px]">
        {barber.photo ? (
          <img
            src={barber.photo}
            alt={barber.name}
            className="h-64 w-full object-cover transition duration-300 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-64 w-full items-center justify-center bg-white/5 text-3xl font-semibold text-white">{barber.name.charAt(0)}</div>
        )}

        <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
          ★ {barber.rating}
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-white">{barber.name}</h3>
          <p className="mt-1 text-sm text-slate-300">{barber.role}</p>
        </div>

        <Link
          to="/booking"
          aria-label={`Agendar com ${barber.name}`}
          className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-[#d62828] px-4 py-2 text-xs font-semibold text-white transition hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d62828]"
        >
          Agendar
        </Link>
      </div>
    </article>
  );
}
