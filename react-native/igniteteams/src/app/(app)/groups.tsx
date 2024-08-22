import { StatusBar } from "expo-status-bar"
import {
  View,
  TouchableOpacityProps,
  FlatList,
  SafeAreaView,
} from "react-native"
import Header from "@/components/Header"
import Highlights from "@/components/Highlights"
import GroupCard from "@/components/GroupCard"
import { useState } from "react"
import ListEmpty from "@/components/ListEmpty"
import { Button } from "@/components/ui/Button"
import { useRouter } from "expo-router"
import { useGroupStore } from "@/store/groups-store"

export default function Groups() {
  const router = useRouter()
  const groupStore = useGroupStore()
  const [groups, setGroups] = useState<string[]>(groupStore.groups ?? [])

  function handleNewGroup() {
    router.push("newGroup")
  }

  function handleGoToGroup(group: string) {
    router.push({ pathname: "players", params: { group: group } })
  }

  return (
    <View className="flex-1 bg-neutral-900 container">
      <StatusBar style="light" />
      <Header />
      <Highlights title="Turmas" subtitle="jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupCard title={item} onPress={() => handleGoToGroup(item)} />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma" />
        )}
      />
      <Button
        className="mb-4"
        label="Criar nova turma"
        size="lg"
        onPress={handleNewGroup}
      />
    </View>
  )
}
