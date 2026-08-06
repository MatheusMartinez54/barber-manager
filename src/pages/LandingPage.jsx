import { services, team } from '../utils/constants';
import { ServiceCard } from '../components/ServiceCard';
import { BarberCard } from '../components/BarberCard';
import { TestimonialCard } from '../components/TestimonialCard';
import { Button } from '../components/Button';

export function LandingPage() {
  return (
    <div className="space-y-20">
      <section id="home" className="grid gap-8 rounded-[32px] border border-white/10 bg-surface p-8 shadow-soft sm:grid-cols-[1.1fr_0.9fr] lg:p-12">
        <div className="space-y-6">
          <span className="inline-flex rounded-full bg-danger/15 px-4 py-2 text-sm text-danger">Premium experience</span>
          <h1 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Corte de qualidade. Atendimento Premium.
          </h1>
          <p className="max-w-2xl text-slate-300">
            Agende com a melhor equipe. Gestão de horários, confirmações e área exclusiva para cliente, barbeiro e admin.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a href="/booking" className="inline-flex items-center justify-center rounded-full bg-danger px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#b01f1f]">Agendar Agora</a>
            <a href="#services" className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 text-sm text-white transition hover:border-danger hover:text-danger">Ver Serviços</a>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/0 p-6 shadow-softDark">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(214,40,40,0.24),transparent_35%)]" />
          <div className="relative flex h-full items-center justify-center rounded-[32px] bg-brand-900/80 p-6">
            <div className="rounded-[28px] bg-black/30 p-8 text-center shadow-soft">
              <p className="mb-4 uppercase tracking-[0.35em] text-slate-400">Agenda Premium</p>
              <p className="text-3xl font-semibold text-white">Sua barbearia em um único app.</p>
              <p className="mt-4 text-slate-300">Controle horários, bloqueios, clientes e vendas com visual moderno.</p>
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
          {services.map(service => (
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
          {team.map(barber => (
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

      <section id="contact" className="grid gap-6 rounded-[32px] border border-white/10 bg-gradient-to-br from-white/5 via-white/10 to-white/5 p-8 shadow-softDark sm:grid-cols-[1.2fr_0.8fr]">
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
