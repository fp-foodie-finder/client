import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import { SafeAreaView } from "react-native-safe-area-context";
import Register from "./screens/Register";
import Preference from "./screens/Preference";
import { TabNavigator } from "./navigators/TabNavigator";
import StackNavigator from "./navigators/StackNavigator";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          <StackNavigator />
        </SafeAreaView>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
