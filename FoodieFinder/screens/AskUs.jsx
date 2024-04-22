import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";






export default function AskUs() {



    return (
        <>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : null} keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 80}>
                <View style={styles.container}>
                    <View style={styles.chatContainer}>
                        <ScrollView>
                            {/* disini chat bubble */}
                            <View style={[styles.chatBubble, styles.selfChatBubble]}>
                                <Text style={styles.chatText}>Hallo chatGPT daya sangat lapar banget bos</Text>
                            </View>
                            <View style={[styles.chatBubble, styles.otherChatBubble]}>
                                <Text style={styles.chatText}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum atque doloribus nisi dolores, nam nobis, iusto quo alias vero illo quibusdam at aperiam, tempore ipsa et minus ex perferendis! Repellendus?</Text>
                            </View>
                            <View style={[styles.chatBubble, styles.selfChatBubble]}>
                                <Text style={styles.chatText}>jangan dijawab pake lorem bangsat</Text>
                            </View>
                            <View style={[styles.chatBubble, styles.otherChatBubble]}>
                                <Text style={styles.chatText}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum atque doloribus nisi dolores, nam nobis, iusto quo alias vero illo quibusdam at aperiam, tempore ipsa et minus ex perferendis! Repellendus?</Text>
                            </View>
                        </ScrollView>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                // value={newMessage}
                                // onChangeText={(text) => setNewMessage(text)}
                                placeholder="Type a message..."
                            // onSubmitEditing={handleSubmit}
                            />
                            <TouchableOpacity
                                // onPress={handleClick} 
                                style={styles.sendButton}
                            >
                                <Text style={styles.sendButtonText}>Send</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    chatTitle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 5,
    },
    onlineUsers: {
        marginTop: 20,
    },
    boldText: {
        fontWeight: 'bold',
    },
    userButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    onlineIndicator: {
        width: 10,
        height: 10,
        backgroundColor: 'green',
        borderRadius: 5,
        marginRight: 10,
    },
    userName: {
        fontSize: 16,
    },
    chatContainer: {
        flex: 1,
        padding: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        bottom: 35,
    },
    sendButton: {
        backgroundColor: '#F24822',
        paddingHorizontal: 15,
        borderRadius: 5,
        height: '150%',
    },
    sendButtonText: {
        color: 'white',
        fontWeight: 'bold',
        marginTop: 15
    },
    input: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginRight: 10,
        height: '150%',
        borderWidth: 1
    },
    selfChatBubble: {
        alignSelf: 'flex-end',
        alignItems: 'flex-end',
        backgroundColor: '#DCF8C6', 
    },
    otherChatBubble: {
        alignSelf: 'flex-start',
        alignItems: 'flex-start', 
        backgroundColor: '#EAEAEA',
    },
    chatText: {
        fontSize: 18,
    },
    chatBubble: {
        maxWidth: '80%',
        padding: 10,
        borderRadius: 10,
        marginBottom: 15,
        flexWrap: 'wrap', 
        overflow: 'hidden'
    },
});