import { Image, StyleSheet, View, Dimensions } from 'react-native';
import React from 'react';
import { Backgroundcolor, Textcolor } from '../assets/fonts/color';

const ProfilePhotos = ({ imageurl = '' }) => {
  return (
    <View style={styles.PhotoContainer}>
      <Image style={styles.Image} source={{ uri: imageurl }} />
    </View>
  );
};

const styles = StyleSheet.create({
  PhotoContainer: {
    height:"100%",
    width:"100%", 
    overflow:"hidden"   
  },
  Image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain', 
    borderRadius: 35, 
  },
});

export default ProfilePhotos;
