import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native"
import React, { ReactNode } from "react"

const ios = Platform.OS === "ios"
export default function CustomKeyBoardView({
  children,
  inChat = false,
}: {
  children: ReactNode
  inChat?: boolean
}) {
  let kavConfig = {}
  let scrollViewConfig = {}
  if (inChat) {
    kavConfig = { keyboardVerticalOffset: 100 }
    scrollViewConfig = { contentContainerStyle: { flex: 1 } }
  }

  return (
    <KeyboardAvoidingView
      behavior={ios ? "padding" : "height"}
      style={{ flex: 1, backgroundColor: "#ffffff" }}
      {...kavConfig}
    >
      <ScrollView
        style={{ flex: 1 }}
        bounces={false}
        showsVerticalScrollIndicator={false}
        {...scrollViewConfig}
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
