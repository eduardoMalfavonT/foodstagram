import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import img from "../images/burger.jpg";
import styles from "../Styles/Components/FoodItemStyles";

export default () => {
  return (
    <TouchableOpacity onPress={() => alert("FoodItem presionado")}>
      <View style={styles.foodItemView}>
        <View style={styles.priceView}>
          <Text style={styles.price}>10$</Text>
        </View>
        <View style={styles.foodImageView}>
          <Image style={styles.image} source={img} resizeMode="stretch" />
        </View>
        <View style={styles.foodDescriptionView}>
          <View style={styles.foodTextView}>
            <Text style={styles.foodTitle}>Title</Text>
            <Text style={styles.foodDescription}>
              Some kind of description of the food
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
