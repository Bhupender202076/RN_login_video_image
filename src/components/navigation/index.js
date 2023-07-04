import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignInScreen from "../../screens/SignInScreen";
import SignUpScreen from "../../screens/SignUpScreen";
import ConfirmEmailScreen from "../../screens/ConfirmEmailScreen";
import ForgotPasswordScreen from "../../screens/ForgotPasswordScreen";
import NewPasswordScreen from "../../screens/NewPasswordScreen";
import HomeScreen from "../../screens/HomeScreen";
import ImageGallery from "../../screens/ImageGallery/ImageGallery";
import WatchVideos from "../../screens/WatchVideos/WatchVideos";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import ImageScreen from "../Videos/ImageScreen/ImageScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ExploreImages" component={ImageGallery} />
        <Stack.Screen name="WatchVideos" component={WatchVideos} />
        <Stack.Screen name="VideoPlayer" component={VideoPlayer} />
        <Stack.Screen name="ImageScreen" component={ImageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
