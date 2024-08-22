import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native"
import React from "react"
import { cn } from "@/lib/utils"
type FilterProps = TouchableOpacityProps & {
  isActive?: boolean
  title: string
}
export default function Filter({
  isActive = false,
  title,
  ...res
}: FilterProps) {
  return (
    <TouchableOpacity
      className={cn(
        "rounded mr-3 h-10 w-20 items-center justify-center",
        isActive && "border-primary border"
      )}
      {...res}
    >
      <Text className="font-bold text-neutral-200 uppercase">{title}</Text>
    </TouchableOpacity>
  )
}
