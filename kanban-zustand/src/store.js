import { create } from 'zustand';

const store = (set) => ({
  tasks: [{ title: 'Task 1', state: 'ONGOING' }],
  addTask: (title, state) =>
    set((store) => ({ tasks: [...store.tasks, { title, state }] })),
  deleteTask: (title) =>
    set((store) => ({
      tasks: [...store.tasks.filter((task) => task.title !== title)],
    })),
  updateTaskStatus: (title, newState) =>
    set((store) => ({
      tasks: store.tasks.map((task) =>
        task.title === title ? { ...task, state: newState } : task,
      ),
    })),
});

export const useStore = create(store);
