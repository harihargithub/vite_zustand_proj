// logout.jsx
import { Button } from 'react-bootstrap';
import useAuthStoreIdxdb from '../store/authStoreIdxdb';

const Logout = () => {
  const logout = useAuthStoreIdxdb((state) => state.logout);
  const currentUser = useAuthStoreIdxdb((state) => state.currentUser);

  const handleLogout = () => {
    console.log('Logout clicked');
    logout();
    console.log('Logged out');
  };

  return currentUser ? (
    <Button variant="outline-danger" onClick={handleLogout}>
      Confirm Logout
    </Button>
  ) : null;
};

export default Logout;
