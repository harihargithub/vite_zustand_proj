// EditUserForm.jsx
import React, { useState, useEffect } from 'react';
import { useEditUser } from './useEditUser'; // import the useEditUser hook
import { useStore } from '../../axios-fetch-mng-data/storeAxiosApi';

const EditUserForm = ({ user }) => {
  console.log('EditUserForm rendered');
  const { users } = useStore();
  const updatedUser = users.find((u) => u.id === user.id);
  const [name, setName] = useState(updatedUser ? updatedUser.name : user.name);
  const { execute } = useEditUser(); // use the useEditUser hook

  useEffect(() => {
    setName(updatedUser ? updatedUser.name : user.name);
  }, [updatedUser, user]);

  const handleSubmit = (event) => {
    console.log('handleSubmit called');
    event.preventDefault();
    console.log('Submitting form with name:', name);
    execute(user.id, { name }); // call the execute function when the form is submitted
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default EditUserForm;
