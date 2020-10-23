import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

import Card from "../components/Card";

const StartGameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a new game</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a number</Text>
        <TextInput />
        <View style={styles.buttonContainers}>
          <View style={styles.buttonContainer}>
            <Button color="red" title="Reset" onPress={() => {}} />
          </View>
          <View style={styles.buttonContainer}>
            <Button color="green" title="Confirm" onPress={() => {}} />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    alignItems: "center",
  },

  title: {
    fontSize: 20,
    marginVertical: 10,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainers: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  buttonContainer: {
    width: "47%",
  },
});

export default StartGameScreen;
