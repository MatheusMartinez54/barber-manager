import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export function LoginPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();

  const handleLogin = async values => {
    setLoading(true);
    toast.success('Acesso liberado.');
    navigate('/client');
    setLoading(false);
  };

  return (
    <div className="mx-auto max-w-3xl rounded-[32px] border border-white/10 bg-surface p-8 shadow-soft">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Entrar</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">Acesse sua conta e organize seus agendamentos.</h1>
      </div>
      <form onSubmit={handleSubmit(handleLogin)} className="space-y-6">
        <label className="block space-y-2 text-sm text-slate-300">
          <span>Email</span>
          <input type="email" {...register('email')} className="w-full rounded-3xl border border-white/10 bg-black/20 px-4 py-3 outline-none focus:border-danger" />
        </label>

        <label className="block space-y-2 text-sm text-slate-300">
          <span>Senha</span>
          <input type="password" {...register('password')} className="w-full rounded-3xl border border-white/10 bg-black/20 px-4 py-3 outline-none focus:border-danger" />
        </label>

        <button type="submit" disabled={loading} className="w-full rounded-full bg-danger px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#b01f1f] disabled:opacity-60">
          {loading ? 'Acessando...' : 'Entrar'}
        </button>
      </form>
      <div className="mt-6 flex items-center justify-between text-sm text-slate-400">
        <Link to="/reset-password" className="hover:text-white">Recuperar senha</Link>
        <span>
          Ainda não tem conta? <Link to="/" className="text-white font-semibold hover:text-danger">Crie uma agora</Link>
        </span>
      </div>
    </div>
  );
}
