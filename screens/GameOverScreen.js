import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import Colors from "../constants/colors";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import MainButton from "../components/MainButton";

const GameOverScreen = (props) => {
  return (
    <ScrollView>
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
          <MainButton onPress={props.onRestart}>PLAY AGAIN</MainButton>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 50,
  },

  title: {
    fontSize: 20,
    marginBottom: 15,
  },

  buttonContainer: {
    marginVertical: 20,
  },
  imageContainer: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 35,
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
