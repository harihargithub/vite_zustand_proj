// authStoreIdxdb.jsx
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import localForage from 'localforage';

// Define your state and actions
const state = {
  users: [],
  currentUser: null,
  // isAuthChecked: false,
};

// let store; // Define a reference to the store

const actions = (set, get) => ({
  login: (email, password) => {
    console.log('Trying to log in with', email, password);
    const user = get().users.find(
      (user) => user.email === email && user.password === password,
    );
    if (user) {
      set({ currentUser: user }); // Set isAuthChecked to true here

      console.log('Logged in as', user.email);
    } else {
      console.log('Invalid credentials');
    }
  },
  logout: () => {
    console.log('Logging out');
    set({ currentUser: null });
  },
  register: (email, password) => {
    console.log('Registering user with', email, password);
    set((state) => ({ users: [...state.users, { email, password }] }));

    console.log('Current users:', get().users);
  },
  /*  setAuthChecked: () => {
    set({ isAuthChecked: true });
  }, */
});

// Define your storage
const forageStore = {
  getItem: (name) =>
    localForage.getItem(name).then((value) => {
      console.log(`Getting ${name}:`, value);
      /* if (name === 'auth-storeIdxdb') {
        // Use the store reference to call setAuthChecked
        store.setAuthChecked();
      } */
      return value;
    }),
  setItem: (name, value) =>
    localForage.setItem(name, value).then(() => {
      console.log(`Setting ${name}:`, value);
    }),
  removeItem: (name) =>
    localForage.removeItem(name).then(() => {
      console.log(`Removing ${name}`);
    }),
};

// Create your store with persist middleware
let useAuthStoreIdxdb = create(
  persist(
    (set, get) => {
      // Assign the store reference in the create function
      /* store = { setAuthChecked: actions(set, get).setAuthChecked }; */
      return {
        ...state,
        ...actions(set, get),
      };
    },
    {
      name: 'auth-storeIdxdb',
      storage: forageStore,
      // Manually control what part of the state is persisted
      partialize: (state) => ({
        users: state.users,
        currentUser: state.currentUser,
        // isAuthChecked: state.isAuthChecked, // Persist this state
      }),
    },
  ),
);

export default useAuthStoreIdxdb;
