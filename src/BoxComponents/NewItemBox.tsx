import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import { dynamicMargin,Themes } from '../assets/fonts/color';

import { dynamicWidth } from '../assets/fonts/color';
import { dynamicFontSize } from '../assets/fonts/color';
import { dynamicPadding } from '../assets/fonts/color';
import { dynamicBorderRadius } from '../assets/fonts/color';

const NewItemBox = ({ navigation, product}: any) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('productscreen', product)}>
      <View style={styles.NewSliderBox}>
        <View style={styles.NewSliderBoxImage}>
          <FastImage source={{ uri: product.product_image1 }} style={styles.image} />
        </View>
        <View style={styles.TextContainer}>
          <Text style={styles.NewSliderProductName} allowFontScaling={false}>{product.product_name.slice(0, 40)}</Text>
          <Text style={styles.NewSliderProductPrice} allowFontScaling={false}>₹{Math.round(product.price)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  NewSliderBox: {
    height:dynamicWidth*0.6,
    width:dynamicWidth*0.35,
    marginRight:dynamicMargin,
    zIndex: 1,
  },
  NewSliderBoxImage: {
    height: '70%', 
    width: '100%',
    overflow:"hidden",
    alignItems: 'center',
    justifyContent: 'center',
    padding:dynamicPadding-10,
    borderColor:Themes.color10,
    backgroundColor:Themes.color1,
    borderRadius:dynamicBorderRadius,
    shadowColor: Themes.color4,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth:1,
  },
  TextContainer: {
    flex: 1,
  },
  NewSliderProductName: {
    fontWeight: 'bold',
    color:Themes.color9,
    fontSize:dynamicFontSize,
  },
  NewSliderProductPrice: {
    fontWeight: 'bold',
    color:Themes.color9,
    fontSize:dynamicFontSize,
  },
  image: {
    height: '100%', 
    width: '100%', 
    resizeMode: 'contain',
    borderRadius:dynamicBorderRadius,
  },
});

export default NewItemBox;
