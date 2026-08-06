import { Link } from 'react-router-dom';

export function Button({ children, href, ...props }) {
  if (href) {
    return (
      <Link
        to={href}
        className="inline-flex items-center justify-center rounded-full bg-danger px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#b01f1f]"
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className="inline-flex items-center justify-center rounded-full bg-danger px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#b01f1f]"
      {...props}
    >
      {children}
    </button>
  );
}
