import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { RefreshControl, ScrollView } from "react-native-gesture-handler";


export default function UserProfile() {
    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);


    const toggleLike = () => {
        setIsLiked(!isLiked);
    };
    const toggleDislike = () => {
        setIsDisliked(!isDisliked);
    };

    return (
        <ScrollView style={{ backgroundColor:  'white'}}>
            <View style={styles.container}>
                {/* <View style={styles.circle}>
                    <ImageBackground
                        source={require('../assets/FF-Background-Removed.png')}
                        style={styles.backgroundImage}
                    />
                </View> */}
                <View style={styles.profileHeader}>
                    <Image
                        source={{
                            uri: 'https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?q=80&w=3715&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        }}
                        style={styles.avatarHeader}
                    />
                    <View>
                        <Text style={styles.username}> Ganjar </Text>
                        <Text style={styles.Pref}>Preference Food: Western Food</Text>
                    </View>
                </View>
                <View>
                    <View style={styles.containerCard}>
                        <View style={styles.header}>
                            <Image source={{ uri: `https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?q=80&w=3715&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D` }} style={styles.avatar} />
                            <View>
                                <Text style={styles.author}>Ganjar</Text>
                                <Text style={styles.time}>2 hours ago</Text>
                            </View>
                        </View>
                        <Text style={styles.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nam, fugit vel delectus libero, unde officiis enim incidunt cupiditate dolore impedit natus nobis minus rerum ratione magnam quam sunt. Dolorum.</Text>
                        <Image source={{ uri: `https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D` }} style={styles.image} />
                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <AntDesign
                                    onPress={toggleLike}
                                    name={isLiked ? 'like1' : 'like2'}
                                    size={25}
                                    style={{
                                        display: 'flex',
                                        padding: 5,
                                    }}
                                />
                                <Text style={{ marginRight: 10 }}>
                                    1
                                </Text>
                                <AntDesign
                                    onPress={toggleDislike}
                                    name={isDisliked ? 'dislike1' : 'dislike2'}
                                    size={25}
                                    style={{
                                        display: 'flex',
                                        padding: 5,
                                    }}
                                />
                                <Text>
                                    1
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <View style={styles.containerCard}>
                        <View style={styles.header}>
                            <Image source={{ uri: `https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?q=80&w=3715&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D` }} style={styles.avatar} />
                            <View>
                                <Text style={styles.author}>Ganjar</Text>
                                <Text style={styles.time}>2 hours ago</Text>
                            </View>
                        </View>
                        <Text style={styles.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nam, fugit vel delectus libero, unde officiis enim incidunt cupiditate dolore impedit natus nobis minus rerum ratione magnam quam sunt. Dolorum.</Text>
                        <Image source={{ uri: `https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D` }} style={styles.image} />
                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <AntDesign
                                    onPress={toggleLike}
                                    name={isLiked ? 'like1' : 'like2'}
                                    size={25}
                                    style={{
                                        display: 'flex',
                                        padding: 5,
                                    }}
                                />
                                <Text style={{ marginRight: 10 }}>
                                    1
                                </Text>
                                <AntDesign
                                    onPress={toggleDislike}
                                    name={isDisliked ? 'dislike1' : 'dislike2'}
                                    size={25}
                                    style={{
                                        display: 'flex',
                                        padding: 5,
                                    }}
                                />
                                <Text>
                                    1
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <View style={styles.containerCard}>
                        <View style={styles.header}>
                            <Image source={{ uri: `https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?q=80&w=3715&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D` }} style={styles.avatar} />
                            <View>
                                <Text style={styles.author}>Ganjar</Text>
                                <Text style={styles.time}>2 hours ago</Text>
                            </View>
                        </View>
                        <Text style={styles.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nam, fugit vel delectus libero, unde officiis enim incidunt cupiditate dolore impedit natus nobis minus rerum ratione magnam quam sunt. Dolorum.</Text>
                        <Image source={{ uri: `https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D` }} style={styles.image} />
                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <AntDesign
                                    onPress={toggleLike}
                                    name={isLiked ? 'like1' : 'like2'}
                                    size={25}
                                    style={{
                                        display: 'flex',
                                        padding: 5,
                                    }}
                                />
                                <Text style={{ marginRight: 10 }}>
                                    1
                                </Text>
                                <AntDesign
                                    onPress={toggleDislike}
                                    name={isDisliked ? 'dislike1' : 'dislike2'}
                                    size={25}
                                    style={{
                                        display: 'flex',
                                        padding: 5,
                                    }}
                                />
                                <Text>
                                    1
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
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
        flex:1,
        borderRadius: 8,
        padding: 15,
        elevation: 2,
        position: 'relative',
        opacity: 1,
        zIndex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 8,
    },
    author: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    time: {
        fontSize: 12,
        color: '#555',
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
        padding: 16,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginHorizontal: 15,
        borderStyle: 'solid'
    },
    avatarHeader: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 16,
        marginLeft: 16,
        marginTop: 20
    },
    username: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 20
    },
    settingsButton: {
        marginTop: 25,
        marginLeft: 120
    },
    settingsButtonPost: {
        position: 'absolute',
        right: 20,
        bottom: 10
    },
    Pref: {
        fontSize: 12,
        color: '#555',
        marginLeft:8,
        marginTop: 5
    }
});
