import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import CustumInput from "../../components/CustumInput/CustumInput";
import CustumButton from "../../components/CustumButton/CustumButton";
import SocialSignInButtons from "../../components/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";

const ForgotPasswordScreen = () => {
  const [username, setUsername] = useState("");

  const navigation = useNavigation();

  const onSendPressed = () => {
    // console.warn("onConfirmPressed");
    navigation.navigate("NewPassword");
  };

  const onSignInPresses = () => {
    // console.warn("onSignInPressed");
    navigation.navigate("Sign");
  };

  // const OnResendPress = () => {
  //   console.warn("OnResendPress");
  // };

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} />
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <CustumInput
          placeholder="Username"
          value={username}
          setvalue={setUsername}
        />

        <CustumButton text="Send " onPress={onSendPressed} bgColor="#3B71F3" />

        <CustumButton
          text=" Back to Sign in"
          onPress={onSignInPresses}
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
    height: "90%",
    alignItems: "center",
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051C60",
    margin: 10,
  },

  text: {
    color: "gray",
    marginVertical: 10,
  },

  link: {
    color: "#FDB075",
  },
});
export default ForgotPasswordScreen;
