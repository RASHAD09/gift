import React from "react";
import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../../assets/colors";
import { Icon } from "react-native-elements";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
export default () => {
  return (
    <LinearGradient
      style={styles.container}
      colors={[PRIMARY_COLOR, SECONDARY_COLOR]}
    >
      <View style={styles.searchContainer}>
        <Icon name="search" size={25} color={PRIMARY_COLOR} />
        <TextInput placeholder="Search Your Gift" />
      </View>
      <Image
        style={styles.icon}
        resizeMode="contain"
        source={require("../../../assets/icons/bell.png")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingTop: 25,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    height: heightPercentageToDP(14),
  },
  searchContainer: {
    backgroundColor: "white",
    width: widthPercentageToDP(80),
    borderRadius: 25,
    alignItems: "center",
    paddingHorizontal: 15,
    flexDirection: "row",
    height: heightPercentageToDP(6),
  },
  icon: {
    width: 30,
    height: heightPercentageToDP(6),
  },
});
