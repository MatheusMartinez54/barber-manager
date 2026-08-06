import { BarChart3, CalendarCheck } from 'lucide-react';
import { AppointmentCard } from '../components/AppointmentCard';

const schedule = [
  { id: 'a1', time: '09:00', client: 'Gabriel', service: 'Corte', status: 'Confirmado' },
  { id: 'a2', time: '11:00', client: 'Lucas', service: 'Barba', status: 'Confirmado' },
  { id: 'a3', time: '15:00', client: 'Marina', service: 'Pigmentação', status: 'Pendente' },
];

export function BarberDashboard() {
  return (
    <div className="space-y-8">
      <section className="card-surface rounded-[32px] border border-white/10 p-8 shadow-soft">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="text-sm uppercase tracking-[0.4em] text-slate-400">Agenda do barbeiro</span>
            <h1 className="mt-3 text-3xl font-semibold text-white">Sua semana de atendimentos</h1>
          </div>
          <div className="inline-flex items-center gap-3 rounded-full bg-white/5 px-4 py-3 text-sm text-slate-100">
            <CalendarCheck className="h-5 w-5 text-danger" /> 12 atendimentos hoje
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          {schedule.map((appointment) => (
            <AppointmentCard key={appointment.id} appointment={appointment} barberView />
          ))}
        </div>
        <div className="card-surface rounded-[32px] border border-white/10 p-8 shadow-soft">
          <h2 className="text-xl font-semibold text-white">Indicadores</h2>
          <div className="mt-6 space-y-4 text-slate-300">
            <div className="rounded-3xl bg-black/20 p-5">
              Atendimentos confirmados: <strong className="text-white">8</strong>
            </div>
            <div className="rounded-3xl bg-black/20 p-5">
              Faturamento hoje: <strong className="text-white">R$ 1.320</strong>
            </div>
            <div className="rounded-3xl bg-black/20 p-5">
              Clientes novos: <strong className="text-white">3</strong>
            </div>
          </div>
          <div className="mt-6 flex items-center gap-3 text-danger">
            <BarChart3 className="h-5 w-5" /> Painel de desempenho
          </div>
        </div>
      </section>
    </div>
  );
}
