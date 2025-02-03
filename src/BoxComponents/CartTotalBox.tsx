import { StyleSheet, useWindowDimensions, View } from 'react-native';
import React from 'react';
import CartBox from './CartBox';
import CartBoxDetails from './CartBoxDetails';
import { contentWidth, dynamicMargin, dynamicWidth } from '../assets/fonts/color';

const CartTotalBox = ({ orderitems, navigation, keys = 'OSCCCTB' }: any) => {
  const { width } = useWindowDimensions(); // Dynamically get screen width
  
  const dynamicPadding = width < 375 ? 8 : 15; // Dynamic padding for smaller screens
  const dynamicHeight = width < 375 ? 100 : 120; // Dynamic height adjustment

  return (
    <View style={styles.cart}>
      <CartBox key={keys + "CartBox" + orderitems.product.id} image={orderitems.product.product_image1} />
      <CartBoxDetails key={keys + "CartBoxDetails" + orderitems.product.id} orderitems={orderitems} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  cart: {
    width:contentWidth,
    height:dynamicWidth*0.28, 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:dynamicMargin, 
}
});

export default CartTotalBox;
