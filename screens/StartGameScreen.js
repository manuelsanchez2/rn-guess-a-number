import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";

import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import Colors from "../constants/colors";
import MainButton from "../components/MainButton";

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  const [buttonWidth, setButtonWidth] = useState(
    Dimensions.get("window").width / 4
  );

  const updateLayout = () => {
    setButtonWidth(Dimensions.get("window").width / 4);
  };
  Dimensions.addEventListener("change", updateLayout);

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandle = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const confirmInputHandle = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number ranging from 0 and 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandle }]
      );
      return;
    }

    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue("");
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>Your chosen number is...</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainButton onPress={() => props.onStartGame(selectedNumber)}>
          START GAME
        </MainButton>
      </Card>
    );
  }
  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <View style={styles.screen}>
            <Text style={styles.title}>Start a new game</Text>
            <Card style={styles.inputContainer}>
              <Text>Select a number</Text>
              <Input
                style={styles.input}
                blurOnSubmit={true}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="number-pad"
                maxLength={2}
                onChangeText={numberInputHandler}
                value={enteredValue}
              />
              <View style={styles.buttonContainers}>
                <View style={{ width: buttonWidth }}>
                  <Button
                    color="red"
                    title="Reset"
                    onPress={resetInputHandle}
                  />
                </View>
                <View style={{ width: buttonWidth }}>
                  <Button
                    color="green"
                    title="Confirm"
                    onPress={confirmInputHandle}
                  />
                </View>
              </View>
            </Card>
            {confirmedOutput}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    height: "100%",
    padding: 10,
    alignItems: "center",
  },

  title: {
    fontSize: 20,
    fontFamily: "open-sans-bold",
    marginVertical: 10,
    borderBottomColor: Colors.primary_text,
    borderBottomWidth: 1,
  },
  inputContainer: {
    width: "70%",
    minWidth: 320,
    maxWidth: "95%",
    alignItems: "center",
  },
  buttonContainers: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  // buttonContainer: {
  //   // width: 100,
  //   width: Dimensions.get("window").width / 4,
  // },
  input: {
    width: 40,
    textAlign: "center",
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});

export default StartGameScreen;
