import { StyleSheet, View, useWindowDimensions } from 'react-native';
import React from 'react';
import CartBox from './CartBox';
import WishlistBoxdetails from './WishlistBoxdetails';
import { contentWidth, dynamicMargin, dynamicWidth } from '../assets/fonts/color';

const WishlistTotalBox = ({ favorite, navigation }: any) => {
  return (
    <View style={styles.cart}>
      <CartBox image={favorite.product.product_image1} />
      <WishlistBoxdetails product={favorite.product} navigation={navigation} />
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
    // backgroundColor:"red"
  },
});

export default WishlistTotalBox;
