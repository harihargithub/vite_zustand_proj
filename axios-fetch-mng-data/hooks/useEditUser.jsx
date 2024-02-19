// useEditUser.jsx
import axios from '../../kanban-zustand/node_modules/axios';
import { useStore } from '../../axios-fetch-mng-data/storeAxiosApi';

export const useEditUser = () => {
  const { editUser } = useStore();

  const execute = async (id, data) => {
    console.log('execute called with id:', id, 'and data:', data);
    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        data,
      );

      if (response.status === 200) {
        editUser(id, response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { execute };
};
