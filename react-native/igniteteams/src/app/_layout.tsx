import { Stack, useRouter, useSegments } from "expo-router"
import { useEffect } from "react"
import "@/styles/globals.css"
import { useUserStore } from "@/store/user-store"
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from "@expo-google-fonts/roboto"
import { Loading } from "@/components/Loading"

const MainLayout = () => {
  const userStore = useUserStore()
  const segments = useSegments()
  const router = useRouter()

  const isAuthenticated = !!userStore.data?.email

  useEffect(() => {
    if (typeof isAuthenticated === "undefined") return
    const inApp = segments[0] === "(app)"
    const isAuthPage = segments[0] === "signIn" || segments[0] === "signUp"

    if (isAuthenticated && !inApp) {
      // redirect to home
      router.replace("groups")
    } else if (!isAuthenticated && !isAuthPage) {
      // redirect to signIn
      router.replace("signIn")
    }
  }, [isAuthenticated, segments])

  //return <Slot />

  return (
    <Stack>
      <Stack.Screen
        name="(app)/account"
        options={{
          title: "Conta",
          headerTintColor: "#F5F5F5",
          headerStyle: {
            backgroundColor: "#0a0a0a",
          },
        }}
      />
      <Stack.Screen options={{ headerShown: false }} name="signIn" />
      <Stack.Screen options={{ headerShown: false }} name="index" />
      <Stack.Screen options={{ headerShown: false }} name="(app)/newGroup" />
      <Stack.Screen options={{ headerShown: false }} name="(app)/groups" />
      <Stack.Screen options={{ headerShown: false }} name="(app)/players" />
    </Stack>
  )
}

export default function _layout() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  return <MainLayout />
}
