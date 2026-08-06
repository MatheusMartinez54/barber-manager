export function AppointmentCard({ appointment, barberView }) {
  return (
    <article className="card-surface rounded-[32px] border border-white/10 p-6 shadow-soft transition hover:-translate-y-1">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">{appointment.service}</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">{barberView ? appointment.client : appointment.barber}</h3>
        </div>
        <span className="rounded-full bg-white/5 px-4 py-2 text-sm text-slate-200">{appointment.status}</span>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl bg-black/20 p-4">
          <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Data</p>
          <p className="mt-2 font-medium text-white">{appointment.date || '24/08/2026'}</p>
        </div>
        <div className="rounded-3xl bg-black/20 p-4">
          <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Hora</p>
          <p className="mt-2 font-medium text-white">{appointment.time || '14:00'}</p>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <button className="rounded-full bg-white/5 px-5 py-3 text-sm text-slate-100 transition hover:bg-white/10">Detalhes</button>
        <button className="rounded-full border border-white/10 px-5 py-3 text-sm text-slate-100 transition hover:border-danger">Cancelar</button>
      </div>
    </article>
  );
}
