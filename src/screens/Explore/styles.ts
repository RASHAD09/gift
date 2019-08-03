import { StyleSheet } from "react-native";
import { PRIMARY_COLOR } from "../../assets/colors";
import {
  heightPercentageToDP,
  widthPercentageToDP
} from "react-native-responsive-screen";
export default StyleSheet.create({
  sectionContainer: {
    marginTop: 55
  },
  section1: {
    paddingBottom: 55,
    paddingLeft: 20
  },

  sectionTitle: {
    fontSize: 28,
    fontWeight: "500",
    color: "black"
  },

  buttonG: {
    margin: 25,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: 30
  },
  butt1: {
    backgroundColor: PRIMARY_COLOR,
    width: 50,
    height: 20,
    borderRadius: 8
  },
  sectT: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 16,
    fontWeight: "200",
    color: "black",
    paddingTop: 18
  },
  imagescreen: {
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
    width: 375,
    height: 366
  },

  buttonContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    justifyContent: "center",
    borderRadius: 8,
    height:45,
    width: widthPercentageToDP(40)
  }
});
