import React from "react";
import { Text } from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
} from "native-base";
import { Link } from "react-router-native";
import styles from "../Styles/Components/HeaderLandingStyles";

export default class HeaderFood extends React.Component {
  render() {
    return (
      <Container style={styles.HeaderLandingContainer}>
        <Header style={styles.HeaderContainer}>
          <Left style={styles.Left}>
            <Button transparent>
              <Link to="/">
                <Icon style={styles.icon} name="md-arrow-back" />
              </Link>
            </Button>
          </Left>
          <Body style={styles.Body}>
            <Text style={styles.titleText}>Foodstagram</Text>
          </Body>
          <Right style={styles.Right}>
            <Button
              transparent
              onPress={() => alert("Boton derecho presionado")}
            >
              <Icon
                style={styles.icon}
                type={"FontAwesome5"}
                name="shopping-cart"
              />
            </Button>
          </Right>
        </Header>
      </Container>
    );
  }
}
