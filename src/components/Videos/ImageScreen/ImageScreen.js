import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
} from "react-native";

const ImageScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ ImageURL: "https://picsum.photos/200/300" }}
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
    width: "100%",
    alignItems: "center",
  },
});
export default ImageScreen;
