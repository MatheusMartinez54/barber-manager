import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { services, team } from '../utils/constants';
import { useBookings } from '../contexts/BookingContext';
import toast from 'react-hot-toast';
import dayjs from 'dayjs';

const timeSlots = ['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00'];

export function BookingPage() {
  const navigate = useNavigate();
  const { addBooking } = useBookings();
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedBarber, setSelectedBarber] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const { register, handleSubmit } = useForm();

  const handleClientData = (values) => {
    addBooking({
      selectedService,
      selectedBarber,
      selectedDate,
      selectedTime,
      clientName: values.name,
      clientPhone: values.phone,
      clientEmail: values.email,
    });
    toast.success('Agendamento realizado com sucesso!');
    navigate('/success');
  };

  const getMinDate = () => dayjs().add(1, 'day').format('YYYY-MM-DD');
  const progress = ((step - 1) / 3) * 100;

  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="rounded-[28px] border border-white/10 bg-[#171717] p-4 sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <p className="text-[10px] uppercase tracking-[0.35em] text-slate-400">Passo {step} de 4</p>
          <button
            type="button"
            onClick={() => (step > 1 ? setStep(step - 1) : navigate('/'))}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d62828]"
            aria-label="Voltar ao passo anterior"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-white/5">
          <div className="h-full rounded-full bg-[#d62828] transition-all duration-300" style={{ width: `${progress}%` }} />
        </div>

        <h1 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
          {step === 1 && 'Escolha o serviço'}
          {step === 2 && 'Escolha o barbeiro'}
          {step === 3 && 'Escolha data e hora'}
          {step === 4 && 'Confirme seus dados'}
        </h1>
      </div>

      {step === 1 && (
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <button
              key={service.id}
              type="button"
              onClick={() => {
                setSelectedService(service);
                setStep(2);
              }}
              className={`rounded-[24px] border p-5 text-left transition ${
                selectedService?.id === service.id ? 'border-[#d62828] bg-[#2a1414]' : 'border-white/10 bg-[#171717] hover:border-white/20'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{service.description}</p>
                </div>
                <span className="whitespace-nowrap rounded-full bg-[#d62828]/10 px-2.5 py-1 text-xs font-semibold text-[#fca5a5]">
                  {service.price}
                </span>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400">{service.duration}</span>
                <span className="text-sm font-medium text-white">Selecionar</span>
              </div>
            </button>
          ))}
        </div>
      )}

      {step === 2 && selectedService && (
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {team.map((barber) => (
            <button
              key={barber.id}
              type="button"
              onClick={() => {
                setSelectedBarber(barber);
                setStep(3);
              }}
              className={`rounded-[24px] border p-4 text-left transition ${
                selectedBarber?.id === barber.id ? 'border-[#d62828] bg-[#2a1414]' : 'border-white/10 bg-[#171717] hover:border-white/20'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-[18px] bg-white/5 text-lg font-semibold text-white">
                  {barber.photo ? (
                    <img src={barber.photo} alt={barber.name} className="h-full w-full object-cover" loading="lazy" />
                  ) : (
                    barber.name.charAt(0)
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{barber.name}</h3>
                  <p className="text-sm text-slate-300">{barber.role}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">★ {barber.rating}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {step === 3 && selectedService && selectedBarber && (
        <div className="mt-6 space-y-5">
          <div className="rounded-[24px] border border-white/10 bg-[#171717] p-4 sm:p-5">
            <label className="block space-y-3">
              <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-slate-400">
                <Calendar className="h-4 w-4 text-[#d62828]" /> Data
              </span>
              <input
                type="date"
                min={getMinDate()}
                value={selectedDate || ''}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-[#d62828]"
              />
            </label>
          </div>

          {selectedDate && (
            <div className="rounded-[24px] border border-white/10 bg-[#171717] p-4 sm:p-5">
              <p className="mb-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-slate-400">
                <Clock className="h-4 w-4 text-[#d62828]" /> Horários disponíveis
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`rounded-full py-3 text-sm font-medium transition ${
                      selectedTime === time ? 'bg-[#d62828] text-white' : 'border border-white/10 bg-white/5 text-white hover:border-white/25'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          )}

          {selectedDate && selectedTime && (
            <button
              type="button"
              onClick={() => setStep(4)}
              className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full bg-[#d62828] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d62828]"
            >
              Continuar
            </button>
          )}
        </div>
      )}

      {step === 4 && selectedService && selectedBarber && selectedDate && selectedTime && (
        <div className="mt-6 space-y-5">
          <div className="rounded-[24px] border border-white/10 bg-[#171717] p-4 sm:p-5">
            <h3 className="mb-4 text-lg font-semibold text-white">Resumo do agendamento</h3>

            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-center justify-between rounded-2xl bg-black/20 p-3">
                <span>Serviço</span>
                <span className="font-semibold text-white">{selectedService.title}</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-black/20 p-3">
                <span>Barbeiro</span>
                <span className="font-semibold text-white">{selectedBarber.name}</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-black/20 p-3">
                <span>Data</span>
                <span className="font-semibold text-white">{dayjs(selectedDate).format('DD/MM/YYYY')}</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-black/20 p-3">
                <span>Hora</span>
                <span className="font-semibold text-white">{selectedTime}</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-[#2a1414] p-3 text-[#fca5a5]">
                <span>Valor</span>
                <span className="font-semibold">{selectedService.price}</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit(handleClientData)} className="space-y-4">
            <label className="block space-y-2 text-sm text-slate-300">
              <span className="flex items-center gap-2">
                <User className="h-4 w-4 text-[#d62828]" /> Nome completo
              </span>
              <input
                type="text"
                {...register('name')}
                placeholder="Seu nome"
                className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-[#d62828]"
              />
            </label>

            <label className="block space-y-2 text-sm text-slate-300">
              <span>Telefone (WhatsApp)</span>
              <input
                type="tel"
                {...register('phone')}
                placeholder="(11) 99999-9999"
                className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-[#d62828]"
              />
            </label>

            <label className="block space-y-2 text-sm text-slate-300">
              <span>E-mail (opcional)</span>
              <input
                type="email"
                {...register('email')}
                placeholder="seu@email.com"
                className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-[#d62828]"
              />
            </label>

            <button
              type="submit"
              className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full bg-[#d62828] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d62828]"
            >
              Confirmar agendamento
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
