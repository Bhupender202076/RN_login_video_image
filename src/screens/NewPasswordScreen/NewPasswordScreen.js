import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import CustumInput from "../../components/CustumInput/CustumInput";
import CustumButton from "../../components/CustumButton/CustumButton";
import SocialSignInButtons from "../../components/SocialSignInButtons";

const NewPasswordScreen = () => {
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const onSubmitPressed = () => {
    console.warn("onSubmitPressed");
  };

  const onSignInPresses = () => {
    console.warn("onSignInPressed");
  };

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} />
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <CustumInput placeholder="Code" value={code} setvalue={setCode} />

        <CustumInput
          placeholder="Enter your new password"
          value={setNewPassword}
          setvalue={setNewPassword}
        />

        <CustumButton
          text="Submit "
          onPress={onSubmitPressed}
          bgColor="#E7EAF4"
          fgcolor="#4765A9"
        />

        <CustumButton
          text=" Back to Sign in"
          onPress={onSignInPresses}
          bgColor="#E7EAF4"
          fgcolor="#4765A9"
        />
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
export default NewPasswordScreen;
