import { create } from 'zustand';
import { persist } from 'zustand/middleware';
let store = (set) => ({
  isLoggedIn: true,
  setUserState: (isLoggedIn) => set(() => ({ isLoggedIn })),
});
//persist the state with key "randomKey"
store = persist(store, { name: 'user-store' });
//create the store
let useStore = create(store);
export default useStore;
