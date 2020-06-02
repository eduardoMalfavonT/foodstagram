import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { Container, Content, Button, Icon } from "native-base";
import HeaderFood from "../Components/HeaderFood";
import burger from "../images/burger.jpg";
import styles from "../Styles/Containers/FoodDetails";

export default () => {
  return (
    <Container style={styles.container}>
      <HeaderFood />
      <ImageBackground source={burger} style={styles.BackgroundImage} />
      <Content style={styles.FoodContent}>
        <View style={styles.NameAndPrice}>
          <View style={styles.Name}>
            <Text style={styles.NameText}>Example Food</Text>
          </View>
          <View style={styles.Price}>
            <Text style={styles.PrinceText}>15$</Text>
          </View>
        </View>
        <Button
          iconLeft
          dark
          style={styles.AddButton}
          onPress={() => {
            alert("Test");
          }}
        >
          <Text  style={styles.AddText}>Add</Text>
          <Icon type="Octicons" name="plus" style={styles.AddIcon} />
        </Button>
      </Content>
    </Container>
  );
};
