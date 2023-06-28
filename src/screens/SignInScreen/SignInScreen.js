import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import Logo from "../../../assets/images/bhupender-logo.jpg";
import CustumInput from "../../components/CustumInput/CustumInput";
import CustumButton from "../../components/CustumButton/CustumButton";
import SocialSignInButtons from "../../components/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";

const SignInScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const onSignInPressed = () => {
    console.warn("Sign in");
    //validate user

    navigation.navigate("Home");
  };

  const onForgotPasswordPressed = () => {
    // console.warn("onForgotPasswordPressed");
    navigation.navigate("ForgotPassword");
  };

  // const onSignInFacebook = () => {
  //   console.warn("onSignInFacebook");
  // };
  // const onSignInGoogle = () => {
  //   console.warn("onSignInGoogle");
  // };
  // const onSignInApple = () => {
  //   console.warn("onSignInApple");
  // };
  const onSignUpPresses = () => {
    // console.warn("onSignUpPressed");
    navigation.navigate("SignUp");
  };
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} />
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />
        <CustumInput
          placeholder="Username"
          value={username}
          setvalue={setUsername}
        />
        <CustumInput
          placeholder="Password"
          value={password}
          setvalue={setPassword}
          secureTextEntry
        />
        <CustumButton
          text="Sign In"
          onPress={onSignInPressed}
          bgColor="#3B71F3"
        />

        <CustumButton
          text="Forgot Password?"
          onPress={onForgotPasswordPressed}
          // type="TERTIARY"
          bgColor="#EAEFF2"
          fgcolor="gray"
        />

        <SocialSignInButtons />

        <CustumButton
          text=" Don't have an account? create one"
          onPress={onSignUpPresses}
          bgColor="#E7EAF4"
          fgcolor="#4765A9"
        />

        {/* <CustumButton text="Sign In with Facebook" onPress={onSignInFacebook} />
        <CustumButton text="Sign In with Google" onPress={onSignInGoogle} />
        <CustumButton text="Sign In Apple" onPress={onSignInApple} /> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: "70%",
    maxWidth: 300,
    height: 200,
  },
});
export default SignInScreen;
