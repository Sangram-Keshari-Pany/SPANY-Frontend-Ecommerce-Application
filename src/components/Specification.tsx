import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CustomIcons from '../assets/fonts/CustomIcons';
import HeadingBox from '../BoxComponents/HeadingBox';
import { dynamicBorderRadius, dynamicFontSize, dynamicIconSize, dynamicPadding, Themes } from '../assets/fonts/color';

const Specification = ({productData}) => {
    const [showFull, setShowFull] = useState(false);
    const toggleText = () => {setShowFull(!showFull)};
  
    return (
      <View style={styles.container}>
        <HeadingBox title="Specification" display='none' Textsize={dynamicFontSize*1.5}/>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.specification}>
            {showFull ? productData.specification : productData.Highlights}
          </Text>

          <TouchableOpacity onPress={toggleText} style={styles.toggleText}>
                {showFull ? <CustomIcons color={Themes.color2} name="expand-less" size={dynamicFontSize*2}/>: <CustomIcons color={Themes.color2} name="expand-more" size={dynamicFontSize*2}/>}
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
    backgroundColor:Themes.color1,
    borderRadius:dynamicBorderRadius,
    },
    scrollContainer: {
      paddingHorizontal:dynamicPadding

    },
    specification: {
      fontSize:dynamicFontSize,
      fontWeight:"bold",
      color:Themes.color9,
    },
    toggleText: {
      position:"absolute",
      bottom:0,
      end:0
    },
  });
  

export default Specification

