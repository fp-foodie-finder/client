import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Modal } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";






export default function PreferenceProfile() {
    const navigation = useNavigation();

    const [selectedValue, setSelectedValue] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedLabel, setSelectedLabel] = useState('');
    const showModal = () => setModalVisible(true);
    const hideModal = () => setModalVisible(false);

    return (
        <>
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
                        <Text style={styles.username}> John Doe </Text>
                    </View>
                </View>
                <View>
                    <View style={styles.row}>
                        <Text style={styles.label}> Full Name </Text>
                        <Text style={styles.value}>John Doe Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi recusandae molestiae nemo!</Text>
                    </View>
                </View>
                <View>
                    <View style={styles.row}>
                        <Text style={styles.labelEmail}> Email </Text>
                        <Text style={styles.value}>JohnDoe@mail.com</Text>
                    </View>
                </View>
                <View>
                    <View style={styles.row}>
                        <Text style={styles.labelPref}> Preference </Text>
                        <TextInput
                            placeholder="your preference"
                            value={selectedLabel}
                            style={{
                                flexDirection: 'row',
                                flex:0.8,
                                height: 40,
                                textAlign: 'center',
                                borderWidth: 0.5,
                                borderRadius: 5,
                                marginBottom: 20,
                                paddingHorizontal: 10,
                            }}
                            onPressIn={showModal}
                            editable={false}
                        />
                    </View>
                    <Modal
                        visible={modalVisible}
                        transparent={true}
                        animationType="slide"
                        onRequestClose={hideModal}
                    >
                        <View style={styles.modalContainer}>
                            <Picker
                                selectedValue={selectedValue}
                                onValueChange={(itemValue, itemIndex) => {
                                    setSelectedValue(itemValue);
                                    setSelectedLabel(itemIndex === 0 ? '' : itemIndex === 1 ? 'Western Food' : itemIndex === 2 ? 'Indian Food' : itemIndex === 3 ? 'Chinese Food' : itemIndex === 4 ? 'Indonesian Food' : '');
                                    hideModal();
                                }}
                                style={styles.picker}
                            >
                                <Picker.Item label="Select your preference" value="" />
                                <Picker.Item label="Western Food" value="Western Food" />
                                <Picker.Item label="Indian Food" value="Indian Food" />
                                <Picker.Item label="Chinese Food" value="Chinese Food" />
                                <Picker.Item label="Indonesian Food" value="Indonesian Food" />
                            </Picker>
                        </View>
                    </Modal>
                </View>
                <View>
                    <TouchableOpacity
                        title="save"
                        onPress={() => navigation.navigate('MainProfile') }
                        style={{
                            backgroundColor: '#F24822',
                            padding: 10,
                            borderRadius: 5,
                            margin: 5,
                            marginTop: 15,
                            marginBottom: 30,
                            width: 200,
                            alignSelf: 'center',
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
                            Save My Change
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        title="logout"
                        onPress={() => navigation.navigate('Login') }
                        style={{
                            padding: 10,
                            borderRadius: 5,
                            margin: 5,
                            marginTop: 15,
                            marginBottom: 30,
                            width: 200,
                            alignSelf: 'center',
                        }}

                    >
                        <Text
                            style={{
                                textAlign: "center",
                                color: "red",
                                fontWeight: "bold",
                                fontSize: 15,
                            }}
                        >
                            Log Out
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>

        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    profileHeader: {
        alignItems: "center",
        padding: 10,
    },
    avatarHeader: {
        width: 200,
        height: 200,
        borderRadius: 200,
        marginTop: 30
    },
    username: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 20
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
        alignItems: 'center'
    },
    label: {
        marginLeft: 20,
        fontSize: 18,
        marginRight: 50
    },
    labelEmail: {
        marginLeft: 20,
        fontSize: 18,
        marginRight: 85
    },
    labelPref: {
        marginLeft: 20,
        fontSize: 18,
        marginRight: 90,
        marginBottom: 15
    },
    value: {
        flex: 1,
        marginLeft: 50,
        marginRight: 10
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    picker: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 20,
        fontFamily: 'Cochin',
    },
});