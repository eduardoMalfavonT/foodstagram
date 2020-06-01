import React from "react";
import { Button, Icon, View, Text } from "native-base";
import { SwipeListView } from "react-native-swipe-list-view";
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
              <Text>{data.item}</Text>
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
