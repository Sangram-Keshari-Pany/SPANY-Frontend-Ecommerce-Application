import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import FastImage from 'react-native-fast-image';


const OrderImageBox= ({images}) => {
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
            <View style={styles.imageBox}>
              <FastImage source={{ uri: images[0] }} style={styles.image} />
            </View>
            <View style={styles.imageBox}>
              <FastImage source={{ uri: images[1] }} style={styles.image} />
            </View>
          </View>
          <View style={styles.imageBox3}>
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

const containerSize =100; // Define the fixed container size

const styles = StyleSheet.create({
  container: {
    width: containerSize,
    height: containerSize,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullImage: {
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius:5,
  },
  twoImagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
  },
  imageBox: {
    width: containerSize / 2-5 , // 50% of the container width minus some margin
    height: containerSize / 2-5 , // 50% of the container height minus some margin
    margin:2,
    // backgroundColor:"green"
  },
  imageBox2: {
    width: containerSize/2 -5 , 
    height: containerSize-5 , 
    margin:2,
    backgroundColor:"green"
  },
  threeImagesContainer: {
    width: '100%',
    height: '100%',
  },
  twoImagesContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: '50%',
  },
  imageBox3: {
    width: containerSize -5 , 
    height: containerSize/2-5 , 
    margin:2,
    backgroundColor:"green"
  },
  fourImagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default OrderImageBox
