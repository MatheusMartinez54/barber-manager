import { Link } from 'react-router-dom';

export function BarberCard({ barber }) {
  return (
    <article className="group overflow-hidden rounded-[20px] border border-white/6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-56 w-full overflow-hidden">
        {barber.photo ? (
          <img src={barber.photo} alt={barber.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
        ) : (
          <div className="h-full w-full bg-white/5 flex items-center justify-center text-2xl">{barber.name.charAt(0)}</div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-white">{barber.name}</h3>
        <p className="text-sm text-slate-400">{barber.role}</p>
        <div className="mt-4 flex items-center justify-between text-sm text-slate-300">
          <span>{barber.experience}</span>
          <span>⭐ {barber.rating}</span>
        </div>
        <div className="mt-6 flex justify-end">
          <Link
            to="/booking"
            className="inline-flex items-center gap-2 rounded-full bg-danger px-4 py-2 text-sm font-semibold text-white transition hover:scale-105"
          >
            Agendar
          </Link>
        </div>
      </div>
    </article>
  );
}
