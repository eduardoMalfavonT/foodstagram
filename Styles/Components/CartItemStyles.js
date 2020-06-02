import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  CartItemContainer: {
    width: "100%",
    height: 150,
    paddingTop: 20,
    paddingBottom: 20,
  },
  rowFront: {
    width: "100%",
    backgroundColor: "white",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  rowBack: {
    width: "100%",
    alignItems: "flex-end",
    flex: 1,
  },
  buttonIcon: {
    height: 150,
    width: "20%",
    backgroundColor: "#b71c1c",
    justifyContent: "center",
    marginTop: "auto",
    marginBottom: "auto",
  },
  icon: {
    textAlign: "center",
  },
  ItemImage: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  ItemTextContainer: {
    marginRight: 55,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  ItemTitle: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
  },
  ItemPrice: {
    color: "grey",
    fontSize: 14,
  },
  ItemContentContainer: {
    position: "absolute",
    right: 0,
    width: 70,
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  ItemCountUp: {
    color: "black",
    fontSize: Platform.OS === "ios" ? 30 : 40,
  },
  ItemCountText: {
    fontSize: 20,
    color: "black",
  },
  ItemCountDown: {
    color: "grey",
    fontSize: Platform.OS === "ios" ? 30 : 40,
  },
});
