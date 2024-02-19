// public.jsx
import { Outlet } from 'react-router-dom';
import useAuthStore from '../store/authStore';

const Public = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return isAuthenticated ? null : <Outlet />;
};

export default Public;
