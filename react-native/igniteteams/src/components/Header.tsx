import { View, Text, Image, TouchableOpacity } from "react-native"
import React from "react"
import { Feather } from "@expo/vector-icons"
import color from "tailwindcss/colors"
import { useRouter } from "expo-router"

type HeaderProps = {
  showBackButton?: boolean
}
export default function Header({ showBackButton = false }: HeaderProps) {
  const router = useRouter()

  function handleGoBack() {
    router.replace("groups")
  }

  return (
    <View className="flex-row justify-center items-center pt-14">
      {showBackButton && (
        <TouchableOpacity className="flex-1" onPress={handleGoBack}>
          <Feather name="chevron-left" size={40} color={color.neutral["300"]} />
        </TouchableOpacity>
      )}

      <Image
        style={{ height: 55, width: 46 }}
        source={require("@/assets/logo.png")}
      />
    </View>
  )
}
