import React from "react";
import { Link } from "react-router-native";
import { Text } from "react-native";
import { Container, List, ListItem, Left, Icon, Body } from "native-base";
import styles from "../Styles/Containers/SidebarStyles";

export default () => {
  return (
    <Container style={styles.SidebarContainer}>
      <List>
        <ListItem itemDivider>
          <Text>Food</Text>
        </ListItem>
        <ListItem>
          <Left style={styles.Left}>
            <Link to="/FoodScreen/BURGERS">
              <Icon
                type="MaterialCommunityIcons"
                name="hamburger"
                style={styles.icon}
              />
            </Link>
          </Left>
          <Body style={styles.Body}>
            <Link to="/FoodScreen/BURGERS">
              <Text>Burgers</Text>
            </Link>
          </Body>
        </ListItem>
        <ListItem>
          <Left style={styles.Left}>
            <Link to="/FoodScreen/CHICKEN">
              <Icon type="Entypo" name="bowl" style={styles.icon} />
            </Link>
          </Left>
          <Body style={styles.Body}>
            <Link to="/FoodScreen/CHICKEN">
              <Text>Chicken</Text>
            </Link>
          </Body>
        </ListItem>
        <ListItem>
          <Left style={styles.Left}>
            <Link to="/FoodScreen/PIZZA">
              <Icon
                type="MaterialCommunityIcons"
                name="pizza"
                style={styles.icon}
              />
            </Link>
          </Left>
          <Body style={styles.Body}>
            <Link to="/FoodScreen/PIZZA">
              <Text>Pizza</Text>
            </Link>
          </Body>
        </ListItem>
        <ListItem itemDivider>
          <Text>Drinks</Text>
        </ListItem>
        <ListItem>
          <Left style={styles.Left}>
            <Link to="/FoodScreen/DRINKS">
              <Icon type="Entypo" name="drink" style={styles.icon} />
            </Link>
          </Left>
          <Body style={styles.Body}>
            <Link to="/FoodScreen/DRINKS">
              <Text>Drink 1</Text>
            </Link>
          </Body>
        </ListItem>
      </List>
    </Container>
  );
};
