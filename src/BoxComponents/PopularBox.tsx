import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import CustomIcons from '../assets/fonts/CustomIcons';
import { Backgroundcolor, dynamicWidth, dynamicBorderRadius, dynamicFontSize, dynamicPadding, Textcolor, Themes } from '../assets/fonts/color';

const PopularBox = ({ navigation, mostpopular }: any) => {
  return (
    <TouchableOpacity style={styles.NewSliderBox}
      onPress={() => navigation.navigate('productscreen', mostpopular)}
    >
      <View style={styles.NewSliderBoxImage}>
        <FastImage
          source={{ uri: mostpopular.product_image1 }}
          style={styles.image}
        />
      </View>
      <View style={styles.NewSliderPrice}>
        <Text style={styles.PriceText} allowFontScaling={false}>{mostpopular.like}{' '}</Text>
        <CustomIcons name="heart" size={dynamicFontSize} color={Themes.color8} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  NewSliderBox: {
    borderWidth:1,
    height:dynamicWidth*0.4,
    width:dynamicWidth*0.3,
    borderColor:Themes.color10,
    marginRight:dynamicPadding,
    backgroundColor:Themes.color1,
    borderRadius:dynamicBorderRadius,
    shadowColor: Textcolor.TextBlack,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  NewSliderPrice: {
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
  },
  PriceText:{
    fontWeight: 'bold',
    color:Themes.color9,
    paddingLeft:dynamicPadding-5,
    fontSize:dynamicFontSize,
  },
  NewSliderBoxImage: {
    height:"85%",
    width:"100%",
    alignItems: 'center',
    justifyContent: 'center',
    padding:dynamicPadding-5,
    borderRadius:dynamicBorderRadius,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    borderRadius:dynamicBorderRadius,
  },
});

export default PopularBox;
