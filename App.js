import React from "react";
import { NativeRouter, Route, Link } from "react-router-native";
import LunchScreen from "./Containers/LunchScreen";
import FoodScreen from "./Containers/FoodScreen";
import Cart from "./Containers/Cart";
import FoodDetails from "./Containers/FoodDetails";

export default function App() {
  return (
    <NativeRouter>
      <Route exact path="/" component={LunchScreen} />
      <Route exact path="/FoodScreen/:Food" component={FoodScreen} />
      <Route exact path="/Cart" component={Cart} />
      <Route exact path="/FoodDetails" component={FoodDetails} />
    </NativeRouter>
  );
}
