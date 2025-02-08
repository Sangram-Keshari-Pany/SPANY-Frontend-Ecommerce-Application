import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomIcons from '../assets/fonts/CustomIcons';
import { dynamicBorderRadius, dynamicPadding, Themes } from '../assets/fonts/color';
const StarRating = ({ rating,size=10 }:any) => {
  const fullStars = Math.floor(rating); 
  const hasHalfStar = (rating - fullStars) >= 0.5;
  const emptyStars = 5 - (fullStars + (hasHalfStar ? 1 : 0)); 

  return (
    <View style={styles.ratingContainer}>
      {[...Array(fullStars)].map((_, index) => (
      <CustomIcons key={`full-${index}`} name="star" size={size} color="#FFAA00" />
      ))}
      {hasHalfStar && <CustomIcons name="star-half-o" size={size} color="#FFAA00" />}
      {[...Array(emptyStars)].map((_, index) => (
        <CustomIcons key={`empty-${index}`} name="star-o" size={size} color="#FFAA00" />
      ))}
      <Text style={{fontSize:size,...styles.ratingText}}>{rating}/5</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 10,
    // fontSize:18,
    color:Themes.color9,
    fontWeight:"bold",
    backgroundColor:Themes.color3,
    padding:dynamicPadding-10,
    borderRadius:dynamicBorderRadius-5,
  },
});

export default StarRating
