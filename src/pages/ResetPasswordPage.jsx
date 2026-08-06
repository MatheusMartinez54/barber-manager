import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export function ResetPasswordPage() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (values) => {
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-2xl rounded-[32px] border border-white/10 bg-surface p-8 shadow-soft">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Recuperar senha</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">Digite seu e-mail para receber o link.</h1>
      </div>
      {submitted ? (
        <div className="space-y-4 rounded-3xl border border-white/10 bg-black/20 p-6 text-slate-200">
          <p className="font-semibold text-white">Email enviado!</p>
          <p>Verifique sua caixa de entrada e siga as instruções para redefinir sua senha.</p>
          <Link to="/login" className="inline-flex rounded-full bg-danger px-5 py-3 text-sm font-semibold text-white">
            Voltar ao login
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <label className="block space-y-2 text-sm text-slate-300">
            <span>Email</span>
            <input
              type="email"
              {...register('email', { required: 'Email obrigatório' })}
              className="w-full rounded-3xl border border-white/10 bg-black/20 px-4 py-3 outline-none focus:border-danger"
            />
            {errors.email && <span className="text-sm text-danger">{errors.email.message}</span>}
          </label>
          <button type="submit" className="w-full rounded-full bg-danger px-6 py-3 text-sm font-semibold text-white hover:bg-[#b01f1f]">
            Enviar link
          </button>
        </form>
      )}
    </div>
  );
}
