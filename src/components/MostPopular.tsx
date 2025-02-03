import { StyleSheet, View, ScrollView } from 'react-native';
import React from 'react';
import PopularBox from '../BoxComponents/PopularBox';
import HeadingBox from '../BoxComponents/HeadingBox';


import { Backgroundcolor, dynamicFontSize, Textcolor } from '../assets/fonts/color';
import { contentWidth } from '../assets/fonts/color';
import { dynamicPadding } from '../assets/fonts/color';
import { dynamicBorderRadius } from '../assets/fonts/color';

const MostPopular = ({ navigation, mostpopulars }: any) => {
  return (
    <View style={{paddingTop:dynamicPadding}}>
      <HeadingBox title="Most Popular" display={"flex"} Textsize={dynamicFontSize*2} />
        <ScrollView
          horizontal={true}
          style={styles.ScrollVIew}
          showsHorizontalScrollIndicator={false}
        >
          {mostpopulars.map((mostpopular: any) => {
            return (
              <PopularBox
                key={'MostPopular' + mostpopular.id}
                mostpopular={mostpopular}
                navigation={navigation}
              />
            );
          })}
        </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
  ScrollVIew: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom:dynamicPadding,
  },
});

export default MostPopular;
