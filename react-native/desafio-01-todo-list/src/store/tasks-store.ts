import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"
import AsyncStorage from "@react-native-async-storage/async-storage"

export type Task = {
  id: string
  text: string
  done: boolean
  createdAt: Date
}

type StateProps = {
  tasks: Task[]
  addTask: (task: Task) => void
  removeTask: (id: string) => void
  toggleTaskDone: (id: string) => void
}

export const useTasksStore = create(
  persist<StateProps>(
    (set) => ({
      tasks: [],
      addTask: (task: Task) =>
        set((state) => ({ tasks: [...state.tasks, task] })),
      removeTask: (id: string) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),
      toggleTaskDone: (id: string) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, done: !task.done } : task
          ),
        })),
    }),
    {
      name: "@todo:task-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
)
