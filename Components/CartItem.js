import React from "react";
import { Button, Icon, View, Text } from "native-base";
import { SwipeListView } from "react-native-swipe-list-view";
import { Image } from "react-native";
import img1 from "../images/burger.jpg";
import styles from "../Styles/Components/CartItemStyles";

export default class CartItem extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <View style={styles.CartItemContainer}>
        <SwipeListView
          disableRightSwipe
          rightOpenValue={-100}
          data={[title]}
          renderItem={(data, index) => (
            <View key={index} style={styles.rowFront}>
              <Image style={styles.ItemImage} source={img1} />
              <View style={styles.ItemTextContainer}>
                <Text style={styles.ItemTitle}>{data.item}</Text>
                <Text style={styles.ItemPrice}>15$</Text>
              </View>
              <View style={styles.ItemContentContainer}>
                <Button
                  transparent
                  onPress={() => {
                    alert("test");
                  }}
                >
                  <Icon
                    style={styles.ItemCountUp}
                    type="FontAwesome5"
                    name="caret-up"
                  />
                </Button>
                <Text style={styles.ItemCountText}>2</Text>
                <Button
                  transparent
                  onPress={() => {
                    alert("test");
                  }}
                >
                  <Icon
                    style={styles.ItemCountDown}
                    type="FontAwesome5"
                    name="caret-down"
                  />
                </Button>
              </View>
            </View>
          )}
          renderHiddenItem={(data, index) => (
            <View key={index} style={styles.rowBack}>
              <Button style={styles.buttonIcon} onPress={() => alert("Trash")}>
                <Icon style={styles.icon} active name="trash" />
              </Button>
            </View>
          )}
        />
      </View>
    );
  }
}
