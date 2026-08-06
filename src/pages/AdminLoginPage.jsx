import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import toast from 'react-hot-toast';

export function AdminLoginPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = e => {
    e.preventDefault();
    setLoading(true);
    localStorage.setItem('admin_logged', 'true');
    toast.success('Bem-vindo ao painel de administrador');
    navigate('/admin');
    setLoading(false);
  };

  return (
    <div className="mx-auto max-w-2xl rounded-[32px] border border-white/10 bg-surface p-8 shadow-soft">
      <div className="mb-8 text-center">
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-danger/15">
          <Lock className="h-8 w-8 text-danger" />
        </div>
        <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Acesso restrito</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">Painel do Administrador</h1>
        <p className="mt-2 text-slate-300">Digite a senha para acessar o painel de controle</p>
      </div>

      <form onSubmit={handleLogin} className="space-y-6">
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full bg-danger px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#b01f1f] disabled:opacity-60"
        >
          {loading ? 'Acessando...' : 'Acessar painel de admin'}
        </button>
      </form>

      <p className="mt-6 text-center text-xs text-slate-500">
        Acesso rápido para testes do painel administrativo.
      </p>
    </div>
  );
}
