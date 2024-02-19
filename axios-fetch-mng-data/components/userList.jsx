//userList.jsx
import { useEffect } from 'react';
import User from './User';
import { useStore } from '../../axios-fetch-mng-data/storeAxiosApi';

const UsersList = () => {
  const fetchUsers = useStore((state) => state.fetchUsers);
  const deleteUser = useStore((state) => state.deleteUser);
  const users = useStore((state) => state.users);
  const loading = useStore((state) => state.loading);

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleUserDeleted = (id) => {
    deleteUser(id);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <User user={user} onUserDeleted={handleUserDeleted} />
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
