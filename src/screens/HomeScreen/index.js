import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Navigation from "../../components/navigation";
import Videos from "../../components/Videos/Videos";
import { useNavigation } from "@react-navigation/native";
// import CreateThumbnail from "react-native-create-thumbnail";

const Index = () => {
  const navigation = useNavigation();
  const ExploreImages = () => {
    navigation.navigate("ExploreImages");
  };

  const WatchVideos = () => {
    navigation.navigate("WatchVideos");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 24, alignSelf: "center", marginTop: "12%" }}>
        Home,Sweet home
      </Text>
      <ScrollView style={styles.scrollView}>
        <View>
          <TouchableOpacity style={styles.button1}>
            <Text
              style={{
                fontSize: 24,
                padding: 40,
              }}
              onPress={WatchVideos}
            >
              watch Videos
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.button2}>
            <Text style={{ fontSize: 24, padding: 40 }} onPress={ExploreImages}>
              Explore Images
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Text: {
    marginTop: 100,
    backgroundColor: "red",
  },
  root: {
    height: "90%",
    alignItems: "center",
    padding: 20,
  },

  button1: {
    alignItems: "center",
    backgroundColor: "#40d5ff",
    marginVertical: "10%",
  },

  button2: {
    marginVertical: "20%",
    alignItems: "center",
    backgroundColor: "#ff4040",

    padding: 10,
  },
});

export default Index;

{
  /* <Videos
  description="React Native Video Autoplay in Flatlist on Scroll 🔥 | In Hindi ✅ |
  Engineer Codewala"
  imageURL="https://picsum.photos/200/300"
/> */
}
{
  /* <Videos
Vedio={{
uri: "https://www.youtube.com/watch?v=2hgLnBZZVIc&ab_channel=SGCodes",
}}
thumbnail={{
uri: "https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
}}
endthumbnail={{
uri: "https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
}}
showDuration={true}
autoplay
controlsTimeout={2000}
disableControlsAutoHide={true}
// muted= {true}
defaultMuted={true}
pauseOnPress={true}
/> */
}
