import { useBookings } from '../contexts/BookingContext';
import { useNavigate } from 'react-router-dom';
import { LogOut, Check, X } from 'lucide-react';
import toast from 'react-hot-toast';
import dayjs from 'dayjs';

export function AdminDashboard() {
  const { bookings, updateBooking, deleteBooking } = useBookings();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('admin_logged');
    toast.success('Desconectado do painel');
    navigate('/');
  };

  const handleApprove = (id) => {
    updateBooking(id, { status: 'Confirmado' });
    toast.success('Agendamento confirmado');
  };

  const handleCancel = (id) => {
    updateBooking(id, { status: 'Cancelado' });
    toast.error('Agendamento cancelado');
  };

  const handleDelete = (id) => {
    deleteBooking(id);
    toast('Agendamento removido', { icon: '🗑️' });
  };

  const totalRevenue = bookings.reduce((sum, b) => {
    const price = parseFloat(b.selectedService.price.replace('R$ ', '').replace(',', '.'));
    return sum + price;
  }, 0);

  const pendingCount = bookings.filter((b) => b.status === 'Pendente').length;
  const confirmedCount = bookings.filter((b) => b.status === 'Confirmado').length;

  return (
    <div className="space-y-8">
      <section className="flex items-center justify-between rounded-[32px] border border-white/10 bg-surface p-8 shadow-soft">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Painel administrativo</p>
          <h1 className="mt-2 text-3xl font-semibold text-white">Gerenciar agendamentos</h1>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 rounded-full bg-danger/15 px-5 py-3 text-sm font-semibold text-danger transition hover:bg-danger/25"
        >
          <LogOut className="h-4 w-4" /> Sair
        </button>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[
          { title: 'Total de agendamentos', value: bookings.length },
          { title: 'Confirmados', value: confirmedCount },
          { title: 'Pendentes', value: pendingCount },
          { title: 'Faturamento', value: `R$ ${totalRevenue.toFixed(2).replace('.', ',')}` },
        ].map((card) => (
          <div key={card.title} className="card-surface rounded-[32px] border border-white/10 p-6 shadow-soft">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">{card.title}</p>
            <p className="mt-4 text-3xl font-semibold text-white">{card.value}</p>
          </div>
        ))}
      </section>

      <section className="rounded-[32px] border border-white/10 bg-surface p-8 shadow-soft">
        <h2 className="text-2xl font-semibold text-white">Todos os agendamentos</h2>
        {bookings.length === 0 ? (
          <div className="mt-8 rounded-3xl border border-dashed border-white/20 p-8 text-center text-slate-300">
            Nenhum agendamento realizado ainda. Aguardando primeiros clientes...
          </div>
        ) : (
          <div className="mt-6 space-y-4">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className={`rounded-3xl border p-6 transition ${
                  booking.status === 'Cancelado' ? 'border-white/10 bg-black/40 opacity-60' : 'border-white/10 bg-black/20 hover:border-danger'
                }`}
              >
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Cliente</p>
                    <p className="mt-1 font-semibold text-white">{booking.clientName}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Serviço</p>
                    <p className="mt-1 font-semibold text-white">{booking.selectedService.title}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Barbeiro</p>
                    <p className="mt-1 font-semibold text-white">{booking.selectedBarber.name}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Data/Hora</p>
                    <p className="mt-1 font-semibold text-white">
                      {dayjs(booking.selectedDate).format('DD/MM')} {booking.selectedTime}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Valor</p>
                    <p className="mt-1 font-semibold text-danger">{booking.selectedService.price}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Status</p>
                    <span
                      className={`mt-1 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                        booking.status === 'Confirmado'
                          ? 'bg-emerald-500/20 text-emerald-400'
                          : booking.status === 'Cancelado'
                            ? 'bg-red-500/20 text-red-400'
                            : 'bg-yellow-500/20 text-yellow-400'
                      }`}
                    >
                      {booking.status}
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {booking.status !== 'Confirmado' && booking.status !== 'Cancelado' && (
                    <button
                      onClick={() => handleApprove(booking.id)}
                      className="flex items-center gap-1 rounded-full bg-emerald-500/20 px-4 py-2 text-xs font-semibold text-emerald-400 transition hover:bg-emerald-500/30"
                    >
                      <Check className="h-3 w-3" /> Confirmar
                    </button>
                  )}
                  {booking.status !== 'Cancelado' && (
                    <button
                      onClick={() => handleCancel(booking.id)}
                      className="flex items-center gap-1 rounded-full bg-red-500/20 px-4 py-2 text-xs font-semibold text-red-400 transition hover:bg-red-500/30"
                    >
                      <X className="h-3 w-3" /> Cancelar
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(booking.id)}
                    className="flex items-center gap-1 rounded-full bg-white/5 px-4 py-2 text-xs font-semibold text-slate-300 transition hover:bg-white/10"
                  >
                    Remover
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
