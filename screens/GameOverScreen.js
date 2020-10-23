import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Colors from "../constants/colors";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>The Game is Over</Text>
      <Text>Number of rounds: {props.roundsNumber}</Text>
      <Text>It was clear your number was {props.userNumber}</Text>
      <View style={styles.buttonContainer}>
        <Button
          color={Colors.contrast}
          title="PLAY AGAIN"
          onPress={props.onRestart}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },

  buttonContainer: {
    marginVertical: 20,
  },
});

export default GameOverScreen;
