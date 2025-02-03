import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions, ScrollView } from 'react-native';
import React from 'react';
import ProfilePhotos from '../BoxComponents/ProfilePhoto';
import HeadingBox from '../BoxComponents/HeadingBox';


import { Backgroundcolor, dynamicFontSize, Textcolor, Themes } from '../assets/fonts/color';
import { contentWidth } from '../assets/fonts/color';
import { dynamicPadding } from '../assets/fonts/color';
import { dynamicBorderRadius } from '../assets/fonts/color';


const TopProduct = ({ navigation, name, products, display = "none" }: any) => {
  return (
    <View>
      <HeadingBox title={name} display={display} Textsize={dynamicFontSize*2} />
      <ScrollView
        style={styles.TopProductscroll}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {products.map((product: any) => {
          return (
            <TouchableOpacity
              key={'TopProductButton' + product.id}
              style={styles.TouchableOpacity}
              onPress={() => navigation.navigate('productscreen', product)}>
              <ProfilePhotos key={'TopProductprofilephoto' + product.id} imageurl={product.product_image1} />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  TopProductscroll: {
    marginTop:dynamicPadding,
    paddingBottom:dynamicPadding,

  },
  TouchableOpacity: {
    height:contentWidth*0.2,
    width:contentWidth*0.2,
    marginRight:dynamicPadding,
    borderRadius:"50%",
    overflow: 'hidden',
    shadowColor: Themes.color4,
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.25,
    shadowRadius: 5, 
    elevation: 5,
    borderWidth:1,
    borderColor:Themes.color10,
    backgroundColor:Themes.color1,
  },
});

export default TopProduct;
