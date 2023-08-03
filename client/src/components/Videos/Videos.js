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

const Videos = ({ ImageURL, description, VideoURL, videoData }) => {
  const navigation = useNavigation();

  const navigateVideoPlayer = () => {
    console.log("====================================");
    console.log(`sending this data : `, videoData);
    console.log("====================================");
    navigation.navigate("VideoPlayer", videoData);
  };

  return (
    <TouchableOpacity
      onPress={() => {
        navigateVideoPlayer();
      }}
    >
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
    // fontSize: 30 assv  ````````````````,
    borderRadius: 10,
  },
});

export default Videos;
