import React from "react";
import { Image } from "react-native";
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
} from "react-navigation";
import { PRIMARY_COLOR } from "./assets/colors";
import Login from "./screens/Login";
import Home from "./screens/Home";
import SplashScreen from "./screens/SplashScreen";
const HomeNavigator = createStackNavigator(
  {
    home: { screen: Home },
  },
  {
    headerMode: "none",
  }
);

const BottomNavigator = createBottomTabNavigator(
  {
    home: { screen: HomeNavigator },
    profile: { screen: Home },
    fav: { screen: Home },
    cart: { screen: Home },
    gift: { screen: Home },
    categories: { screen: Home },
  },
  {
    tabBarOptions: {
      activeTintColor: PRIMARY_COLOR,
      inactiveTintColor: "#BDBDBD",
      showLabel: true,
      style: { backgroundColor: "white" },
    },
    defaultNavigationOptions: ({ navigation }: { navigation: any }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "home")
          iconName = require("./assets/icons/bottomTabs/home.png");
        if (routeName === "profile")
          iconName = require("./assets/icons/bottomTabs/profile.png");
        if (routeName === "fav")
          iconName = require("./assets/icons/bottomTabs/fav.png");
        if (routeName === "cart")
          iconName = require("./assets/icons/bottomTabs/cart.png");
        if (routeName === "gift")
          iconName = require("./assets/icons/bottomTabs/gift.png");
        if (routeName === "categories")
          iconName = require("./assets/icons/bottomTabs/categories.png");
        return (
          <Image
            resizeMode={"contain"}
            source={iconName}
            style={{ tintColor, width: 25, height: 25 }}
          />
        );
      },
    }),
  }
);

const AppNavigator = createSwitchNavigator({
  splash: { screen: SplashScreen },
  login: { screen: Login },
  app: BottomNavigator,
});

export default createAppContainer(AppNavigator);
