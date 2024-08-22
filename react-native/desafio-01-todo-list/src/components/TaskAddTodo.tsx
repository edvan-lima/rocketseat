import React, { useState } from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import { Feather } from "@expo/vector-icons"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen"
import { Task, useTasksStore } from "@/store/tasks-store"
import { Badge } from "@/components/ui/Badge"

export function TaskAddTodo() {
  const addTask = useTasksStore((state) => state.addTask)
  const [taskText, setTaskText] = useState("")
  const tasks = useTasksStore((state) => state.tasks)
  const taskListLength = tasks.length
  const taskListDoneLength = tasks.filter((task) => task.done).length

  const handleAddTask = () => {
    const newTask: Task = {
      id: Date.now().toString(),
      text: taskText,
      done: false,
      createdAt: new Date(),
    }
    addTask(newTask)
    setTaskText("")
  }

  return (
    <>
      <View className="flex flex-row gap-1 -mt-6">
        <TextInput
          className="flex-1 border border-input py-3.5 px-4 rounded-lg placeholder:text-neutral-500 text-lg text-neutral-200 bg-neutral-800 focus:border-[#1E6F9F]"
          placeholder="Adicione uma nova tarefa"
          value={taskText}
          onChangeText={setTaskText}
        />
        <TouchableOpacity
          className="bg-[#1E6F9F] justify-center py-2 px-4 rounded-lg border"
          onPress={handleAddTask}
        >
          <Feather name="plus-circle" size={hp(2.8)} color="#F2F2F2" />
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-between  py-6 mt-2">
        <View className="flex-row gap-2 items-center">
          <Text className="text-[#4EA8DE]">Criadas</Text>
          <Badge variant="secondary" label={taskListLength.toString()} />
        </View>

        <View className="flex-row gap-2 items-center">
          <Text className="text-[#8284FA]">Concluídas</Text>
          <Badge variant="secondary" label={taskListDoneLength.toString()} />
        </View>
      </View>
    </>
  )
}
