import { StyleSheet, View } from 'react-native';
import React from 'react';
import CartTotalBox from '../BoxComponents/CartTotalBox';
import WishlistEmpty from '../BoxComponents/WishlistEmpty';
import { EmptyCart } from '../assets/fonts/SVGIcons';

const CartComponent = ({ orderitems, navigation }: any) => {
  return (
    <View style={styles.cart}>
      {orderitems.length > 0 ? (
        orderitems.map((orderitem: any) => {
          if (orderitem.order.complete === false) {
            return <CartTotalBox key={"OrderItems" + orderitem.id} orderitems={orderitem} navigation={navigation} />;
          }
        })
      )
      : (null)}
    </View>
  );
};

const styles = StyleSheet.create({
  cart: {
    top: 20,
    justifyContent: 'space-between',
  }
});

export default CartComponent;
