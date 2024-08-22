import "@/styles/global.css"
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold
} from "@expo-google-fonts/nunito"
import { Stack } from "expo-router"

import { Loading } from "@/components/Loading"

const MainLayout = () => {
  return (
    <Stack>
      <Stack.Screen options={{ headerShown: false }} name="index" />
    </Stack>
  )
}

export default function _layout() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  return <MainLayout />
}
