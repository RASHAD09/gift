import React from "react";
import { View, SafeAreaView, Button, Text } from "react-native";
export default props => {
  const onPress = () => {
    props.navigation.navigate("app");
  };
  return (
    <View style={{ flex: 1 }}>
      <Button title="welcome to gift" onPress={onPress} />
    </View>
  );
};
