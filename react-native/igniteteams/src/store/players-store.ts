import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"
import AsyncStorage from "@react-native-async-storage/async-storage"

export type Player = {
  name: string
  group: string
  team: string
}

type StateProps = {
  players: Player[]
  addPlayer: (player: Player) => void
  removePlayer: (id: string) => void
  removePlayersByGroup: (group: string) => void
  getPlayersByTeams: (group: string, team: string) => Player[]
}

export const usePlayerStore = create(
  persist<StateProps>(
    (set, get) => ({
      players: [],
      addPlayer: (player: Player) =>
        set((state) => ({ players: [...state.players, player] })),
      removePlayer: (id: string) =>
        set((state) => ({
          players: state.players.filter((player) => player.name !== id),
        })),
      removePlayersByGroup: (group: string) =>
        set((state) => ({
          players: state.players.filter((player) => player.group !== group),
        })),
      getPlayersByTeams: (group: string, team: string) =>
        get().players.filter(
          (player) => player.group === group && player.team === team
        ),
    }),
    {
      name: "@teams:player-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
)
