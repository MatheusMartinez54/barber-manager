import { Navigate } from 'react-router-dom';

export function AdminProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem('admin_logged') === 'true';

  if (!isLoggedIn) {
    return <Navigate to="/admin-login" replace />;
  }

  return children;
}
