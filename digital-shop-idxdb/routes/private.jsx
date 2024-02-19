// private.jsx
import { Outlet, Navigate } from 'react-router-dom';
import useAuthStoreIdxdb from '../store/authStoreIdxdb';

const Private = () => {
  const { currentUser } = useAuthStoreIdxdb((state) => ({
    currentUser: state.currentUser,
    // isAuthChecked: state.isAuthChecked,
  }));
  console.log('Private Route - Current User:', currentUser);

  /* useEffect(() => {
    console.log('Private Route - Current User:', currentUser);
  }, [currentUser]);

  if (!isAuthChecked) {
    return <div>Loading...</div>; // Replace this with your actual loading component
  } */

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
};

export default Private;
