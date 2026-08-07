import { ArrowRight, Clock3, MapPin, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services, team } from '../utils/constants';
import { ServiceCard } from '../components/ServiceCard';
import { BarberCard } from '../components/BarberCard';
import { TestimonialCard } from '../components/TestimonialCard';

export function LandingPage() {
  return (
    <div className="space-y-8 sm:space-y-12">
      <section id="home" className="relative isolate overflow-hidden rounded-[28px] border border-white/10 bg-black/60">
        <div className="absolute inset-0">
          <img src="/assets/gallery1.png" alt="Barbearia premium com ambiente elegante" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/45" />

        <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-5xl items-center px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.42em] text-white/70">Barber Manager</p>
            <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.06em] text-white sm:text-5xl lg:text-7xl">
              Seu estilo.
              <br />
              Nosso cuidado.
            </h1>
            <p className="mt-5 max-w-lg text-base text-slate-200 sm:text-lg">Agende seu horário em poucos cliques.</p>

            <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row">
              <Link
                to="/booking"
                aria-label="Agendar horário na barbearia"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[#d62828] px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_30px_rgba(214,40,40,0.35)] transition-transform duration-200 hover:scale-[1.01] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d62828]"
              >
                Agendar Agora
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href="#services"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:border-white/25 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Ver Serviços
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="space-y-5">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Serviços</p>
          <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">Atendimento pensado para o seu estilo.</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      <section id="team" className="space-y-5">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Equipe</p>
          <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">Profissionais que entendem de corte e acabamento.</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {team.map((barber) => (
            <BarberCard key={barber.id} barber={barber} />
          ))}
        </div>
      </section>

      <section className="space-y-5 rounded-[28px] border border-white/10 bg-[#171717] p-4 sm:p-6">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Depoimentos</p>
          <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">Clientes que voltam por resultado e atendimento.</h2>
        </div>

        <div className="-mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0">
          <TestimonialCard author="Gabriel" message="Atendimento impecável e ambiente sofisticado. Sempre volto." />
          <TestimonialCard author="Lucas" message="Agendamento rápido, corte preciso e equipe muito profissional." />
          <TestimonialCard author="Renata" message="Fácil, clean e com resultado que chama atenção." />
        </div>
      </section>

      <section id="location" className="rounded-[28px] border border-white/10 bg-[#171717] p-4 sm:p-6">
        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Localização</p>
            <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">Uma barbearia fácil de encontrar e ainda mais fácil de gostar.</h2>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-4">
              <MapPin className="mt-0.5 h-4 w-4 text-[#d62828]" />
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Endereço</p>
                <p className="mt-2 text-sm text-white">Rua das Flores, 432 - Centro, São Paulo/SP</p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-4">
              <Clock3 className="mt-0.5 h-4 w-4 text-[#d62828]" />
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Horário</p>
                <p className="mt-2 text-sm text-white">Segunda a sábado, 9h às 19h</p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-4">
              <Phone className="mt-0.5 h-4 w-4 text-[#d62828]" />
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Telefone</p>
                <p className="mt-2 text-sm text-white">(11) 99999-9999</p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-4">
              <MessageCircle className="mt-0.5 h-4 w-4 text-[#d62828]" />
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">WhatsApp</p>
                <p className="mt-2 text-sm text-white">(11) 99999-9999</p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Rua+das+Flores+432+Centro+S%C3%A3o+Paulo"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-[#d62828] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d62828]"
            >
              Abrir no Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
