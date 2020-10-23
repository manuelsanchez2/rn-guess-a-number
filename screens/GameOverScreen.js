import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Colors from "../constants/colors";

import BodyText from "../components/BodyText";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <BodyText style={styles.title}>The Game is Over</BodyText>
      <BodyText>Number of rounds: {props.roundsNumber}</BodyText>
      <BodyText>It was clear your number was {props.userNumber}</BodyText>
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
    fontFamily: "open-sans-bold",
    fontSize: 20,
    marginBottom: 15,
  },

  buttonContainer: {
    marginVertical: 20,
  },
});

export default GameOverScreen;
