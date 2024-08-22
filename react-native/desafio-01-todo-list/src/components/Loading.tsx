import LottieView from "lottie-react-native"
import { View, Text } from "react-native"

export default function Loading({ size }: { size: number }) {
  return (
    <View style={{ height: size, aspectRatio: 1 }}>
      <LottieView
        style={{ flex: 1 }}
        source={require("@/assets/images/loading-1.json")}
        autoPlay
        loop
      />
    </View>
  )
}
