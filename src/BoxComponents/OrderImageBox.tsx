import React from 'react';
import { View, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import { dynamicBorderRadius, dynamicMargin, dynamicWidth, Themes } from '../assets/fonts/color';


const OrderImageBox= ({images}:any) => {
  return (
    <View style={styles.container}>
      {images.length === 1 && (
        <View style={styles.fullImage}>
          <FastImage source={{ uri: images[0] }} style={styles.image} />
        </View>
      )}

      {images.length === 2 && (
        <View style={styles.twoImagesContainer}>
          <View style={styles.imageBox2}>
          <FastImage source={{ uri: images[0] }} style={styles.image} />
          </View>
          <View style={styles.imageBox2}>
            <FastImage source={{ uri: images[1] }} style={styles.image} />
          </View>
        </View>
      )}

      {images.length === 3 && (
        <View style={styles.threeImagesContainer}>
          <View style={styles.twoImagesContainer2}>
            <View style={styles.imageBox3}>
              <FastImage source={{ uri: images[0] }} style={styles.image} />
            </View>
            <View style={styles.imageBox3}>
              <FastImage source={{ uri: images[1] }} style={styles.image} />
            </View>
          </View>
          <View style={styles.imageBox32}>
            <FastImage source={{ uri: images[2] }} style={styles.image} />
          </View>
        </View>
      )}

      {images.length >= 4 && (
        <View style={styles.fourImagesContainer}>
          <View style={styles.imageBox}>
            <FastImage source={{ uri: images[0] }} style={styles.image} />
          </View>
          <View style={styles.imageBox}>
            <FastImage source={{ uri: images[1] }} style={styles.image} />
          </View>
          <View style={styles.imageBox}>
            <FastImage source={{ uri: images[2] }} style={styles.image} />
          </View>
          <View style={styles.imageBox}>
            <FastImage source={{ uri: images[3] }} style={styles.image} />
          </View>
        </View>
      )} 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:"100%",
    height:"100%",
    justifyContent: 'center',
    alignItems: 'center',
    borderColor:Themes.color10,
    backgroundColor:Themes.color1,
    borderRadius:dynamicBorderRadius-7,
    padding:5,

    
  },
  fullImage: {
    width: '100%',
    height: '100%',
    overflow:"hidden",
    borderRadius:dynamicBorderRadius,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius:dynamicBorderRadius-5,
    resizeMode:"contain"
  },
  twoImagesContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageBox2: {
    width: "48%", 
    height: "100%", 
    borderRadius:dynamicBorderRadius-5,

  },
  imageBox: {
    width:"50%" , 
    height:"50%",
  },
  threeImagesContainer: {
    width:'100%',
    height:'100%',
  },
  twoImagesContainer2: {
    width: '100%',
    height: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageBox3: {
    width:"50%", 
    height:"100%", 
  },
  imageBox32:{
    width:"100%", 
    height:"50%", 
  },

  fourImagesContainer: {
    width: '100%',
    height:"100%",
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});

export default OrderImageBox
