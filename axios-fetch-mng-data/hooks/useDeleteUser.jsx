// useDeleteUser.jsx
import { request } from '../api/api';
import { useStore } from '../../axios-fetch-mng-data/storeAxiosApi';

export const useDeleteUser = () => {
  const { deleteUser: deleteUserFromStore } = useStore();

  const deleteUser = (id) => {
    const store = request(
      {
        method: 'DELETE',
        url: `https://jsonplaceholder.typicode.com/users/${id}`,
      },
      {
        onSuccess: () => {
          deleteUserFromStore(id);
        },
      },
    );
    store.getState().execute();
  };

  return deleteUser;
};
