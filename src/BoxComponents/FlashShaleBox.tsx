import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import { contentWidth, dynamicBorderRadius, dynamicFontSize,  dynamicMargin,  Themes } from '../assets/fonts/color';

const FlashShaleBox = ({ navigation, flashshale }: any) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('productscreen', flashshale.product)}>
      <View style={styles.NewSlidergrid}>
        <FastImage
          source={{ uri: flashshale.product.product_image1 }}
          style={styles.image}
        />
        <Text style={styles.FlashOffer} allowFontScaling={false}>{Math.ceil(flashshale.discount_percentage)}%off</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  NewSlidergrid: {
    overflow:"hidden",
    height:contentWidth*0.25,
    width:contentWidth*0.25,
    backgroundColor:Themes.color1,
    borderRadius:dynamicBorderRadius,
    shadowColor:Themes.color4,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  FlashOffer: {
    right: 0,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
    width:contentWidth*0.12,
    height:contentWidth*0.04,
    fontSize:dynamicFontSize-3,
    backgroundColor:Themes.color8,
    borderBottomRightRadius: 0,
    borderRadius:dynamicBorderRadius-12,
    color: 'white',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    borderRadius:dynamicBorderRadius,
  },
});

export default FlashShaleBox;
