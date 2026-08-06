import { AppointmentCard } from '../components/AppointmentCard';
import { Button } from '../components/Button';

const appointments = [
  { id: '1', service: 'Corte + Barba', barber: 'Leonardo', date: '24/08/2026', time: '14:00', status: 'Confirmado' },
  { id: '2', service: 'Hidratação', barber: 'Marcos', date: '30/08/2026', time: '16:30', status: 'Pendente' }
];

export function ClientDashboard() {
  return (
    <div className="space-y-8">
      <section className="card-surface rounded-[32px] border border-white/10 p-8 shadow-soft">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="text-sm uppercase tracking-[0.4em] text-slate-400">Minha agenda</span>
            <h1 className="mt-3 text-3xl font-semibold text-white">Seus agendamentos ativos</h1>
          </div>
          <a href="/booking" className="inline-flex items-center rounded-full bg-danger px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#b01f1f]">Agendar novo serviço</a>
        </div>
      </section>
      <section className="grid gap-6 md:grid-cols-2">
        {appointments.map(appointment => (
          <AppointmentCard key={appointment.id} appointment={appointment} />
        ))}
      </section>
    </div>
  );
}
