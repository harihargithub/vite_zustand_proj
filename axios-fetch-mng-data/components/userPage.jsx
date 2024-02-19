//UserPage.jsx;
import React from 'react';
import User from './User';
import EditUserForm from './EditUserForm';
import { useStore } from '../../axios-fetch-mng-data/storeAxiosApi';

const UserPage = ({ user, onUserDeleted }) => {
  const { users } = useStore();
  const updatedUser = users.find((u) => u.id === user.id);

  return (
    <div>
      <User user={updatedUser || user} onUserDeleted={onUserDeleted} />
      <EditUserForm user={updatedUser || user} />
    </div>
  );
};

export default UserPage;
