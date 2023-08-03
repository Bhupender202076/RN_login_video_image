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
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";

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
      <Text
        style={{
          fontSize: 24,
          alignSelf: "center",
          marginTop: "12%",
          backgroundColor: "#91D8E4",
          borderRadius:5,
          padding:10
        }}
      >
        <Entypo name="home" size={40} marginLeft={30} />
        Home,Sweet home
      </Text>
      <ScrollView style={styles.scrollView}>
        <View>
          <TouchableOpacity style={styles.button1}>
            <Text
              style={{
                fontSize: 24,
                padding: 50,
              }}
              onPress={WatchVideos}
            >
              <Entypo name="folder-video" size={40} marginLeft={30}  />
              watch Videos
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.button2}>
            <Text style={{ fontSize: 24, padding: 50 }} onPress={ExploreImages}>
              <Entypo name="images" size={40} marginLeft={30} />
              Explore Images
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button1}>
            <Text style={{ fontSize: 24, padding: 50 }} onPress={ExploreImages}>
              <Entypo name="music" size={40} marginLeft={30} />
              Music
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{backgroundColor:"#5A5A5A"},
  Text: {
    marginTop: 100,
    backgroundColor: "red",
  },
  root: {
    height: "90%",
    alignItems: "center",
    padding: 20,
    // bgColor: "#EAEFF2",
    // fgcolor: "gray",
  },

  button1: {
    alignItems: "center",
    backgroundColor: "#008E9B",
    marginVertical: "10%",
    marginLeft: "5%",
    width: "90%",
    borderRadius: 30,
  },

  button2: {
    marginVertical: "20%",
    alignItems: "center",
    backgroundColor: "#A1CCD1",
    width: "90%",
    marginLeft: "5%",
    borderRadius: 30,
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
