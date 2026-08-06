import { services, team } from '../utils/constants';
import { ServiceCard } from '../components/ServiceCard';
import { BarberCard } from '../components/BarberCard';
import { TestimonialCard } from '../components/TestimonialCard';
import { Button } from '../components/Button';

export function LandingPage() {
  return (
    <div className="space-y-20">
      <section id="home" className="relative w-full min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/gallery1.png')" }}
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-start justify-center gap-6 px-6 py-20 text-left">
          <span className="inline-flex rounded-full bg-white/6 px-4 py-2 text-sm text-white/80">BARBER MANAGER</span>
          <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">
            Corte de qualidade.
            <br />
            Atendimento Premium.
          </h1>
          <p className="max-w-xl text-lg text-slate-200">Agende seu horário em menos de 1 minuto.</p>

          <div className="mt-4 flex w-full max-w-md gap-3">
            <a
              href="/booking"
              className="flex w-2/3 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#D62828] to-[#ff6b6b] px-6 py-4 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Agendar Agora
            </a>
            <a
              href="#services"
              className="flex w-1/3 items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-4 text-sm text-white transition hover:border-white/20"
            >
              Ver Serviços
            </a>
          </div>

          <div className="mt-6 flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="text-xl font-semibold text-white">★★★★★</div>
              <div className="text-sm text-slate-200">4.9 • +850 clientes satisfeitos</div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="space-y-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-sm uppercase tracking-[0.4em] text-slate-400">Serviços</span>
            <h2 className="mt-3 text-3xl font-semibold text-white">Cuidados completos para cliente e barbeiro.</h2>
          </div>
          <p className="max-w-xl text-slate-300">Planos de atendimento pensados para quem busca conforto, estilo e um agendamento profissional.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      <section id="team" className="space-y-8">
        <div>
          <span className="text-sm uppercase tracking-[0.4em] text-slate-400">Equipe</span>
          <h2 className="mt-3 text-3xl font-semibold text-white">Barbeiros que entregam precisão e entrega premium.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {team.map((barber) => (
            <BarberCard key={barber.id} barber={barber} />
          ))}
        </div>
      </section>

      <section className="space-y-8 rounded-[32px] border border-white/10 bg-surface p-8 shadow-soft">
        <div>
          <span className="text-sm uppercase tracking-[0.4em] text-slate-400">Depoimentos</span>
          <h2 className="mt-3 text-3xl font-semibold text-white">Clientes satisfeitos com cada atendimento.</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          <TestimonialCard author="Gabriel" message="Atendimento impecável e ambiente sofisticado. Recomendo muito." />
          <TestimonialCard author="Lucas" message="Fácil agendamento e excelentes profissionais. Tudo premium." />
          <TestimonialCard author="Renata" message="Meu marido não troca! Agenda rápida e resultado top." />
        </div>
      </section>

      <section
        id="contact"
        className="grid gap-6 rounded-[32px] border border-white/10 bg-gradient-to-br from-white/5 via-white/10 to-white/5 p-8 shadow-softDark sm:grid-cols-[1.2fr_0.8fr]"
      >
        <div>
          <span className="text-sm uppercase tracking-[0.4em] text-slate-400">Contato</span>
          <h2 className="mt-3 text-3xl font-semibold text-white">Vamos transformar sua barbearia em referência.</h2>
          <p className="mt-4 max-w-xl text-slate-300">Fale conosco pelo WhatsApp, Instagram ou agende uma demonstração do sistema.</p>
        </div>
        <div className="space-y-4 rounded-[28px] bg-brand-900/80 p-6">
          <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">WhatsApp</p>
            <p className="mt-3 text-lg font-semibold">(11) 99999-9999</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Instagram</p>
            <p className="mt-3 text-lg font-semibold">@barbeariapremium</p>
          </div>
        </div>
      </section>
    </div>
  );
}
