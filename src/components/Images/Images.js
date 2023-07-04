import React from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Images = ({ ImageURL, description }) => {
  const navigation = useNavigation();

  const navigateImageScreen = () => {
    navigation.navigate("ImageScreen");
  };
  return (
    <TouchableOpacity onPress={navigateImageScreen}>
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={{
            width: 50,
            height: 70,
            uri: ImageURL,
          }}
        />
        <Text>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,

    justifyContent: "flex-start",
    alignItems: "center",
    // display: "flex",
    // flexWrap: "wrap",
    // flexDirection: "row",
  },
  tinyLogo: {
    width: "25%",
    // maxWidth: 300,
    height: 100,
    marginBottom: 10,
  },
});

export default Images;
