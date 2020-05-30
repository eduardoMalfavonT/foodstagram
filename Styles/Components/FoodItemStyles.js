import { StyleSheet, Dimensions } from "react-native";

const HEIGHT = Dimensions.get("window").height;

export default StyleSheet.create({
  foodItemView: {
    width: "100%",
    height: HEIGHT / 4,
    // backgroundColor: "green",
    paddingLeft: "5%",
    paddingTop: "5%",
  },
  priceView: {
    backgroundColor: "#8dba25",
    height: "20%",
    width: "30%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 5,
  },
  price: {
    color: "white",
    fontSize: 20,
    fontWeight: "400",
  },
  foodImageView: {
    width: "60%",
    height: "70%",
    position: "absolute",
    top: 35,
    left: 35,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 40,
  },
  foodDescriptionView: {
    height: "60%",
    width: "60%",
    position: "absolute",
    zIndex: -1,
    left: 150,
    top: 20,
    borderRadius: 20,
    backgroundColor: "#f4f4f4",
  },
  foodTextView: {
    position: "absolute",
    width: "50%",
    height: "100%",
    zIndex: 1,
    left: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  foodTitle: {
    fontWeight: "bold",
    paddingTop: 5,
    fontSize:18
  },
  foodDescription: {
    textAlign: "center",
    fontWeight: "400",
    padding: 5,
    fontSize: 15,
  },
});
