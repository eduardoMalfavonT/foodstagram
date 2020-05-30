import React from "react";
import { NativeRouter, Route, Link } from "react-router-native";
import LunchScreen from "./Containers/LunchScreen";
import FoodScreen from "./Containers/FoodScreen";

export default function App() {
  return (
    <NativeRouter>
      <Route exact path="/" component={LunchScreen} />
      <Route exact path="/FoodScreen" component={FoodScreen} />
    </NativeRouter>
  );
}
