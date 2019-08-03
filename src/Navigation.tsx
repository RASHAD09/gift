import React from "react";
import { Image } from "react-native";
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";
import { PRIMARY_COLOR } from "./assets/colors";
import Login from "./screens/Login";
import Home from "./screens/Home";
import SplashScreen from "./screens/SplashScreen";
import Explore from "./screens/Explore";
import Registration from "./screens/Registration";
import ForgetPass from "./screens/ForgetPass";

const HomeNavigator = createStackNavigator(
  {
    home: { screen: Home }
  },
  {
    headerMode: "none"
  }
);

const BottomNavigator = createBottomTabNavigator(
  {
    home: { screen: HomeNavigator },
    profile: { screen: Home },
    fav: { screen: Home },
    cart: { screen: Home },
    gift: { screen: Home },
    categories: { screen: Home }
  },
  {
    tabBarOptions: {
      activeTintColor: PRIMARY_COLOR,
      inactiveTintColor: "#BDBDBD",
      showLabel: true,
      style: { backgroundColor: "white" }
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
      }
    })
  }
);
const GuestNav = createStackNavigator(
  {
    explore: { screen: Explore },
    registration: { screen: Registration },
    login: { screen: Login },
    forgetPass:{screen:ForgetPass}
  },
  {
    headerMode: "none"
  }
);
const AppNavigator = createSwitchNavigator({
  splash: { screen: SplashScreen },
  guest: { screen: GuestNav },
  app: BottomNavigator
});

export default createAppContainer(AppNavigator);
