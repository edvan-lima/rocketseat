import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"
import AsyncStorage from "@react-native-async-storage/async-storage"

export type UserStore = {
  role: string
  email: string
}

type StateProps = {
  data: UserStore | null
  save: (data: UserStore) => void
  remove: () => void
}

export const useUserStore = create(
  persist<StateProps>(
    (set) => ({
      data: null,

      save: (data: UserStore) => set(() => ({ data })),
      remove: () => set(() => ({ data: null })),
    }),
    {
      name: "@todo:user-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
)
