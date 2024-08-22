import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import { MaterialIcons } from "@expo/vector-icons"
import colors from "tailwindcss/colors"
import { useRouter } from "expo-router"

type PlayerCardProps = {
  name: string
  removePlayer: (name: string) => void
}
export default function PlayerCard({ name, removePlayer }: PlayerCardProps) {
  const router = useRouter()

  function onRemove() {
    removePlayer(name)
    router.push("players")
  }
  return (
    <View className="bg-neutral-800 h-14 flex-row items-center mb-2  rounded-md px-4 justify-between">
      <View className="flex-row items-center gap-2">
        <MaterialIcons name="person" size={24} color={colors.neutral["200"]} />
        <Text className="text-neutral-200 font-body">{name}</Text>
      </View>

      <TouchableOpacity
        className="justify-center items-center"
        onPress={onRemove}
      >
        <MaterialIcons name="close" size={24} color="#AA2834" />
      </TouchableOpacity>
    </View>
  )
}
