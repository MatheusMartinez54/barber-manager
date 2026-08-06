import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export function MainLayout() {
  return (
    <div className="min-h-screen bg-brand-900 text-white">
      <Navbar />
      <main className="mx-auto w-full max-w-[1280px] px-4 pb-12 pt-24 sm:px-6 lg:px-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
