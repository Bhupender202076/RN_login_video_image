import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import CustumInput from "../../components/CustumInput/CustumInput";
import CustumButton from "../../components/CustumButton/CustumButton";
import SocialSignInButtons from "../../components/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";

const NewPasswordScreen = () => {
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const navigation = useNavigation();

  const onSubmitPressed = () => {
    // console.warn("onSubmitPressed");
    navigation.navigate("HomeScreen");
  };

  const onSignInPresses = () => {
    // console.warn("onSignInPressed");
    navigation.navigate("Signin");
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
          secureTextEntry={true}
        />

        <CustumButton
          text="Submit "
          onPress={onSubmitPressed}
          bgColor="#3B71F3"
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
