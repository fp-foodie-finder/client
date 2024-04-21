import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { RefreshControl, ScrollView } from "react-native-gesture-handler";


export default function Favourite() {


    return (
        <>
            <ScrollView style={{ backgroundColor: 'white' }}>
                <View style={styles.container}>
                    <View style={styles.profileHeader}>
                        <View>
                            <Text style={styles.username}>
                                My Favorites
                            </Text>
                        </View>
                    </View>
                    <View style={styles.containerCard}>
                        <View style={styles.header}>
                            <Image source={{ uri: `https://places.googleapis.com/v1/places/ChIJfcIV9oDxaS4R6itwY7-PVYM/photos/ATplDJZO0xdoCJ5e2qzMwtjfRtd90oyX-DCDD3BCvTJ8HuCH2uYcrrftXXy6XYCYjaBhtfhVDulBH6AllDAvpIYIBIdIjnPRL8gidikUS14V0auUgVdrpayuFF-10iFZ4gmFnqzDhZYQeSxU6oWLn8H1cWfHhrT4soBmvDaI/media?key=AIzaSyA5TgEC55u00aGOvmvgCS2sDxQwi5JiuYY&maxWidthPx=2880` }} style={styles.avatar} />
                        </View>
                        <View style={styles.headerText}>
                            <Text style={styles.author}>Pizza Hut Ristorante</Text>
                            <Text style={styles.address}>Jl. Kemang Raya No.77, RT.4/RW.2, Bangka, Kec. Mampang Prpt., Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12730, Indonesia</Text>
                            <View style={styles.ratingContainer}>
                                <Text style={styles.rating}>⭐ 4.6</Text>
                            </View>
                            <Text style={styles.delete}>Delete</Text>
                        </View>
                    </View>
                    <View style={styles.containerCard}>
                        <View style={styles.header}>
                            <Image source={{ uri: `https://places.googleapis.com/v1/places/ChIJfcIV9oDxaS4R6itwY7-PVYM/photos/ATplDJZO0xdoCJ5e2qzMwtjfRtd90oyX-DCDD3BCvTJ8HuCH2uYcrrftXXy6XYCYjaBhtfhVDulBH6AllDAvpIYIBIdIjnPRL8gidikUS14V0auUgVdrpayuFF-10iFZ4gmFnqzDhZYQeSxU6oWLn8H1cWfHhrT4soBmvDaI/media?key=AIzaSyA5TgEC55u00aGOvmvgCS2sDxQwi5JiuYY&maxWidthPx=2880` }} style={styles.avatar} />
                        </View>
                        <View style={styles.headerText}>
                            <Text style={styles.author}>Pizza Hut Ristorante</Text>
                            <Text style={styles.address}>Jl. Kemang Raya No.77, RT.4/RW.2, Bangka, Kec. Mampang Prpt., Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12730, Indonesia</Text>
                            <View style={styles.ratingContainer}>
                                <Text style={styles.rating}>⭐ 4.6</Text>
                            </View>
                            <Text style={styles.delete}>Delete</Text>
                        </View>
                    </View>
                </View>

            </ScrollView>
        </>
    )
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        alignItems: 'center',
        justifyContent: 'center',
    },
    circle: {
        width: 300,
        height: 300,
        borderRadius: 150,
        overflow: 'hidden',
        marginTop: 250,
        marginLeft: 70,
        marginRight: 70,
        backgroundColor: 'rgba(228, 51, 51, 0.3)',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
    },
    formContainer: {
        left: '10%',
        right: '10%',
        marginTop: 10,
        width: 350
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
    text: {
        flex: 1,
        fontSize: 12,
        marginLeft: 6
    },
    containerCard: {
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOpacity: 0.5,
        shadowOffset: 1,
        marginBottom: 16,
        elevation: 2,
        position: 'relative',
        opacity: 1,
        zIndex: 1,
        marginLeft: 10,
        marginRight: 10
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: '100%',
        height: 180,
        marginRight: 8,
    },
    author: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 5
    },
    address: {
        fontSize: 14,
        color: '#555',
        marginBottom: 5
    },
    content: {
        fontSize: 14,
        marginBottom: 8,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 8,
    },
    likeButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 16,
    },
    commentButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileHeader: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        borderStyle: 'solid'
    },
    avatarHeader: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 16,
        marginTop: 20
    },
    username: {
        fontSize: 24,
        fontWeight: "bold",
        marginRight: 25
    },
    settingsButtonPost: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 220,
    },
    insight: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    settingsButton: {
        flex: 1,
        marginTop: 25,
        alignItems: 'flex-end'
    },
    // loveButton: {
    //     flex: 1,
    //     marginTop: 25,
    //     marginLeft: 20,
    //     marginRight: 15
    // },
    fav: {
        color: '#555',
        marginLeft: 5,
        marginTop: 2
    },
    headerText: {
        padding: 10
    },
    ratingContainer: {
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
        alignSelf: 'flex-start',
        marginTop: 5,
    },
    rating: {
        fontSize: 16,
    },
    delete: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        color: 'red',
        fontWeight: 'bold',
    },
});