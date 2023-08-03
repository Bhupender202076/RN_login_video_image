import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView, Alert } from "react-native";
import CustumInput from "../../components/CustumInput/CustumInput";
import CustumButton from "../../components/CustumButton/CustumButton";
import SocialSignInButtons from "../../components/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
  const [username, setUsername] = useState("");
  const [email, seEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const navigation = useNavigation();

  const onRegisterPressed = () => {
    // username === "" && email === "" && password === "" && passwordRepeat === "";
    // {
    //   Alert.alert(`Thank You ${username}`);
    // }
    // console.warn("onRegisterPressed");
    navigation.navigate("ConfirmEmail");
  };

  // const [agree, SetAgree] = useState("false");
  // console.log(username, email, password, passwordRepeat);

  const onSignInPresses = () => {
    // console.warn("onSignInPressed");
    navigation.navigate("SignIn");
  };

  const onTermOfUsePressed = () => {
    console.warn("onTermOfUsePressed");
  };

  const OnPrivacyPressed = () => {
    console.warn("onPrivacyPressed");
  };

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} />
      <View style={styles.root}>
        <Text style={styles.title}>create an account</Text>

        <CustumInput
          placeholder="Username"
          value={username}
          setvalue={setUsername}
        />

        <CustumInput placeholder="Email" value={email} setvalue={seEmail} />
        <CustumInput
          placeholder="Password"
          value={password}
          setvalue={setPassword}
          secureTextEntry
        />

        <CustumInput
          placeholder="Repeat Password"
          value={passwordRepeat}
          setvalue={setPasswordRepeat}
          secureTextEntry
        />
        <CustumButton
          text="Register"
          onPress={onRegisterPressed}
          bgColor="#3B71F3"
        />

        <Text style={styles.text}>
          By Registering, you confirm that you accept our{" "}
          <Text style={styles.link} onPress={onTermOfUsePressed}>
            Terms of use{" "}
          </Text>
          and{" "}
          <Text style={styles.link} onPress={OnPrivacyPressed}>
            Privacy Policy{" "}
          </Text>
        </Text>

        <SocialSignInButtons />

        <CustumButton
          text=" Have an account? Sign in"
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

    height: 200,
  },

  link: {
    color: "#FDB075",
  },
});
export default SignUpScreen;
