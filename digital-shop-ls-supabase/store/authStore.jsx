// authStore.jsx
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

let authStore = (set, get) => ({
  isAuthenticated: false,
  users: [],
  login: (email, password) => {
    console.log('Trying to log in with', email, password);
    const user = get().users.find(
      (user) => user.email === email && user.password === password,
    );
    console.log('Found user:', user);
    if (user) {
      set({ isAuthenticated: true });
      return 'Logged in successfully';
    } else {
      return 'Invalid email or password';
    }
  },
  logout: () => {
    console.log('logout action called');
    set({ isAuthenticated: false });
  },
  register: (email, password) => {
    console.log('Registering user with', email, password);
    set((state) => ({ users: [...state.users, { email, password }] }));
    console.log('Current users:', get().users);
  },
});

// persist the state with key "auth-store"
authStore = persist(authStore, { name: 'auth-store' });

// create the store
let useAuthStore = create(authStore);

export default useAuthStore;
