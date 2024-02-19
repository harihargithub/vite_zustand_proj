// Logout.jsx
import useAuthStore from '../store/authStore'; // import the Zustand store

const Logout = () => {
  const logout = useAuthStore((state) => state.logout); // get the logout action from the store
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated); // get the isAuthenticated state from the store

  const handleLogout = () => {
    console.log('handleLogout called');
    logout();
    console.log('Logged out');
  };

  return isAuthenticated ? (
    <button onClick={handleLogout}>Confirm Logout</button>
  ) : null;
};

export default Logout;
