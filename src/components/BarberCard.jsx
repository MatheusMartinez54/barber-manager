import { Link } from 'react-router-dom';

export function BarberCard({ barber }) {
  return (
    <article className="card-surface rounded-[32px] border border-white/10 p-6 shadow-soft transition hover:-translate-y-1 hover:border-danger">
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/10 text-xl font-semibold text-white">
          {barber.name.charAt(0)}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">{barber.name}</h3>
          <p className="text-sm text-slate-400">{barber.role}</p>
        </div>
      </div>
      <div className="mt-6 space-y-3 text-slate-300">
        <p>Experiência: {barber.experience}</p>
        <p>Avaliação: {barber.rating} ✦</p>
      </div>
      <Link
        to="/booking"
        className="mt-6 inline-flex items-center rounded-full bg-danger px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#b01f1f]"
      >
        Agendar
      </Link>
    </article>
  );
}
