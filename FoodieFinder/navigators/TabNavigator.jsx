import AntDesign from 'react-native-vector-icons/AntDesign';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Preference from '../screens/Preference';
import { Image, StyleSheet, Text, View, useColorScheme } from 'react-native';
import AddPost from '../screens/AddPost';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();

export function TabNavigator() {
    const colorScheme = useColorScheme();
    const tabBarColor = colorScheme === 'dark' ? '#F24822' : '#F24822';
    const outlineColor = colorScheme === 'dark' ? 'black' : 'black';
    const circleColor = colorScheme === 'dark' ? '#F24822' : '#F24822';

    return (
        <>
            <Tab.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: '#F24822' },
                    headerTintColor: '#fff',
                    headerRight: () => (
                        <AntDesign
                            name="user"
                            size={35}
                            style={{
                                display: 'flex',
                                marginBottom: 10,
                                padding: 3,
                                marginRight: 10
                            }}
                        />
                    ),
                    headerLeft: () => (
                        <View>
                            <Image
                                source={require('../assets/FF-2.png')}
                                style={{
                                    height: 35,
                                    aspectRatio: 0.9,
                                    marginTop: 10,
                                    marginLeft: 25,
                                    marginBottom: 20
                                }}
                            />
                        </View>
                    ),
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontFamily: 'Helvetica',
                        color: 'black',
                    },
                    tabBarStyle: {
                        backgroundColor: tabBarColor,
                        borderTopWidth: 1,
                        borderTopColor: '#F24822',
                    }
                }}
            >
                {/* <Tab.Screen
                    name=' '
                    component={AddPost}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <TabBarIcon
                                color={color}
                                size={size}
                                iconColor='white'
                                circleColor={circleColor}
                                outlineColor={outlineColor}
                            />
                        ),
                        headerLeft: () => (
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <AntDesign
                                    name="arrowleft"
                                    size={30}
                                    style={{
                                        display: 'flex',
                                        marginBottom: 10,
                                        padding: 3,
                                        marginLeft: 10
                                    }}
                                />
                                <Text style={{ color: 'black', fontSize: 20, marginBottom: 10 }}>Back</Text>
                            </View>
                        ),
                        headerRight: () => (
                            <View>
                                <Image
                                    source={require('../assets/FF-2.png')}
                                    style={{
                                        height: 35,
                                        aspectRatio: 0.9,
                                        marginTop: 10,
                                        marginRight: 25,
                                        marginBottom: 20
                                    }}
                                />
                            </View>
                        ),
                        tabBarStyle: { display: 'none' }
                    }}
                /> */}
                <Tab.Screen
                    name='   '
                    component={Home}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <TabBarIcon
                                color={color}
                                size={size}
                                iconColor='white'
                                circleColor={circleColor}
                                outlineColor={outlineColor}
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        </>
    );
}

const TabBarIcon = ({ color, size, iconColor, circleColor, outlineColor }) => (
    <View style={styles.iconContainer}>
        <View style={[styles.outlineCircle, { borderColor: outlineColor }]}>
            <View style={[styles.icon, { backgroundColor: circleColor }]}>
                <AntDesign name="plus" color={iconColor} size={size * 3} />
            </View>
        </View>
    </View>
);

const styles = StyleSheet.create({
    iconContainer: {
        position: 'absolute',
        bottom: 2.5,
        alignSelf: 'center',
    },
    outlineCircle: {
        borderWidth: 2,
        borderRadius: 55,
    },
    icon: {
        borderRadius: 50,
        padding: 8,
    },
});
