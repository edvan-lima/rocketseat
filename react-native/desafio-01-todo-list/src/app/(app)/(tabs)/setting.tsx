import { View, Text, TouchableOpacity } from "react-native"
import React, { useState } from "react"
import { useUserStore } from "@/store/user-store"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen"
import { Feather, Entypo } from "@expo/vector-icons"
import { useRouter } from "expo-router"
import Header from "@/components/Header"

export default function Setting() {
  const router = useRouter()
  const userStore = useUserStore()

  const email = userStore.data?.email

  return (
    <View className="flex-1">
      <Header />
      <View className=" border-b border-zinc-200 py-7">
        <TouchableOpacity
          onPress={() => router.push(`/account`)}
          className="mx-6 flex-row justify-between items-center"
        >
          <View>
            <Text className="text-lg text-zinc-700">Conta</Text>
            <Text className="text-zinc-500">{email}</Text>
          </View>
          <Entypo name="chevron-small-right" size={hp(3)} color="#3f3f46" />
        </TouchableOpacity>
      </View>
    </View>
  )
}
