// private.jsx
import { Outlet, Navigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';

const Private = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default Private;
