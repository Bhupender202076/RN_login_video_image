import React, { Component } from "react";
import Video from "react-native-video";
import { Text, View, styles } from "react-native";

const VideoPlayer = () => {
  // const videoPlayer = React.useRef();

  // const goFullScreen = () => {
  //   if (videoPlayer.current) {
  //     videoPlayer.current.presentFullscreenPlayer();
  //   }
  // };
  return (
    <View>
      <Video
        source={{
          url: "https://www.youtube.com/watch?v=P96VK_nkUOA&ab_channel=EngineerCodewala",
        }}
        videoWidth={1600}
        videoHeight={900}
        paused={false}
        // style={styles.BackgroundVideo}
        repeat={true}
      />
    </View>
  );
};

export default VideoPlayer;
