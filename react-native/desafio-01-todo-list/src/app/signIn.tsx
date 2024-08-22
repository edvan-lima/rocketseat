import CustomKeyBoardView from "@/components/CustomKeyBoardView"
import Loading from "@/components/Loading"
import { api } from "@/lib/api"
import { useUserStore } from "@/store/user-store"
import { AppError } from "@/lib/app-error"
import { Octicons, EvilIcons, Fontisto, FontAwesome } from "@expo/vector-icons"
import { useRouter } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { useRef, useState } from "react"
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen"

export default function SignIn() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const emailRef = useRef("")
  const passwordRef = useRef("")

  const userStore = useUserStore()

  const handleLogin = async () => {
    if (!emailRef.current || !passwordRef.current) {
      Alert.alert("Login", "Preencha todos os campos!")
      return
    }

    try {
      setLoading(true)
      // const dataResponse = await api.post(`/login`, {
      //   email: emailRef.current,
      //   password: passwordRef.current,
      // })
      if (
        emailRef.current === "elima@gmail.com" &&
        passwordRef.current === "123"
      ) {
        Alert.alert("Login", "Logado com sucesso")
      } else {
        Alert.alert("Login", "email ou senha incorreto")
        return
      }
      const user = {
        role: "admin",
        email: "elima@gmail.com",
      }
      userStore.save(user)

      router.push("/home")
    } catch (error) {
      setLoading(false)
      const isAppError = error instanceof AppError
      const title = isAppError
        ? error.message
        : "Não foi possível fazer login no aplicativo. Tente novamente mais tarde"

      Alert.alert("Login", title)
    }
  }
  return (
    <CustomKeyBoardView>
      <StatusBar style="dark" />
      <View
        style={{ paddingTop: hp(8), paddingHorizontal: wp(5) }}
        className="flex-1 gap-12 bg-white"
      >
        <View className="items-center">
          <Image
            style={{ height: hp(30), aspectRatio: 1, borderRadius: 100 }}
            resizeMode="contain"
            source={require("@/assets/images/login-3.jpeg")}
          />
        </View>
        <View className="gap-10">
          <Text
            style={{ fontSize: hp(4) }}
            className="font-extrabold tracking-wide text-center text-neutral-800"
          >
            Login
          </Text>
          <View className="gap-4">
            <View
              style={{ height: hp(7) }}
              className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl"
            >
              <Octicons name="mail" size={hp(2.7)} color="gray" />
              <TextInput
                onChangeText={(value) => (emailRef.current = value)}
                className="flex-1 font-semibold"
                style={{ height: hp(7) }}
                placeholder="Email"
                placeholderTextColor={"gray"}
              />
            </View>
            <View className="gap-3">
              <View
                style={{ height: hp(7) }}
                className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl"
              >
                <Octicons name="lock" size={hp(2.7)} color="gray" />
                <TextInput
                  onChangeText={(value) => (passwordRef.current = value)}
                  className="flex-1 font-semibold"
                  style={{ height: hp(7) }}
                  placeholder="Senha"
                  placeholderTextColor={"gray"}
                  secureTextEntry
                />
              </View>
              <Text
                style={{ fontSize: hp(1.8) }}
                className="font-semibold text-right text-neutral-500"
              >
                Esqueceu a senha?
              </Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={handleLogin}
                style={{ height: hp(6.5) }}
                className="bg-red-500 rounded-xl justify-center items-center flex-row"
              >
                {loading && (
                  <View className="mr-2   animate-spin items-center">
                    <FontAwesome name="spinner" size={hp(1.8)} color="white" />
                  </View>
                )}
                <Text
                  style={{ fontSize: hp(2.7) }}
                  className="text-white font-bold tracking-wider"
                >
                  Entrar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </CustomKeyBoardView>
  )
}
