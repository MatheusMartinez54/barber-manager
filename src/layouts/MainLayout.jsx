import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export function MainLayout() {
  const { pathname } = useLocation();
  const hideHeader = pathname.startsWith('/booking');

  return (
    <div className="min-h-screen bg-brand-900 text-white">
      {!hideHeader && <Navbar />}
      <main className={`mx-auto w-full max-w-[1280px] px-4 pb-12 ${hideHeader ? 'pt-12' : 'pt-24'} sm:px-6 lg:px-8`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
