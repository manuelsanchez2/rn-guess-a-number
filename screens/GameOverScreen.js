import React from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";
import Colors from "../constants/colors";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText style={styles.title}>The Game is Over</TitleText>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/success.png")}
          // source={{
          //   uri:
          //     "https://cdn.pixabay.com/photo/2010/11/29/nepal-414_960_720.jpg",
          // }}
          style={styles.image}
          fadeDuration={1000}
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone just needed{" "}
          <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
          guess the number{" "}
          <Text style={styles.highlight}>{props.userNumber}</Text>
        </BodyText>
      </View>

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
    height: "90%",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 20,
    marginBottom: 15,
  },

  buttonContainer: {
    marginVertical: 20,
  },
  imageContainer: {
    borderRadius: 200,
    borderWidth: 3,
    borderColor: Colors.contrast,
    marginVertical: 15,
    width: 300,
    height: 300,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },

  resultContainer: {
    marginHorizontal: 50,
    marginVertical: 10,
    fontSize: 28,
  },

  resultText: {
    textAlign: "center",
    fontSize: 18,
  },

  highlight: {
    color: "red",
    fontFamily: "open-sans-bold",
  },
});

export default GameOverScreen;
