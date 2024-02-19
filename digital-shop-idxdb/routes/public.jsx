// public.jsx
import { Navigate, Outlet } from 'react-router-dom';
import useAuthStoreIdxdb from '../store/authStoreIdxdb';

const Public = () => {
  const currentUser = useAuthStoreIdxdb((state) => state.currentUser);
  console.log('Public Route - Current User:', currentUser);
  if (currentUser) {
    return (
      <>
        <Navigate to="/dashboard" />
        <Outlet />
      </>
    );
  }
  return <Navigate to="/Login" />;
};

export default Public;
