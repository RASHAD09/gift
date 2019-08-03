import { StyleSheet } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { PRIMARY_COLOR } from "../../../../assets/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
    margin: 5,
    borderWidth: 1,
    borderColor: PRIMARY_COLOR,
    borderRadius: 5,
  },
  image: {
    resizeMode: "contain",
    height: heightPercentageToDP(11),
  },
});
