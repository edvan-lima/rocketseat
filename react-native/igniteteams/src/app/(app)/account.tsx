import { View, Text, TouchableOpacity, Button, Alert } from "react-native"
import React, { useState } from "react"
import { useUserStore } from "@/store/user-store"
import { Ionicons } from "@expo/vector-icons"
import * as Clipboard from "expo-clipboard"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen"

export default function Account() {
  const userStore = useUserStore()

  const email = userStore.data?.email

  function handleSignOut() {
    userStore.remove()
  }

  async function copyToClipboard() {
    await Clipboard.setStringAsync(email ?? "")
  }

  return (
    <View className="bg-white flex-1 justify-start">
      <View className=" border-b border-zinc-200 py-7">
        <TouchableOpacity
          onPress={copyToClipboard}
          className="mx-6 flex-row justify-between items-center"
        >
          <View>
            <Text className="text-lg text-zinc-700">E-mail</Text>
            <Text className="text-zinc-500">{email}</Text>
          </View>
          <Ionicons name="copy-outline" size={hp(3)} color="#71717a" />
        </TouchableOpacity>
      </View>
      <View className=" border-b border-zinc-200 py-7">
        <TouchableOpacity
          onPress={handleSignOut}
          className="mx-6 flex-row justify-between items-center"
        >
          <Text className="text-lg text-zinc-700">Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
