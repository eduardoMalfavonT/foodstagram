import { StyleSheet, Dimensions } from "react-native";

const HEIGHT = Dimensions.get("window").height;
export default StyleSheet.create({
  foodCard: {
    height: HEIGHT / 2,
    alignItems: "center",
  },
  img: {
    height: HEIGHT / 2,
  },
  textView: {
    justifyContent: "center",
    width: "100%",
    height: "100%",
    position: "absolute",
    
  },
  foodTitle: {
    fontSize: 36,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "white",
    marginLeft: "20%",
    marginRight: "20%",
    borderRadius: 10,
    paddingTop: "5%",
    paddingBottom: "5%",
  },
});
