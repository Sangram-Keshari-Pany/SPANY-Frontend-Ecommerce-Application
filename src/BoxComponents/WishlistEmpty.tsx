import { StyleSheet, View, useWindowDimensions } from 'react-native';
import React from 'react';
import { Backgroundcolor, dynamicWidth, Textcolor } from '../assets/fonts/color';
import { EmptyCart, EmptyWishlist } from '../assets/fonts/SVGIcons';

const WishlistEmpty = () => {
  return (
    <View style={styles.Wishlistempty}>
      <View style={[styles.svgconntainer]}>
        <EmptyCart/>
      </View>
    </View>
  );
};

export default WishlistEmpty;

const styles = StyleSheet.create({
  Wishlistempty: {
    height:dynamicWidth*0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  svgconntainer: {
    height:"50%",
    width:"40%",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:"50%", // Making it circular
    shadowColor: Textcolor.TextBlack,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: Backgroundcolor.backgroundWhite,
    position:"relative"
  },
});
