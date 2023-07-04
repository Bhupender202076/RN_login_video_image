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

const Videos = ({ ImageURL, description, VideoURL }) => {
  const navigation = useNavigation();

  const navigateVideoPlayer = () => {
    navigation.navigate("VideoPlayer");
  };

  return (
    <TouchableOpacity onPress={navigateVideoPlayer}>
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

    justifyContent: "center",
    alignItems: "center",
  },
  tinyLogo: {
    width: "95%",
    // maxWidth: 300,
    height: 200,
    marginBottom: 10,
  },
});

export default Videos;
