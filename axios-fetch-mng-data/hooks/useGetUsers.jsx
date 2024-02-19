// useGetUsers.jsx
import { create } from 'zustand';

export const useGetUsers = create((set) => ({
  users: [],
  loading: false,
  error: null,
  execute: async () => {
    set({ loading: true });
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users',
      );
      const users = await response.json();
      console.log('Fetched users:', users); // Add this line
      set({ users, loading: false });
    } catch (error) {
      console.error('Error fetching users:', error); // Add this line
      set({ error, loading: false });
    }
  },
}));
