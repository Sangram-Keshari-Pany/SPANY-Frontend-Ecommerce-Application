import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import AddBox from '../BoxComponents/AddBox';
import { dynamicMargin, Themes } from '../assets/fonts/color';
import CustomIcons from '../assets/fonts/CustomIcons';

import { dynamicWidth } from '../assets/fonts/color';
import { dynamicIconSize } from '../assets/fonts/color';
import { dynamicBorderRadius } from '../assets/fonts/color';

const SlidingRow = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const cards = [
    {
      title: 'Hello',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://example.com/shopping-image.png',
    },
    {
      title: 'Welcome',
      description: 'Proin eu varius arcu. Vivamus id lorem id metus.',
      image: 'https://example.com/welcome-image.png',
    },
    {
      title: 'Welcome',
      description: 'Proin eu varius arcu. Vivamus id lorem id metus.',
      image: 'https://example.com/welcome-image.png',
    }, {
      title: 'Welcome',
      description: 'Proin eu varius arcu. Vivamus id lorem id metus.',
      image: 'https://example.com/welcome-image.png',
    },
    // Add more cards...
  ];

  const handleNext = () => {
    setCurrentCard(prev => (prev + 1) % cards.length);
  };

  return (
    <View>
      <TouchableOpacity style={styles.SlidingContainer} onPress={handleNext}>
        <AddBox />
      </TouchableOpacity>
      <View style={styles.paginationContainer}>
        {cards.map((_, index) => (
          <CustomIcons
            key={index}
            name={index === currentCard ? 'dash' : 'dot-fill'}
            size={dynamicIconSize}
            color={index === currentCard ? Themes.color2 : Themes.color7}
            style={{ marginHorizontal: 5 }}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  SlidingContainer: {
    width: dynamicWidth,
    alignItems: 'center',
    justifyContent: 'center',
    height: dynamicWidth * 0.39,
    borderRadius: dynamicBorderRadius,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: dynamicMargin,
  },
});

export default SlidingRow;
