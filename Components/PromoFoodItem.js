import React from "react";
import styles from "../Styles/Components/PromoFoodItemStyles";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { Link } from "react-router-native";

export default class PromoFoodItem extends React.Component {
  render() {
    const { image, text } = this.props;
    return (
      <TouchableOpacity>
        <Link to={`/FoodScreen/${text}`}>
          <View style={styles.foodCard}>
            <View>
              <Image style={styles.img} source={image} resizeMode="contain" />
            </View>
            <View style={styles.textView}>
              <Text style={styles.foodTitle}>{text}</Text>
            </View>
          </View>
        </Link>
      </TouchableOpacity>
    );
  }
}
