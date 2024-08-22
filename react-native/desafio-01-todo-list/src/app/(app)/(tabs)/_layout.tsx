import { Slot, Stack } from "expo-router"
import { Ionicons, Octicons } from "@expo/vector-icons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen"
import { View, Text } from "react-native"
import Home from "./home"
import Setting from "./setting"
import Menu from "./menu"
import Header from "@/components/Header"

export default function _layout() {
  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: true,
        tabBarLabelStyle: { fontSize: hp(1.6) },
        tabBarStyle: {
          backgroundColor: "#0a0a0a",
          height: 60,
          paddingBottom: hp(0.8),
          //paddingTop: hp(1),

          //position: "absolute",
          borderTopWidth: 0,
          elevation: 0,
          borderTopColor: "transparent",
        },
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "#404040",
      }}
    >
      <Tab.Screen
        name="menu"
        component={Menu}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name="menu" focused={focused} size={size} color={color} />
          ),
          tabBarLabel: "Menu",
        }}
      />
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Octicons
              name="calendar"
              focused={focused}
              size={size}
              color={color}
            />
          ),
          tabBarLabel: "Dia",
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="settings-outline"
              focused={focused}
              size={size}
              color={color}
            />
          ),
          tabBarLabel: "Configuração",
        }}
      />
    </Tab.Navigator>
  )
}
