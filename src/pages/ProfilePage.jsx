import { useNavigate } from 'react-router-dom';

export function ProfilePage() {
  const navigate = useNavigate();

  return (
    <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
      <section className="card-surface rounded-[32px] border border-white/10 p-8 shadow-soft">
        <h2 className="text-2xl font-semibold text-white">Meu Perfil</h2>
        <p className="mt-4 text-slate-300">Gerencie suas informações, agendamentos e preferências.</p>
        <div className="mt-8 space-y-4 text-slate-300">
          <div className="rounded-3xl bg-black/20 p-5">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Email</p>
            <p className="mt-2 font-medium text-white">cliente@exemplo.com</p>
          </div>
          <div className="rounded-3xl bg-black/20 p-5">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Plano</p>
            <p className="mt-2 font-medium text-white">Cliente</p>
          </div>
        </div>
      </section>
      <section className="card-surface rounded-[32px] border border-white/10 p-8 shadow-soft">
        <h3 className="text-xl font-semibold text-white">Ações rápidas</h3>
        <div className="mt-6 space-y-4">
          <button
            onClick={() => navigate('/client')}
            className="w-full rounded-full bg-white/5 px-6 py-4 text-left text-sm text-slate-200 transition hover:bg-white/10"
          >
            Ver meus agendamentos
          </button>
          <button className="w-full rounded-full border border-white/10 bg-black/20 px-6 py-4 text-left text-sm text-slate-200 transition hover:border-danger">
            Editar informações
          </button>
        </div>
      </section>
    </div>
  );
}
