import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import useSupabase from '../hooks/supabase';

let store = (set) => ({
  isLoggedIn: false,
  email: '',
  firstName: '',
  lastName: '',
  accessToken: '',
  setUserState: ({ isLoggedIn, email, firstName, lastName, accessToken }) =>
    set(() => ({ isLoggedIn, email, firstName, lastName, accessToken })),

  logout: async () => {
    console.log('logout action called');
    set({ isLoggedIn: false });

    // Log out from Supabase
    await useSupabase.auth.signOut();

    // Update the state indicating that the user is logged out
    set({ isLoggedIn: false });
  },
});

//persist the state with key "randomKey"
store = persist(store, { name: 'user-supaStore' });

//create the store
let useStore = create(store);

export default useStore;
