import { StyleSheet, View, ScrollView, Dimensions } from 'react-native';
import React from 'react';
import ProductBox from '../BoxComponents/ProductBox';
import HeadingBox from '../BoxComponents/HeadingBox';
import { contentWidth, dynamicFontSize } from '../assets/fonts/color';

const { width } = Dimensions.get('window'); // Get screen width for responsiveness

const JustForYou = ({ navigation, products }: any) => {
  // Set width based on screen size
  const boxWidth = width < 375 ? '48%' : '48%'; // Ensure that it takes 48% width on smaller screens

  return (
    <View>
      <HeadingBox title="Just For You" display="none" Textsize={dynamicFontSize*2}/>

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
    flexDirection:'row',
    width: contentWidth,
    justifyContent: 'space-between',
  },
});

export default JustForYou;
