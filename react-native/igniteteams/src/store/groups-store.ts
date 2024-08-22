import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"
import AsyncStorage from "@react-native-async-storage/async-storage"

type Group = {
  id: string
  text: string
  createdAt: Date
}

type StateProps = {
  groups: string[]
  addGroup: (group: string) => void
  removeGroup: (id: string) => void
}

export const useGroupStore = create(
  persist<StateProps>(
    (set) => ({
      groups: [],
      addGroup: (group: string) =>
        set((state) => ({ groups: [...state.groups, group] })),
      removeGroup: (id: string) =>
        set((state) => ({
          groups: state.groups.filter((group) => group !== id),
        })),
    }),
    {
      name: "@teams:group-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
)
