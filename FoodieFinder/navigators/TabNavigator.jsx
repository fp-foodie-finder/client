import AntDesign from 'react-native-vector-icons/AntDesign';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet, Text, View, useColorScheme } from 'react-native';
import AddPost from '../screens/AddPost';
import Home from '../screens/Home';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

export function TabNavigator() {
    const colorScheme = useColorScheme();
    const tabBarColor = colorScheme === 'dark' ? '#F24822' : '#F24822';
    const outlineColor = colorScheme === 'dark' ? 'black' : 'black';
    const circleColor = colorScheme === 'dark' ? '#F24822' : '#F24822';

    const navigation = useNavigation();

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
                    tabBarStyle: {
                        backgroundColor: tabBarColor,
                        borderTopWidth: 1,
                        borderTopColor: '#F24822',
                    },
                }}
            >
                <Tab.Screen
                    name='HomeScreen'
                    component={Home}
                    options={{
                        headerTitle: ' ',
                        tabBarIcon: ({ color, size }) => (
                            <TabBarIcon
                                onPress={() => navigation.navigate('AddPost')}
                                color={color}
                                size={size}
                                iconColor='white'
                                circleColor={circleColor}
                                outlineColor={outlineColor}
                            />
                        ),
                        tabBarShowLabel: false,
                    }}
                />
                <Tab.Screen
                    name='AddPost'
                    component={AddPost}
                    options={{
                        headerTitle: '',
                        tabBarStyle: { display: 'none' },
                        tabBarButton: () => null,
                        
                    }}
                />
            </Tab.Navigator>
        </>
    );
}

const TabBarIcon = ({ color, size, iconColor, circleColor, outlineColor, onPress }) => (
    <View style={styles.iconContainer}>
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.outlineCircle, { borderColor: outlineColor }]}>
                <View style={[styles.icon, { backgroundColor: circleColor }]}>
                    <AntDesign name="plus" color={iconColor} size={size * 3} />
                </View>
            </View>
        </TouchableOpacity>
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
