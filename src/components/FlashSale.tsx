import { ScrollView, StyleSheet, View, Dimensions } from 'react-native';
import React from 'react';
import FlashShaleBox from '../BoxComponents/FlashShaleBox';
import HeadingBox from '../BoxComponents/HeadingBox';
import {dynamicFontSize, dynamicMargin,} from '../assets/fonts/color';
import { dynamicWidth } from '../assets/fonts/color';
import { dynamicPadding } from '../assets/fonts/color';

const FlashSale = ({ navigation, flashshales }: any) => {
  return (
    <View>
      <HeadingBox title="FlashSale" display="none" Textsize={dynamicFontSize*2} />
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.NewSliderBox}>
            {flashshales.map((flashshale: any) => {
              return (
                <FlashShaleBox
                  key={'FlashShaleBox' + flashshale.id}
                  flashshale={flashshale}
                  navigation={navigation}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  NewSliderComponent: {
  },
  NewSliderBox: {
    display: 'flex',
    flexWrap: 'wrap',
    width:dynamicWidth,
    gap:dynamicPadding,
    alignItems:"center",
    justifyContent:"center",
    height:dynamicWidth*0.55,
    marginRight:dynamicMargin,
    marginBottom:dynamicMargin-10

  },
});

export default FlashSale;
