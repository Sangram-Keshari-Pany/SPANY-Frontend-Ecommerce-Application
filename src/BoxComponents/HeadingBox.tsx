import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import CustomIcons from '../assets/fonts/CustomIcons';
import { dynamicFontSize, dynamicMargin, dynamicPadding, Themes } from '../assets/fonts/color';

import { dynamicIconSize } from '../assets/fonts/color';
const HeadingBox = ({ title, display, Textsize }: any) => {
  return (
    <View style={styles.CategoryComopnent}>
      <Text allowFontScaling={false} style={{ fontSize: Textsize, fontWeight: 'bold', fontFamily: 'Raleway', color: Themes.color9 }}>
        {title}
      </Text>
      <View style={{ display: display, ...styles.CategoryIconPart }}>
        <Text style={styles.CategoryComopnentText2} allowFontScaling={false}>View All</Text>
        <TouchableOpacity style={styles.Iconarrow}>
          <CustomIcons name="arrowright" color={Themes.color6} size={dynamicIconSize*0.7} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  CategoryComopnent: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: dynamicMargin - 10,
    marginBottom: dynamicMargin - 10,
    justifyContent: 'space-between',
  },
  CategoryIconPart: {
    gap: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  CategoryComopnentText2: {
    fontWeight: 'bold',
    fontFamily: 'Raleway',
    color:Themes.color9,
    fontSize:dynamicFontSize
  },
  Iconarrow: {
    padding: dynamicPadding - 10,
    display: 'flex',
    borderRadius: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Themes.color2,
  },
});

export default HeadingBox;
