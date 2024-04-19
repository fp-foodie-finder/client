import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabNavigator } from "./TabNavigator";
import Preference from "../screens/Preference";
import Register from "../screens/Register";
import Login from "../screens/Login";


const Stack = createNativeStackNavigator();


export default function StackNavigator() {



    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false,
                    tabBarStyle: { display: 'none' }
                }}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{
                    headerShown: false,
                    tabBarStyle: { display: 'none' }
                }}
            />
            <Stack.Screen
                name="Preference"
                component={Preference}
                options={{
                    headerShown: false,
                    tabBarStyle: { display: 'none' }
                }}
            />
            <Stack.Screen
                name="Home"
                component={TabNavigator}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>

    )
}