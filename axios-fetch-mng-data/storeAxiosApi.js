// storeAxiosApi.js
import { create } from 'zustand';

export const useStore = create((set) => ({
  users: [],
  loading: false,
  error: null,
  fetchUsers: async () => {
    set({ loading: true });
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users',
      );
      const users = await response.json();
      set({ users, loading: false });
    } catch (error) {
      set({ error, loading: false });
    }
  },
  deleteUser: (id) =>
    set((state) => ({ users: state.users.filter((user) => user.id !== id) })),
  editUser: (id, updatedUser) =>
    set((state) => ({
      users: state.users.map((user) =>
        user.id === id ? { ...user, ...updatedUser } : user,
      ),
    })),
}));
