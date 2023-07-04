import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
} from "react-native";

const ImageScreen = ({ route }) => {
  // console.log("routesparams>>>>>>>>>", route.params);
  const { ImageURL } = route.params;
  console.log("routesparams>>>>>>>>>", ImageURL);

  return (
    <View style={styles.container}>
      <Text>yoyoyoyoyo</Text>
      <ImageBackground
        source={{ uri: ImageURL }}
        resizeMode="cover"
        style={styles.ImageBackground}
      >
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  ImageBackground: {
    flex: 1,
    resizeMode: "cover",
    width: "50%",
    alignItems: "center",
  },
});
export default ImageScreen;
