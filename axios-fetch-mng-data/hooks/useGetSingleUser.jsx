// useGetSingleUser.jsx
import { request } from '../api/api';

export const useGetSingleUser = (id) =>
  request({
    method: 'GET',
    url: `https://jsonplaceholder.typicode.com/users/${id}`,
  });
