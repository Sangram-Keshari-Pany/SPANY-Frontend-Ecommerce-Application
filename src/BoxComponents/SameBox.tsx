import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import { useNavigation } from '@react-navigation/native';
import { dynamicBorderRadius, dynamicMargin, dynamicWidth } from '../assets/fonts/color';
const SameBox = ({product}:any) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.productbox} onPress={()=>navigation.navigate('productscreen',product)}>
      <FastImage source={{uri:product.product_image1}} style={styles.image}/>
    </TouchableOpacity>
  )
}

export default SameBox

const styles = StyleSheet.create({
    productbox:{
        height:dynamicWidth*0.25,
        width:dynamicWidth*0.25,
        backgroundColor:"purple",
        borderRadius:dynamicBorderRadius,
        marginRight:dynamicMargin,
    },
    image:{
      height:"100%",
      width:"100%",
      resizeMode:"contain"
    }
    
})