import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabNavigator } from "./TabNavigator";
import Preference from "../screens/Preference";
import Register from "../screens/Register";
import Login from "../screens/Login";
import AuthContext from "../context/auth";
import { useState } from "react";
import * as SecureStore from "expo-secure-store";
const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userId, setUserId] = useState(null);

  (async () => {
    const token = await SecureStore.getItemAsync("token");
    const userId = await SecureStore.getItemAsync("userId");

    if (token && userId) {
      setIsSignedIn(true);
      setUserId(userId);
    }
  })();
  return (
    <AuthContext.Provider value={{ isSignedIn, setIsSignedIn, userId }}>
      <Stack.Navigator>
        {!isSignedIn ? (
          <>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: false,
                tabBarStyle: { display: "none" },
              }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{
                headerShown: false,
                tabBarStyle: { display: "none" },
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Preference"
              component={Preference}
              options={{
                headerShown: false,
                tabBarStyle: { display: "none" },
              }}
            />
            <Stack.Screen
              name="Home"
              component={TabNavigator}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </AuthContext.Provider>
  );
}
