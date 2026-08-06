export function TestimonialCard({ author, message }) {
  return (
    <article className="rounded-[32px] border border-white/10 bg-brand-900/70 p-6 shadow-soft">
      <p className="text-slate-300">“{message}”</p>
      <div className="mt-6 flex items-center justify-between">
        <span className="font-semibold text-white">{author}</span>
        <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.35em] text-slate-400">Premium</span>
      </div>
    </article>
  );
}
