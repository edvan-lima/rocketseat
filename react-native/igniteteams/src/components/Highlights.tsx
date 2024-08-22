import { View, Text } from "react-native"
import React from "react"

type HighlightsProps = {
  title: string
  subtitle: string
}
export default function Highlights({ title, subtitle }: HighlightsProps) {
  return (
    <View className="w-full my-8">
      <Text className="text-neutral-200 font-heading text-2xl text-center">
        {title}
      </Text>
      <Text className="text-neutral-600 mt-1 font-subtitle text-lg text-center">
        {subtitle}
      </Text>
    </View>
  )
}
