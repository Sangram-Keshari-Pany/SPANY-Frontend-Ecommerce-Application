import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import { Backgroundcolor, contentWidth, dynamicBorderRadius, dynamicFontSize, dynamicPadding, Textcolor, Themes } from '../assets/fonts/color';

const ProductBox = ({ navigation, product}: any) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('productscreen', product)} style={styles.TouchableOpacity}>
      <View style={styles.imageBox}>
        <FastImage style={styles.image} source={{ uri: product.product_image1 }} />
      </View>
        <View style={styles.QuaterBoxTexts}>
          <Text style={styles.QuaterBoxText} allowFontScaling={false}>{product.product_name.slice(0, 50)}</Text>
          <Text style={styles.QuaterBoxTextprice} allowFontScaling={false}>₹{Math.round(product.price)}</Text>
        </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  TouchableOpacity: {
    marginBottom:5,
    width: contentWidth>600 ?contentWidth * 0.48 : contentWidth * 0.48,
    height: contentWidth>600 ?contentWidth * 0.7 : contentWidth * 0.8,
   },
   imageBox:{
    width:"100%",
    height: contentWidth>600 ?contentWidth * 0.59 : contentWidth * 0.59,
    padding:dynamicPadding-5,
    borderRadius:dynamicBorderRadius,
    borderWidth:1,
    borderColor:Themes.color10,
    shadowColor: Textcolor.TextBlack,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: Backgroundcolor.backgroundWhite,
   },
  QuaterBoxTexts: {
    display: 'flex',
    flexDirection: 'column',
    paddingRight:dynamicPadding,
    // paddingLeft:dynamicPadding,
  },
  QuaterBoxText: {
    fontWeight: 'bold',
    color:Themes.color9,
    fontSize:dynamicFontSize,
  },
  QuaterBoxTextprice: {
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

export default ProductBox;
