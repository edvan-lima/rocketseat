import { View, Text } from "react-native"
import React from "react"
type ListEmptyProps = {
  message: string
}
export default function ListEmpty({ message }: ListEmptyProps) {
  return (
    <View className="container flex-1 items-center justify-center">
      <Text className="items-center text-lg font-body text-neutral-600">
        {message}
      </Text>
    </View>
  )
}
