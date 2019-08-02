import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import FeaturedItem from "./FeaturedItem";
import data from "./data";
export default () => {
  const renderItem = ({ item }) => {
    return (
      <FeaturedItem
        text={item.text}
        image={item.image}
        price={item.price}
        discount={item.discount}
      />
    );
  };
  return (
    <View>
      <Text style={styles.title}>Featured</Text>
      <FlatList
        data={data}
        numColumns={3}
        style={{ marginHorizontal: 5 }}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    margin: 5,
    fontSize: 20,
    color: "black",
  },
});
