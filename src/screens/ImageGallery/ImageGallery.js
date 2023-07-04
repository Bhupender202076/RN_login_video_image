import React, { Component } from "react";
import { ScrollView, Text, View, StyleSheet, SafeAreaView } from "react-native";
import Images from "../../components/Images/Images";

const ImageGallery = () => {
  const Data = [
    {
      ImageURL: "https://picsum.photos/200/300",
    },
    { ImageURL: "https://picsum.photos/200/300" },
    { ImageURL: "https://picsum.photos/seed/picsum/200/300" },
    { ImageURL: "https://picsum.photos/200/300" },
    { ImageURL: "https://picsum.photos/id/1/200/300" },
    { ImageURL: "https://picsum.photos/200/300/?blur=2" },
    { ImageURL: "https://picsum.photos/200/300/?blur" },
    { ImageURL: "https://picsum.photos/200/300.jpg" },
    { ImageURL: "https://picsum.photos/v2/list" },
  ];

  return (
    <>
      <Text style={style.root}>Image Gallery </Text>
      <ScrollView>
        <View>
          <View>
            {Data.map((item) => (
              <Images description={item.description} ImageURL={item.ImageURL} />
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const style = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 40,
    marginTop: 30,
  },
});
export default ImageGallery;
