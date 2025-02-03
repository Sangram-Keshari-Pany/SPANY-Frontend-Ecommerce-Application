import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons

const StarRating = ({ rating,size=10 }) => {
  const fullStars = Math.floor(rating); 
  const hasHalfStar = (rating - fullStars) >= 0.5;
  const emptyStars = 5 - (fullStars + (hasHalfStar ? 1 : 0)); 

  return (
    <View style={styles.ratingContainer}>
      {[...Array(fullStars)].map((_, index) => (
        <Icon key={`full-${index}`} name="star" size={size} color="#FFAA00" />
      ))}
      {hasHalfStar && <Icon name="star-half-o" size={size} color="#FFAA00" />}
      {[...Array(emptyStars)].map((_, index) => (
        <Icon key={`empty-${index}`} name="star-o" size={size} color="#FFAA00" />
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
    color: '#000',
    fontWeight:"bold",
    backgroundColor:"#DFE9FF",
    padding:5,
  },
});

export default StarRating
