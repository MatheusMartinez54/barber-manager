import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export function MainLayout() {
  const { pathname } = useLocation();
  const isBookingPage = pathname.startsWith('/booking');

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {!isBookingPage && <Navbar />}
      <main className={`mx-auto w-full max-w-6xl px-4 ${isBookingPage ? 'py-6 sm:px-6' : 'pb-16 pt-20 sm:px-6 lg:px-8'}`}>
        <Outlet />
      </main>
      {!isBookingPage && <Footer />}
    </div>
  );
}
