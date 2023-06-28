import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import CustumInput from "../../components/CustumInput/CustumInput";
import CustumButton from "../../components/CustumButton/CustumButton";
import SocialSignInButtons from "../../components/SocialSignInButtons";

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState("");

  const onConfirmPressed = () => {
    console.warn("onConfirmPressed");
  };

  const onSignInPresses = () => {
    console.warn("onSignInPressed");
  };

  const OnResendPress = () => {
    console.warn("OnResendPress");
  };

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} />
      <View style={styles.root}>
        <Text style={styles.title}>confirm your email</Text>

        <CustumInput
          placeholder="Enter your confirmation code"
          value={code}
          setvalue={setCode}
        />

        <CustumButton
          text="Confirm"
          onPress={onConfirmPressed}
          bgColor="#E7EAF4"
          fgcolor="#4765A9"
        />

        <CustumButton
          text=" Resend code"
          onPress={OnResendPress}
          bgColor="#E7EAF4"
          fgcolor="#4765A9"
          borderWidth="2"
        />

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
export default ConfirmEmailScreen;
