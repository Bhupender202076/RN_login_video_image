import React, { Component, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Video from "react-native-video";
import { Text, View, StyleSheet } from "react-native";
// import VideoPlayer from "react-native-video-player";

const VideoPlayerScreen = () => {
  // const videoPlayer = React.useRef();

  // const goFullScreen = () => {
  //   if (videoPlayer.current) {
  //     videoPlayer.current.presentFullscreenPlayer();
  //   }
  // };
  console.log(`the props we got on video player : `, location.videoData);

  return (
    <VideoPlayer
      video={{
        uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      }}
      videoWidth={1600}
      videoHeight={900}
      thumbnail={{
        uri: "https://fastly.picsum.photos/id/43/1280/831.jpg?hmac=glK-rQ0ppFClW-lvjk9FqEWKog07XkOxJf6Xg_cU9LI",
      }}
    />

    // <Video
    //   source={{
    //     uri: "https://assets.mixkit.co/videos/download/mixkit-countryside-meadow-4075.mp4",
    //   }}
    //   // videoWidth={1600}
    //   // videoHeight={900}
    //   paused={false}
    //   onError={(e) => {
    //     console.log(`Error in video player : `, e);
    //   }}
    //   style={styles.backgroundVideo}
    //   repeat={true}
    //   resizeMode="cover"
    // />
  );
};

const styles = StyleSheet.create({
  backgroundVideo: {
    alignItems: "center",
    padding: 20,
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 40,
    marginTop: 30,
  },
});

export default VideoPlayerScreen;
