import React from "react";
import { View, Text } from "react-native";
import styles from "../Styles/Containers/CartStyles";
import HeaderFood from "../Components/HeaderFood";
import { Content } from "native-base";
import CartItem from "../Components/CartItem";

export default () => {
  return (
    <View>
      <HeaderFood />
      <View style={styles.ParentView}>
        <Content>
          <CartItem title={"BBQ burger"} />
          <CartItem title={"Spicy burger"} />
          <CartItem title={"Pizza"} />
          <CartItem title={"BBQ burger"} />
          <CartItem title={"BBQ burger"} />
        </Content>
        <View style={styles.FooterContainer}>
          <Text style={styles.FooterText}>Total:</Text>
        </View>
      </View>
    </View>
  );
};
