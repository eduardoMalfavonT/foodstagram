import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default StyleSheet.create({
  BackgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  FoodContent: {
    position: "absolute",
    flex: 0,
    marginTop: "20%",
    height: "100%",
    width: "100%",
  },
  Name: {
    height: height / 3,
    width: width / 2,
    marginLeft: "5%",
  },
  NameText: {
    position: "absolute",
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
    marginTop: "30%",
  },
  Price: {
    marginLeft: "5%",
    height: height / 3,
    width: "30%",
    alignItems: "center",
  },
  PrinceText: {
    position: "absolute",
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
    marginTop: "50%",
  },
  NameAndPrice: {
    flexDirection: "row",
  },
  AddButton: {
    backgroundColor: "green",
    marginLeft: "5%",
    marginTop: 100,
    height: 50,
    width: "35%",
    borderRadius: 20,
  },
  AddText: { fontSize: 22, paddingLeft: 10, color: "white", fontWeight: "500" },
  AddIcon: { color: "white", fontSize: 30, paddingRight: 10 },
});
