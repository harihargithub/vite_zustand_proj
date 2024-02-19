// axiosGetStore.js
import { create } from 'zustand';
import axios from 'axios';

const useGetData = create((set) => ({
  data: null,
  loading: false,
  error: false,
  errorData: null,
  execute: async () => {
    set({ loading: true, error: false });
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users',
      );
      set({ data: response.data, loading: false });
    } catch (error) {
      set({ error: true, errorData: error, loading: false });
    }
  },
}));

export default useGetData;
