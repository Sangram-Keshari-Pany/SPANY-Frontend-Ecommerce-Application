import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import NewItemBox from '../BoxComponents/NewItemBox';
import HeadingBox from '../BoxComponents/HeadingBox';
import { dynamicFontSize } from '../assets/fonts/color';


const NewItems = ({ navigation, products }: any) => {
  return (
    <View>
      <HeadingBox title="New Items" display={"flex"} Textsize={dynamicFontSize*2} />
      <View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {products.map((product: any) => {
            return (
              <NewItemBox
                key={'NewItemBox' + product.id}
                product={product}
                navigation={navigation}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
});

export default NewItems;
