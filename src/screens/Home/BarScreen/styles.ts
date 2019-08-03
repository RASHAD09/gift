import { StyleSheet } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
// import { PRIMARY_COLOR } from "../../../../assets/colors";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "gold",
    borderBottomWidth: 1,
    paddingVertical: 10
  },
  fimg: {
    width: 25,
    height: 25,
    margin: 5
  }
});
