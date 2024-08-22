import { StatusBar } from "expo-status-bar"
import { View, ActivityIndicator } from "react-native"
import colors from "tailwindcss/colors"

export function Loading() {
  return (
    <View className="flex-1 items-center justify-center bg-neutral-900">
      <StatusBar style="light" />
      <ActivityIndicator color={colors.green[700]} size={30} />
    </View>
  )
}
