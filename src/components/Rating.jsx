export function Rating({ value = 5, size = 'sm' }) {
  const stars = Array.from({ length: 5 }).map((_, i) => i < value);
  return (
    <div className={`flex items-center gap-1 text-amber-400 ${size === 'lg' ? 'text-xl' : 'text-sm'}`}>
      {stars.map((filled, i) => (
        <span key={i}>{filled ? '★' : '☆'}</span>
      ))}
    </div>
  );
}
