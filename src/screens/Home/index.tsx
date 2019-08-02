import React from "react";
import { View, Text, StatusBar, Button } from "react-native";
import styles from "./styles";
import Header from "./Header";
import FeaturedList from "./FeaturedList";
import { ScrollView } from "react-native-gesture-handler";
export default props => {
  const onSearchPress = () => {
    props.navigation.navigate("search");
  };
  return (
    <View style={styles.container}>
      <StatusBar translucent />
      <Header />
      <ScrollView>
        <FeaturedList />
      </ScrollView>
    </View>
  );
};
