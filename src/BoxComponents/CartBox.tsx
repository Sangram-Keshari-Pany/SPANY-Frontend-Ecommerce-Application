import { StyleSheet, View } from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import { dynamicBorderRadius, dynamicPadding, Themes } from '../assets/fonts/color';

const CartBox = ({ image }: any) => {
  return (
    <View style={styles.CartBox}>
      <FastImage source={{ uri: image }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  CartBox: {
    width: '45%',
    height:"100%",   
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:dynamicBorderRadius,
    backgroundColor:Themes.color1,
    borderWidth:1,
    borderColor:Themes.color10,
    padding:dynamicPadding-10,
    shadowColor:Themes.color4,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    borderRadius:dynamicBorderRadius,
  },
});

export default CartBox;
