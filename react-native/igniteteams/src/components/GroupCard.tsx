import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native"
import React from "react"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import color from "tailwindcss/colors"
import { UsersThree } from "phosphor-react-native"
type GroupCardProps = TouchableOpacityProps & {
  title: string
}
export default function GroupCard({ title, ...rest }: GroupCardProps) {
  return (
    <View className="mb-3">
      <TouchableOpacity
        className="w-full h-20 bg-neutral-800 rounded-md flex-row items-center"
        {...rest}
      >
        <MaterialCommunityIcons
          style={{ marginLeft: 20 }}
          name="account-group"
          size={32}
          color="#00875F"
        />
        {/* <UsersThree
          style={{ marginLeft: 20 }}
          size={32}
          weight="fill"
          color="#00875F"
        /> */}

        <Text className="text-neutral-300 font-body text-lg ml-5">{title}</Text>
      </TouchableOpacity>
    </View>
  )
}
