// store.js
import { create } from 'zustand';
import axios from 'axios';

export const useStore = create((set) => ({
  count: 0,
  showText: true,
  increment: () => set((state) => ({ count: state.count + 1 })),
  toggleShowText: () => set((state) => ({ showText: !state.showText })),
  inputText: '',
  setinputText: (txt) => set(() => ({ inputText: txt })),
  data: [],
  setData: (data) => set(() => ({ data: data })),
  axiosget: async () => {
    try {
      const res = await axios.get(
        'https://jsonplaceholder.typicode.com/comments',
      );
      set({ data: res.data });
    } catch (error) {
      console.error('axios response', error);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
    }
  },
  counter: 0,
  inc: () => set((state) => ({ counter: state.counter + 1 })),
}));
