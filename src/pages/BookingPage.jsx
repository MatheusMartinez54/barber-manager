import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ChevronLeft, Calendar, Clock, User } from 'lucide-react';
import { services, team } from '../utils/constants';
import { useBookings } from '../contexts/BookingContext';
import toast from 'react-hot-toast';
import dayjs from 'dayjs';

const timeSlots = [
  '09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00'
];

export function BookingPage() {
  const navigate = useNavigate();
  const { addBooking } = useBookings();
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedBarber, setSelectedBarber] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleClientData = values => {
    addBooking({
      selectedService,
      selectedBarber,
      selectedDate,
      selectedTime,
      clientName: values.name,
      clientPhone: values.phone,
      clientEmail: values.email
    });
    toast.success('Agendamento realizado com sucesso!');
    navigate('/success');
  };

  const getMinDate = () => dayjs().add(1, 'day').format('YYYY-MM-DD');

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      {/* Header */}
      <div className="rounded-[32px] border border-white/10 bg-surface p-8 shadow-soft">
        <div className="flex items-center gap-4">
          <button
            onClick={() => (step > 1 ? setStep(step - 1) : navigate('/'))}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-danger"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Passo {step} de 4</p>
            <h1 className="text-2xl font-semibold text-white">
              {step === 1 && 'Escolha o serviço'}
              {step === 2 && 'Escolha o barbeiro'}
              {step === 3 && 'Escolha data e hora'}
              {step === 4 && 'Confirme seus dados'}
            </h1>
          </div>
        </div>
      </div>

      {/* Step 1: Service Selection */}
      {step === 1 && (
        <div className="grid gap-4 md:grid-cols-2">
          {services.map(service => (
            <button
              key={service.id}
              onClick={() => {
                setSelectedService(service);
                setStep(2);
              }}
              className={`rounded-[32px] border p-6 text-left transition ${
                selectedService?.id === service.id
                  ? 'border-danger bg-danger/10'
                  : 'border-white/10 bg-surface hover:border-danger'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{service.description}</p>
                  <p className="mt-3 text-sm text-slate-400">{service.duration}</p>
                </div>
                <span className="rounded-full bg-danger/15 px-3 py-1 text-sm font-semibold text-danger">
                  {service.price}
                </span>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Step 2: Barber Selection */}
      {step === 2 && selectedService && (
        <div className="grid gap-4 md:grid-cols-2">
          {team.map(barber => (
            <button
              key={barber.id}
              onClick={() => {
                setSelectedBarber(barber);
                setStep(3);
              }}
              className={`rounded-[32px] border p-6 text-left transition ${
                selectedBarber?.id === barber.id
                  ? 'border-danger bg-danger/10'
                  : 'border-white/10 bg-surface hover:border-danger'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/10 text-xl font-semibold text-white">
                  {barber.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{barber.name}</h3>
                  <p className="text-sm text-slate-400">{barber.role}</p>
                  <p className="mt-2 text-sm text-slate-300">{barber.experience} • {barber.rating} ✦</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Step 3: Date & Time Selection */}
      {step === 3 && selectedService && selectedBarber && (
        <div className="space-y-6">
          <div className="rounded-[32px] border border-white/10 bg-surface p-6 shadow-soft">
            <label className="block space-y-3">
              <div className="flex items-center gap-2 text-sm uppercase tracking-[0.4em] text-slate-400">
                <Calendar className="h-4 w-4" /> Data
              </div>
              <input
                type="date"
                min={getMinDate()}
                value={selectedDate || ''}
                onChange={e => setSelectedDate(e.target.value)}
                className="w-full rounded-3xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-danger"
              />
            </label>
          </div>

          {selectedDate && (
            <div className="rounded-[32px] border border-white/10 bg-surface p-6 shadow-soft">
              <p className="mb-4 flex items-center gap-2 text-sm uppercase tracking-[0.4em] text-slate-400">
                <Clock className="h-4 w-4" /> Horários disponíveis
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                {timeSlots.map(time => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`rounded-full py-3 text-sm font-semibold transition ${
                      selectedTime === time
                        ? 'bg-danger text-white'
                        : 'border border-white/10 bg-white/5 text-white hover:border-danger'
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
              onClick={() => setStep(4)}
              className="w-full rounded-full bg-danger px-6 py-4 text-sm font-semibold text-white hover:bg-[#b01f1f]"
            >
              Continuar
            </button>
          )}
        </div>
      )}

      {/* Step 4: Client Data */}
      {step === 4 && selectedService && selectedBarber && selectedDate && selectedTime && (
        <div className="space-y-6">
          <div className="rounded-[32px] border border-white/10 bg-surface p-6 shadow-soft">
            <h3 className="mb-4 text-lg font-semibold text-white">Resumo do agendamento</h3>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-center justify-between rounded-3xl bg-black/20 p-4">
                <span>Serviço</span>
                <span className="font-semibold text-white">{selectedService.title}</span>
              </div>
              <div className="flex items-center justify-between rounded-3xl bg-black/20 p-4">
                <span>Barbeiro</span>
                <span className="font-semibold text-white">{selectedBarber.name}</span>
              </div>
              <div className="flex items-center justify-between rounded-3xl bg-black/20 p-4">
                <span>Data</span>
                <span className="font-semibold text-white">
                  {dayjs(selectedDate).format('DD/MM/YYYY')}
                </span>
              </div>
              <div className="flex items-center justify-between rounded-3xl bg-black/20 p-4">
                <span>Hora</span>
                <span className="font-semibold text-white">{selectedTime}</span>
              </div>
              <div className="flex items-center justify-between rounded-3xl bg-danger/15 p-4 text-danger">
                <span>Valor</span>
                <span className="font-semibold">{selectedService.price}</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit(handleClientData)} className="space-y-4">
            <label className="block space-y-2 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" /> Nome completo
              </div>
              <input
                type="text"
                {...register('name')}
                placeholder="Seu nome"
                className="w-full rounded-3xl border border-white/10 bg-black/20 px-4 py-3 outline-none focus:border-danger"
              />
            </label>

            <label className="block space-y-2 text-sm text-slate-300">
              <span>Telefone (WhatsApp)</span>
              <input
                type="tel"
                {...register('phone')}
                placeholder="(11) 99999-9999"
                className="w-full rounded-3xl border border-white/10 bg-black/20 px-4 py-3 outline-none focus:border-danger"
              />
            </label>

            <label className="block space-y-2 text-sm text-slate-300">
              <span>E-mail (opcional)</span>
              <input
                type="email"
                {...register('email')}
                placeholder="seu@email.com"
                className="w-full rounded-3xl border border-white/10 bg-black/20 px-4 py-3 outline-none focus:border-danger"
              />
            </label>

            <button
              type="submit"
              className="w-full rounded-full bg-danger px-6 py-4 text-sm font-semibold text-white hover:bg-[#b01f1f]"
            >
              Confirmar agendamento
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
