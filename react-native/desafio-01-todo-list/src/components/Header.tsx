import { View, Text, Image } from "react-native"
import React from "react"

export default function Header() {
  return (
    <View className="bg-neutral-950  w-full items-center pt-20 h-44">
      <View className="flex justify-center">
        <Image
          style={{ width: 100, resizeMode: "stretch" }}
          source={require("@/assets/logo.png")}
        />
      </View>
    </View>
  )
}
