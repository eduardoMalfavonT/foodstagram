import React from "react";
import { Text, View, ScrollView } from "react-native";
import HeaderFood from "../Components/HeaderFood";
import styles from "../Styles/Containers/FoodScreenStyles";

export default () => {
  return (
    <View style={styles.container}>
      <HeaderFood />
    </View>
  );
};
