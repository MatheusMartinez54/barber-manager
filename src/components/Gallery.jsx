export function Gallery({ images = [] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((src, i) => (
        <div key={i} className="overflow-hidden rounded-2xl shadow-soft">
          <img src={src} alt={`Galeria ${i + 1}`} className="h-56 w-full object-cover transition-transform duration-300 hover:scale-105" />
        </div>
      ))}
    </div>
  );
}
