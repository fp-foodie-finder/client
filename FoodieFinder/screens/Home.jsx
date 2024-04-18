import { View, Text, TextInput } from "react-native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { ImageBackground } from "react-native";

export default function Home() {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/FF-Background-Removed.png')}
                style={styles.backgroundImage}
            >
                <View style={styles.circle} />
            </ImageBackground>
            <View style={styles.formContainer}>
                <TextInput
                    placeholder="What are u craving for?"
                    style={styles.input}
                />
                <View>
                    <Text style={styles.text}>
                        Having a problem with your craving for something? Ask us!
                    </Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFECEC'
    },
    backgroundImage: {
        flex: 0.5,
        marginTop: 250,
        marginLeft: 70,
        marginRight: 70,
        resizeMode: 'cover',
        alignItems: 'center',
        justifyContent: 'center',
    },
    circle: {
        width: 300,
        height: 300,
        borderRadius: 500,
        backgroundColor: 'rgba(228, 51, 51, 0.3)',
    },
    formContainer: {
        position: 'absolute',
        left: '10%',
        right: '10%',
        marginTop: 10
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#F24822',
        marginBottom: 10,
        paddingHorizontal: 10,
        marginTop: 10
    },
    button: {
        backgroundColor: '#F24822',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    text:{
        flex: 1,
        fontSize: 10,
        marginLeft: 6
    }
});
