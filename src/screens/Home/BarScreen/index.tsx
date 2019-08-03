import React from "react";
import { Text, View, Image } from "react-native";

import styles from "./styles";

export default () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.fimg}
        source={require("../../../assets/icons/BarTabs/saudi-arabiasign.png")}
      />
      <Text style={{ fontSize: 10, color: "silver" }}> 100% SAUDI </Text>
      <Image
        style={styles.fimg}
        source={require("../../../assets/icons/BarTabs/orginal.png")}
      />
      <Text style={{ fontSize: 10, color: "silver" }}> GENUINE PRODUCTS </Text>

      <Image
        style={styles.fimg}
        source={require("../../../assets/icons/BarTabs/fastshipping.png")}
      />
      <Text style={{ fontSize: 10, color: "silver" }}> FAST SHIPPING </Text>
    </View>
  );
};
