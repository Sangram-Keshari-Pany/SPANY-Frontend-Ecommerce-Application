import { StyleSheet, View, ScrollView, Dimensions } from 'react-native';
import React from 'react';
import ProductBox from '../BoxComponents/ProductBox';
import HeadingBox from '../BoxComponents/HeadingBox';
import { contentWidth, dynamicFontSize, dynamicMargin } from '../assets/fonts/color';


const JustForYou = ({ navigation, products, title }: any) => {

  return (
    <View>
      {title.length > 1 ? <HeadingBox title={title} display="none" Textsize={dynamicFontSize * 2} /> : null}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.CategoryContainer}>
          {products.map((product: any) => (
            <ProductBox
              key={'ProductBox' + product.id}
              product={product}
              navigation={navigation}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  CategoryContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: contentWidth,
    justifyContent: 'space-between',
    marginVertical:dynamicMargin
  },
});

export default JustForYou;
