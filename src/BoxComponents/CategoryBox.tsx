import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import { Backgroundcolor, dynamicPadding, Textcolor, Themes } from '../assets/fonts/color';
import { contentWidth } from '../assets/fonts/color';
import { dynamicFontSize } from '../assets/fonts/color';


const CategoryBox = ({ name, subcategory }: any) => {
  return (
    <TouchableOpacity style={styles.CategoryBox}>
      <View style={styles.QuaterBox}>
        {subcategory.slice(0, 4).map((item: any, index: number) => (
          <View key={index} style={styles.SmallBox}>
            <FastImage
              style={styles.image}
              source={{
                uri: item.sub_category_image,
                priority: FastImage.priority.high,
              }}
            />
          </View>
        ))}
      </View>
      <View style={styles.QuaterBoxTexts}>
        <Text style={styles.QuaterBoxText} allowFontScaling={false}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({ 
  CategoryBox: {
    borderRadius: dynamicPadding-5,
    shadowColor:Themes.color4,
    shadowOffset: { width:0, height:2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation:5,
    padding: 4,
    borderWidth:1,
    borderColor:Themes.color10,
    backgroundColor:Themes.color1,
    width: contentWidth > 600 ? contentWidth * 0.48 : contentWidth * 0.48,
    height: contentWidth > 600 ? contentWidth * 0.48 : contentWidth * 0.48,
  },
  QuaterBox: {
    gap:4,
    height: '90%',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  SmallBox: {
    height: '48.5%',
    width: '48.5%',
    borderRadius:dynamicPadding,
  },
  QuaterBoxTexts: {
    paddingLeft:8,
    paddingRight:8,
    display: 'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'space-between',
  },
  QuaterBoxText: {
    fontSize: dynamicFontSize,
    fontWeight: 'bold',
    color:Themes.color9
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: dynamicPadding,
  },
});

export default CategoryBox;
