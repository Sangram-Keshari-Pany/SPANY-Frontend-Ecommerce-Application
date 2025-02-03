import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CustomIcons from '../assets/fonts/CustomIcons';

const Specification = ({productData}) => {
    const [showFull, setShowFull] = useState(false);
    const toggleText = () => {setShowFull(!showFull)};
  
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.specification}>
            {showFull ? productData.specification : productData.Highlights}
          </Text>

          <TouchableOpacity onPress={toggleText}>
            <Text style={styles.toggleText}>
                {showFull ? <CustomIcons color={"#FFFFFF"} name="arrow-with-circle-up" size={50}/>: <CustomIcons color={"#FFFFFF"} name="arrow-with-circle-down" size={50}/>}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
    backgroundColor: '#f9f9f9',
    //   backgroundColor: 'purple',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    scrollContainer: {
    //   paddingBottom: 20,
    },
    specification: {
      fontSize: 14,
    },
    toggleText: {
      color: '#007BFF',
      fontWeight: 'bold',
      textAlign:"right"
    },
  });
  

export default Specification

