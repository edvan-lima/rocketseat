import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native"
import React, { useEffect, useRef, useState } from "react"
import { StatusBar } from "expo-status-bar"
import Header from "@/components/Header"
import Highlights from "@/components/Highlights"
import { Button } from "@/components/ui/Button"
import { MaterialIcons } from "@expo/vector-icons"
import colors from "tailwindcss/colors"
import Filter from "@/components/Filter"
import PlayerCard from "@/components/PlayerCard"
import ListEmpty from "@/components/ListEmpty"
import { useFocusEffect, useLocalSearchParams, useRouter } from "expo-router"
import { Player, usePlayerStore } from "@/store/players-store"
import { useGroupStore } from "@/store/groups-store"

type ParamsProps = {
  group: string
}

export default function Players() {
  const params = useLocalSearchParams()
  const router = useRouter()
  const { group } = params as ParamsProps
  const [team, setTeam] = useState("Time A")
  const [player, setPlayer] = useState("")
  const playerStore = usePlayerStore()
  const groupStore = useGroupStore()
  const [players, setPlayers] = useState<Player[]>([])

  const newPlayerNameInputRef = useRef<TextInput>(null)

  function groupRemove() {
    playerStore.removePlayersByGroup(group)
    groupStore.removeGroup(group)
    router.push("groups")
  }

  function handleRoveGroup() {
    Alert.alert("Remover", "Deseja remover o grupo?", [
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: () => groupRemove() },
    ])
  }
  function handleAddPlayer() {
    if (player.trim().length === 0) {
      Alert.alert("Novo participante", "Informe o nome do participante")
      return
    }
    const playerAlreadyExists = playerStore.players.some(
      (item) => item.name === player
    )
    if (playerAlreadyExists) {
      Alert.alert(
        "Novo participante",
        "Já existe um participante cadastrado com este nome"
      )

      return
    }
    playerStore.addPlayer({ name: player, group: group, team: team } as Player)

    newPlayerNameInputRef.current?.blur()
    setPlayer("")
    getPlayersByTeams()
  }
  function getPlayersByTeams() {
    setPlayers(playerStore.getPlayersByTeams(group, team))
  }

  useEffect(() => {
    getPlayersByTeams()
  }, [team])

  return (
    <View className="flex-1 bg-neutral-900 container">
      <StatusBar style="light" />

      <Header showBackButton />

      <View className="flex-1">
        <Highlights
          title={group}
          subtitle="adicione a galera e separe os times"
        />
        <View className="flex-row bg-neutral-950 rounded-md items-center">
          <TextInput
            placeholder="Nome do participante"
            className="font-body h-14 placeholder:text-neutral-600 text-neutral-300 p-4 w-full flex-1"
            autoCorrect={false}
            onChangeText={setPlayer}
            value={player}
            ref={newPlayerNameInputRef}
            onSubmitEditing={handleAddPlayer}
            returnKeyType="done"
          />
          <TouchableOpacity
            className="justify-center items-center mx-3"
            onPress={handleAddPlayer}
          >
            <MaterialIcons name="add" size={24} color="#AA2834" />
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center w-full mt-8 mb-3">
          <FlatList
            data={["Time A", "Time B"]}
            keyExtractor={(item) => item}
            renderItem={({ item, index }) => (
              <Filter
                key={item + index}
                title={item}
                isActive={item === team}
                onPress={() => setTeam(item)}
              />
            )}
            horizontal
          />
          <Text className="text-neutral-200 font-bold">{players.length}</Text>
        </View>

        <FlatList
          data={players}
          keyExtractor={(item) => item.name}
          renderItem={({ item, index }) => (
            <PlayerCard
              key={index}
              name={item.name}
              removePlayer={playerStore.removePlayer}
            />
          )}
          contentContainerStyle={
            players.length === 0 ? { flex: 1 } : { paddingBottom: 100 }
          }
          ListEmptyComponent={() => (
            <ListEmpty message="Que tal cadastrar um jogador" />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <Button
        variant="secondary"
        className="mb-4 w-full mt-5"
        label="Remover turma"
        size="default"
        onPress={handleRoveGroup}
      />
    </View>
  )
}
