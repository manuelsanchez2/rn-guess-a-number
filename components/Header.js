import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import Colors from "../constants/colors";

import TitleText from "./TitleText";

const Header = (props) => {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid,
        }),
      }}
    >
      <TitleText>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    width: "100%",
    height: 90,
    paddingTop: 35,

    alignItems: "center",
    justifyContent: "center",
  },
  headerIOS: {
    backgroundColor: "red",
  },
  headerAndroid: {
    backgroundColor: Colors.contrast,
  },
});

export default Header;
