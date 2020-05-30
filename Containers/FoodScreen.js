import React from "react";
import { withRouter } from "react-router-native";
import { Text, View, ScrollView } from "react-native";
import { Container, Content } from "native-base";
import HeaderFood from "../Components/HeaderFood";
import styles from "../Styles/Containers/FoodScreenStyles";
import FoodItem from "../Components/FoodItem";

const FoodScreen = (params) => {
  const { Food } = params.match.params;
  return (
    <Container style={styles.container}>
      <HeaderFood />
      <Content style={styles.Content}>
        <Text style={styles.titleText}>{Food}</Text>
        <FoodItem />
      </Content>
    </Container>
  );
};
export default withRouter(FoodScreen);
