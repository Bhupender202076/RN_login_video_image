import React, { Component } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";

const CustumInput = ({ value, setvalue, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setvalue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 5,
  },

  input: {},
});

export default CustumInput;
