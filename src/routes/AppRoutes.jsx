import { Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from '../pages/LandingPage';
import { BookingPage } from '../pages/BookingPage';
import { LoginPage } from '../pages/LoginPage';
import { ResetPasswordPage } from '../pages/ResetPasswordPage';
import { ProfilePage } from '../pages/ProfilePage';
import { ClientDashboard } from '../pages/ClientDashboard';
import { BarberDashboard } from '../pages/BarberDashboard';
import { AdminDashboard } from '../pages/AdminDashboard';
import { AdminLoginPage } from '../pages/AdminLoginPage';
import { BookingSuccessPage } from '../pages/BookingSuccessPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { AdminProtectedRoute } from '../components/AdminProtectedRoute';
import { MainLayout } from '../layouts/MainLayout';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="booking" element={<BookingPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="reset-password" element={<ResetPasswordPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="client" element={<ClientDashboard />} />
        <Route path="barber" element={<BarberDashboard />} />
        <Route path="admin-login" element={<AdminLoginPage />} />
        <Route path="admin" element={<AdminProtectedRoute><AdminDashboard /></AdminProtectedRoute>} />
        <Route path="success" element={<BookingSuccessPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
