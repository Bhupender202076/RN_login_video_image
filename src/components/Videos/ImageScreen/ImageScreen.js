import React, { Component } from "react";
import { Text, View, StyleSheet, Image, StatusBar } from "react-native";

const ImageScreen = ({ route }) => {
  // console.log("routesparams>>>>>>>>>", route.params);
  const { ImageURL } = route.params;
  console.log("routesparams>>>>>>>>>", ImageURL);

  return (
    <View style={styles.container}>
      {/* <Text>yoyoyoyoyo</Text> */}
      <Image
        source={{ uri: ImageURL }}
        resizeMode="contain"
        style={styles.ImageBackground}
      />
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

    width: "100%",
    height: "100%",
    alignItems: "center",
  },
});
export default ImageScreen;
