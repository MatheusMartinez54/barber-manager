import { Link } from 'react-router-dom';

export function BookingSuccessPage() {
  return (
    <div className="mx-auto max-w-3xl rounded-[32px] border border-white/10 bg-surface p-12 text-center shadow-soft">
      <div className="mb-8 inline-flex h-24 w-24 items-center justify-center rounded-full bg-emerald-500/20">
        <span className="text-5xl">✓</span>
      </div>
      <h1 className="text-4xl font-semibold text-white">Agendamento confirmado!</h1>
      <p className="mt-4 text-slate-300">Seu horário foi reservado com sucesso. Você receberá uma confirmação por WhatsApp e e-mail com os detalhes do atendimento.</p>
      
      <div className="mt-8 rounded-3xl border border-white/10 bg-black/20 p-8">
        <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Código de confirmação</p>
        <p className="mt-4 font-mono text-2xl font-semibold text-danger">{Date.now().toString().slice(0, 12).toUpperCase()}</p>
        <p className="mt-2 text-sm text-slate-400">Guarde este código para suas referências</p>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
        <Link to="/" className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-danger">
          Voltar ao início
        </Link>
        <Link to="/booking" className="inline-flex items-center justify-center rounded-full bg-danger px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#b01f1f]">
          Fazer outro agendamento
        </Link>
      </div>
    </div>
  );
}
