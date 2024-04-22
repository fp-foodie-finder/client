import { View, Text, Button, TextInput } from "react-native";
import { StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { useState } from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

export default function AddPost() {
  const navigation = useNavigation();
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    try {
      const input = {
        imageUrl,
        description,
      };

      await axios({
        method: "post",
        url: "http://localhost:3000/post",
        data: input,
        headers: {
          Authorization: `Bearer ${await SecureStore.getItemAsync("token")}`,
        },
      });
      alert("Your post has been successfully created");
      navigation.navigate("HomeScreen");
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <>
      <View style={styles.container}>
        <Image
          source={require("../assets/FF-Background-Removed.png")}
          style={styles.backgroundImage}
        />
        <View>
          <Text
            style={{
              textAlign: "center",
              color: "black",
              marginBottom: 30,
              fontFamily: "Helvetica",
              fontSize: 20,
            }}>
            Share your journey!
          </Text>
        </View>
        <View style={{ alignItems: "flex-start", width: "70%" }}>
          <Text
            style={{
              alignSelf: "flex-start",
              color: "black",
              fontFamily: "Helvetica",
              fontSize: 15,
            }}>
            ImageUrl
          </Text>
        </View>
        <TextInput
          placeholder="https://example.com/image.jpg"
          style={{
            height: "5%",
            width: "70%",
            textAlign: "center",
            borderWidth: 0.5,
            borderRadius: 5,
            margin: 5,
            marginBottom: 15,
          }}
          name="imageUrl"
          onChangeText={setImageUrl}
        />
        <View style={{ alignItems: "flex-start", width: "70%" }}>
          <Text
            style={{
              alignSelf: "flex-start",
              color: "black",
              fontFamily: "Helvetica",
              fontSize: 15,
            }}>
            Description
          </Text>
        </View>
        <TextInput
          placeholder="it was a good day"
          style={{
            height: "30%",
            width: "70%",
            borderWidth: 0.5,
            textAlign: "center",
            borderRadius: 5,
            margin: 5,
            alignItems: "center",
          }}
          name="description"
          onChangeText={setDescription}
        />

        <View>
          <TouchableOpacity
            onPress={handleSubmit}
            style={{
              backgroundColor: "#F24822",
              padding: 10,
              borderRadius: 5,
              margin: 5,
              marginTop: 15,
              width: 150,
            }}>
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
                fontSize: 15,
              }}>
              Share!
            </Text>
          </TouchableOpacity>
          <View>
            <Button
              onPress={() => {
                navigation.navigate("HomeScreen");
              }}
              title="Back to home"
              color="#F24822"
            />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 150,
    backgroundColor: "white",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "contain",
    marginRight: 10,
  },
  contentContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});
