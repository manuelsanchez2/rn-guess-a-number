import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 35,
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
  },

  headerTitle: {
    width: "100%",
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "italic",
    textAlign: "center",
  },
});

export default Header;
