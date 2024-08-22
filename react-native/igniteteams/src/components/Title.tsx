import { View, Text } from "react-native"
import React from "react"

export function Title({ name }: { name: string }) {
  return <Text className="text-4xl text-white font-heading">{name}</Text>
}
