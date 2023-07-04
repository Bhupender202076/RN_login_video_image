import React, { Component } from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import Videos from "../../components/Videos/Videos";

const WatchVideos = () => {
  const Data = [
    {
      ImageURL: "https://picsum.photos/200/300",
      VideoURL:
        "https://www.youtube.com/watch?v=P96VK_nkUOA&ab_channel=EngineerCodewala",
      description:
        "React Native Video Autoplay in Flatlist on Scroll 🔥 | In Hindi ✅ | Engineer Codewala",
    },
    {
      ImageURL: "https://picsum.photos/seed/picsum/200/300",
      description:
        "React Native Stack , Drawer and Bottom Navigator 🔥 | In Hindi ✅ | in Hindi ✅ | Engineer Codewala",
      VideoURL:
        "https://www.youtube.com/watch?v=P96VK_nkUOA&ab_channel=EngineerCodewala",
    },
    {
      ImageURL: "https://picsum.photos/200/300?grayscale",
      description:
        "Master React Native - What is Component ? 🔥 | Step by Step in Hindi | Engineer Codewala",
      VideoURL:
        "https://www.youtube.com/watch?v=P96VK_nkUOA&ab_channel=EngineerCodewala",
    },
    {
      ImageURL: "https://picsum.photos/200/300/?blur",
      description:
        "Home Page of Online Education App in React Native Project in Hindi",
      VideoURL:
        "https://www.youtube.com/watch?v=P96VK_nkUOA&ab_channel=EngineerCodewala",
    },
    {
      ImageURL: "https://picsum.photos/200/300/?blur=2",
      description: "React Native Online Education App Final Touch ...........",
      VideoURL:
        "https://www.youtube.com/watch?v=P96VK_nkUOA&ab_channel=EngineerCodewala",
    },
  ];

  return (
    <ScrollView>
      <View>
        <Text style={style.root}>Vedios </Text>
        {Data.map((item) => (
          <Videos
            description={item.description}
            ImageURL={item.ImageURL}
            VideoURL={item.VideoURL}
          />
        ))}
      </View>
    </ScrollView>
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

export default WatchVideos;
