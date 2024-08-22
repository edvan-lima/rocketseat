import { Slot, Stack, useRouter, useSegments } from "expo-router"
import { useEffect } from "react"
import "@/styles/globals.css"
import { useUserStore } from "@/store/user-store"

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
      router.replace("home")
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
      <Stack.Screen name="(app)/(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="signIn" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  )
}

export default function _layout() {
  return <MainLayout />
}
