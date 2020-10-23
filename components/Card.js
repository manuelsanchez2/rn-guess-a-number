import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: Colors.contrast,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
});

export default Card;
