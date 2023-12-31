import React, { Component } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

const CustumButton = ({
  onPress,
  text,
  type = "PRIMARY",
  bgColor,
  fgcolor,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles["container_${}"],
        bgColor ? { backgroundColor: bgColor } : {},
      ]}
    >
      <Text
        style={[
          styles.text,
          styles["text_${type}"],
          fgcolor ? { color: fgcolor } : {},
        ]}
      >
        {text}{" "}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",

    padding: 15,
    marginVertical: 5,

    alignItems: "center",
    borderRadius: 5,
  },

  container_PRIMARY: {
    backgroundColor: "#3B71F3",
  },

  container_TERTIARY: {},
  text: {
    fontWeight: "bold",
    color: "white",
  },
  text_TERTIARY: {
    color: "gray",
  },
});
export default CustumButton;
