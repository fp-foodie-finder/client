import { View, Text, Button, TextInput, ActivityIndicator } from "react-native";
import { StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { ImageBackground } from "react-native";

export default function AddPost() {
    const navigation = useNavigation();

    return (
        <>
            <View style={styles.container}>
                <Image source={require('../assets/FF-Background-Removed.png')} style={styles.backgroundImage} />
                <View>
                    <Text
                        style={{
                            textAlign: 'center',
                            color: 'black',
                            marginBottom: 30,
                            fontFamily: 'Helvetica',
                            // fontWeight: 'bold',
                            fontSize: 20,
                        }}
                    >
                        Share your journey!
                    </Text>
                </View>
                <View style={{ alignItems: 'flex-start', width: '70%' }}>
                    <Text
                        style={{
                            alignSelf: 'flex-start',
                            color: 'black',
                            fontFamily: 'Helvetica',
                            fontSize: 15,
                        }}
                    >
                        ImageUrl
                    </Text>
                </View>
                <TextInput
                    placeholder="https://example.com/image.jpg"
                    // onChangeText={setUsername}
                    // value={username}
                    style={{
                        height: '5%',
                        width: '70%',
                        textAlign: 'center',
                        borderWidth: 0.5,
                        borderRadius: 5,
                        margin: 5,
                        marginBottom: 15
                    }}
                />
                <View style={{ alignItems: 'flex-start', width: '70%' }}>
                    <Text
                        style={{
                            alignSelf: 'flex-start',
                            color: 'black',
                            fontFamily: 'Helvetica',
                            // fontWeight: 'bold',
                            fontSize: 15,
                        }}
                    >
                        Description
                    </Text>
                </View>
                <TextInput
                    placeholder="it was a good day"
                    // onChangeText={setPassword}
                    // value={password}
                    style={{
                        height: '30%',
                        width: '70%',
                        borderWidth: 0.5,
                        textAlign: 'center',
                        borderRadius: 5,
                        margin: 5,
                        alignItems: 'center'
                    }}
                />

                <View>
                    <TouchableOpacity
                        // onPress={handleSubmit}
                        style={{
                            backgroundColor: '#F24822',
                            padding: 10,
                            borderRadius: 5,
                            margin: 5,
                            marginTop: 15,
                            width: 150
                        }}

                    >
                        <Text
                            style={{
                                textAlign: "center",
                                color: "white",
                                fontWeight: "bold",
                                fontSize: 15,
                            }}
                        >
                            Share!
                        </Text>
                    </TouchableOpacity>
                    <View>
                        <Button onPress={() => {
                            navigation.navigate('HomeScreen')
                        }} title="Back to home" color="#F24822" />
                    </View>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: 150,
        backgroundColor: '#FFECEC',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'contain',
        marginRight: 10,
    },
    contentContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    }
});