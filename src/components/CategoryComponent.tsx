import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
import CategoryBox from '../BoxComponents/CategoryBox';
import HeadingBox from '../BoxComponents/HeadingBox';

import { dynamicFontSize } from '../assets/fonts/color';
import { contentWidth } from '../assets/fonts/color';
import { dynamicPadding } from '../assets/fonts/color';


const CategoryComponent = ({ navigation, categories, subcategories }: any) => {  
  return (
    <View style={{width:contentWidth,paddingBottom:dynamicPadding}}>
      <HeadingBox title="Categories" display={"flex"} Textsize={dynamicFontSize*2}/>
      <View style={styles.CategoryComopnentblock}>
        {categories.map((category: any, index: any) => {
          const subcategory = subcategories.filter(
            (subcategorydata: any) => subcategorydata.category == category.id
          );
          return (
            <CategoryBox
              key={'Category' + index}
              name={category.category_name}
              subcategory={subcategory}
              navigation={navigation}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  CategoryComopnentblock: {
    width:contentWidth,
    gap:10,
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default CategoryComponent;
