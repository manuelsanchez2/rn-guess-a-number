import React from "react";
import { View, StyleSheet, Button, Image } from "react-native";
import Colors from "../constants/colors";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText style={styles.title}>The Game is Over</TitleText>
      <View style={styles.imageContainer}>
        <Image
          // source={require("../assets/success.png")}
          source={{
            uri:
              "https://cdn.pixabay.com/photo/2010/11/29/nepal-414_960_720.jpg",
          }}
          style={styles.image}
          fadeDuration={1000}
        />
      </View>
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
});

export default GameOverScreen;
