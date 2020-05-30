import React from "react";
import { Text, View, ScrollView } from "react-native";
import HeaderLanding from "../Components/HeaderLanding";
import PromoFoodItem from "../Components/PromoFoodItem";
import img1 from "../images/burger.jpg";
import img2 from "../images/chicken.jpg";
import img3 from "../images/pizza.jpg";
import styles from "../Styles/Containers/LunchScreenStyles";

export default () => {
  return (
    <View style={styles.container}>
      <HeaderLanding />
      <ScrollView style={styles.scroll}>
        <PromoFoodItem image={img1} text={"BURGER"} />
        <PromoFoodItem image={img2} text={"CHICKEN"} />
        <PromoFoodItem image={img3} text={"PIZZA"} />
      </ScrollView>
    </View>
  );
};
