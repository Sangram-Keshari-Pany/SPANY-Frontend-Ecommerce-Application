import { Image, StyleSheet, View, } from 'react-native';
import React from 'react';
import { dynamicPadding } from '../assets/fonts/color';


const AddBox = () => {
  return (
    <View style={styles.Container}>
      <Image
        source={require('../assets/photos/Image.jpg')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    overflow: 'hidden',
    borderRadius: dynamicPadding,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: dynamicPadding,
  },
});

export default AddBox;
