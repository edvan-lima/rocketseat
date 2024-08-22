import { View, Text, FlatList, TouchableOpacity, Image } from "react-native"
import React from "react"
import { Task, useTasksStore } from "@/store/tasks-store"
import { Ionicons, Octicons } from "@expo/vector-icons"
import { cn } from "@/lib/utils"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen"

export default function TaskListTodo() {
  const removeTask = useTasksStore((state) => state.removeTask)
  const toggleTaskDone = useTasksStore((state) => state.toggleTaskDone)
  const tasks = useTasksStore((state) => state.tasks)

  return (
    <>
      {tasks && tasks.length > 0 ? (
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View className="bg-neutral-800 border border-neutral-700/50 rounded-lg p-4 flex-row items-center justify-between mb-2">
              <View className="flex-row gap-3 items-center">
                <TouchableOpacity onPress={() => toggleTaskDone(item.id)}>
                  {item.done ? (
                    <Octicons
                      name="check-circle-fill"
                      size={hp(3)}
                      color="#8284FA"
                    />
                  ) : (
                    <Octicons name="circle" size={hp(3)} color="#4EA8DE" />
                  )}
                </TouchableOpacity>
                <Text
                  className={cn(
                    "text-lg",
                    item.done
                      ? "text-neutral-400 max-w-72"
                      : "text-neutral-100 max-w-72"
                  )}
                  style={{
                    textDecorationLine: item.done ? "line-through" : "none",
                  }}
                >
                  {item.text}
                </Text>
              </View>

              <TouchableOpacity onPress={() => removeTask(item.id)}>
                <Ionicons name="trash-outline" size={hp(3)} color="#808080" />
              </TouchableOpacity>
            </View>
          )}
        />
      ) : (
        <View className="flex-1 items-center justify-center border-t-2 border-neutral-800">
          <Image source={require("@/assets/Clipboard.png")} />
          <Text className="text-neutral-500 text-center mt-4">
            Você ainda não tem tarefas cadastradas
          </Text>
          <Text className="text-neutral-500 text-center font-light">
            Crie tarefas e organize seus itens a fazer
          </Text>
        </View>
      )}
    </>
  )
}
