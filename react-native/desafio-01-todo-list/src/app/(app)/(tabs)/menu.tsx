import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import Header from "@/components/Header"
import { Octicons } from "@expo/vector-icons"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen"
import { useRouter } from "expo-router"

export default function Menu() {
  const router = useRouter()

  return (
    <View className="flex-1">
      <Header />

      <TouchableOpacity
        onPress={() => router.push(`/home`)}
        className=" border-b border-zinc-200 py-7 px-8 flex-row items-center justify-between"
      >
        <Text className="font-semibold text-lg text-neutral-600">Dia</Text>
        <Octicons name="chevron-right" size={hp(3)} color="#808080" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push(`/home`)}
        className=" border-b border-zinc-200 py-7 px-8 flex-row items-center justify-between"
      >
        <Text className="font-semibold text-lg text-neutral-600">Semana</Text>
        <Octicons name="chevron-right" size={hp(3)} color="#808080" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push(`/home`)}
        className=" border-b border-zinc-200 py-7 px-8 flex-row items-center justify-between"
      >
        <Text className="font-semibold text-lg text-neutral-600">Mês</Text>
        <Octicons name="chevron-right" size={hp(3)} color="#808080" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push(`/account`)}
        className=" border-b border-zinc-200 py-7 px-8 flex-row items-center justify-between"
      >
        <Text className="font-semibold text-lg text-neutral-600">Conta</Text>
        <Octicons name="chevron-right" size={hp(3)} color="#808080" />
      </TouchableOpacity>
    </View>
  )
}
