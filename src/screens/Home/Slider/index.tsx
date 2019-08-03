import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Image } from "react-native";

import Swiper from "react-native-swiper";
import { heightPercentageToDP } from "react-native-responsive-screen";

const styles = StyleSheet.create({
  wrapper: {
    height: heightPercentageToDP(30)
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  fimg: {
    height: heightPercentageToDP(30)
  }
});

export default class SwiperComponent extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <Image style={styles.fimg} source={require("./slideren.png")} />
        </View>
        <View style={styles.slide2}>
          <Image style={styles.fimg} source={require("./slideren.png")} />
        </View>
        <View style={styles.slide3}>
          <Image style={styles.fimg} source={require("./slideren.png")} />
        </View>
      </Swiper>
    );
  }
}
