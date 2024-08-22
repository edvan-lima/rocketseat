import { StatusBar } from "expo-status-bar"
import { View } from "react-native"
import Header from "@/components/Header"
import { TaskAddTodo } from "@/components/TaskAddTodo"
import TaskListTodo from "@/components/TaskListTodo"
export default function Home() {
  return (
    <View className="flex-1 bg-neutral-900">
      <StatusBar style="light" />
      <Header />
      <View className="container flex-1">
        <TaskAddTodo />
        <TaskListTodo />
      </View>
    </View>
  )
}
