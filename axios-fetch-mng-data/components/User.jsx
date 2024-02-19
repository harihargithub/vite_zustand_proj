//User.jsx
import React, { useState } from 'react';
import { useDeleteUser } from '../hooks/useDeleteUser';
import { useEditUser } from '../hooks/useEditUser';

const User = ({ user, onUserDeleted }) => {
  const deleteUser = useDeleteUser();
  const editUser = useEditUser();
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(user.name);

  const handleDelete = async () => {
    await deleteUser(user.id);
    onUserDeleted(user.id);
  };

  const handleEdit = () => {
    console.log('handleEdit called');
    setIsEditing(!isEditing);
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleSave = () => {
    editUser.execute(user.id, { ...user, name: newName });
    setIsEditing(false);
  };

  return (
    <div>
      <h2>
        {isEditing ? (
          <input type="text" value={newName} onChange={handleNameChange} />
        ) : (
          user.name
        )}
      </h2>
      <p>ID: {user.id}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>City: {user.address.city}</p>
      <button onClick={handleDelete}>Delete</button>
      {isEditing ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <button onClick={handleEdit}>Edit</button>
      )}
    </div>
  );
};

export default User;
