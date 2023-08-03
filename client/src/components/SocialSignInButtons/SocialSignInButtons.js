import React, { Component } from "react";
import { Text, View } from "react-native";
import CustumButton from "../CustumButton";

const SocialSignInButtons = () => {
  const onSignInFacebook = () => {
    console.warn("onSignInFacebook");
  };
  const onSignInGoogle = () => {
    console.warn("onSignInGoogle");
  };
  const onSignInApple = () => {
    console.warn("onSignInApple");
  };
  return (
    <>
      <CustumButton
        text=" Sign In with Facebook"
        onPress={onSignInFacebook}
        bgColor="#E7EAF4"
        fgcolor="#4765A9"
      />
      <CustumButton
        text=" Sign In with Google"
        onPress={onSignInGoogle}
        bgColor="#FAE9EA"
        fgcolor="#DD4D44"
      />
      <CustumButton
        text=" Sign In with Apple"
        onPress={onSignInApple}
        bgColor="#e3e3e3"
        fgcolor="#363636"
      />
    </>
  );
};
export default SocialSignInButtons;
