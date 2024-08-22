import { View, Text } from "react-native"

import { Button } from "@/components/Button"

export default function IndexPage() {
  return (
    <View className="flex-1 justify-center items-center p-4 gap-4">
      <Text className="Nunito_400Regular font-nunito font-bold">
        Nunito_400Regular
      </Text>
      <Text className="font-nunito">Nunito_700Bold</Text>
      <Text className="font-nunito">Nunito_700Bold</Text>
      <Button className="w-full" label="Cadastrar refeição" />
      <View className="flex-row items-center justify-center gap-2 w-full">
        <Button
          variant="success"
          className="w-1/2 border-green-dark bg-green-light border"
          label="Sim"
        />
        <Button
          variant="cancel"
          className="w-1/2 border-red-dark bg-red-light border"
          label="Não"
        />
      </View>
    </View>
  )
}
