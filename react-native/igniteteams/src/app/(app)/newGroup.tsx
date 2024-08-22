import { View, Text, TextInput, Alert } from "react-native"
import React, { useState } from "react"
import Highlights from "@/components/Highlights"
import { StatusBar } from "expo-status-bar"
import { Button } from "@/components/ui/Button"
import Header from "@/components/Header"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { useRouter } from "expo-router"
import { useGroupStore } from "@/store/groups-store"

export default function NewGroup() {
  const router = useRouter()
  const groupStore = useGroupStore()
  const [group, setGroup] = useState("")

  function handleNewGroup() {
    if (group.trim().length === 0) {
      Alert.alert("Novo grupo", "Informe o nome do grupo")
      return
    }

    const groupAlreadyExists = groupStore.groups.includes(group)
    if (groupAlreadyExists) {
      Alert.alert("Novo grupo", "Já existe um grupo cadastrado com este nome")
      setGroup("")
      return
    }
    groupStore.addGroup(group)
    router.push({ pathname: "players", params: { group: group } })
  }
  return (
    <View className="flex-1 bg-neutral-900 container">
      <StatusBar style="light" />

      <Header showBackButton />

      <View className="flex-1 items-center mt-40 ">
        <MaterialCommunityIcons
          name="account-group"
          size={52}
          color="#00875F"
        />

        <Highlights
          title="Nova turma"
          subtitle="Crie a turma para adicionar as pessoas"
        />
        <TextInput
          placeholder="Nome da turma"
          className="font-body h-14 placeholder:text-neutral-600 text-neutral-300 p-4 bg-neutral-950 w-full rounded-md"
          onChangeText={setGroup}
        />
        <Button
          className="mb-4 w-full mt-5"
          label="Criar"
          size="lg"
          onPress={handleNewGroup}
        />
      </View>
    </View>
  )
}
