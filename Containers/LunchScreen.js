import React from "react";
import { Text, View, ScrollView } from "react-native";
import { Drawer } from "native-base";
import HeaderLanding from "../Components/HeaderLanding";
import PromoFoodItem from "../Components/PromoFoodItem";
import img1 from "../images/burger.jpg";
import img2 from "../images/chicken.jpg";
import img3 from "../images/pizza.jpg";
import styles from "../Styles/Containers/LunchScreenStyles";
import SIdebar from "./SIdebar";

export default class LunchScreen extends React.Component {
  closeDrawer = () => {
    this.drawer._root.close();
  };

  openDrawer = () => {
    this.drawer._root.open();
  };
  render() {
    return (
      <Drawer
        ref={(ref) => {
          this.drawer = ref;
        }}
        content={<SIdebar />}
        onClose={() => this.closeDrawer()}
      >
        <View style={styles.container}>
          <HeaderLanding openDrawer={this.openDrawer} />
          <ScrollView style={styles.scroll}>
            <PromoFoodItem image={img1} text={"BURGERS"} />
            <PromoFoodItem image={img2} text={"CHICKEN"} />
            <PromoFoodItem image={img3} text={"PIZZA"} />
          </ScrollView>
        </View>
      </Drawer>
    );
  }
}
