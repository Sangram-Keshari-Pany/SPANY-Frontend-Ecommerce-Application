import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import { useNavigation } from '@react-navigation/native';
const SameBox = ({product}) => {
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
        height:100,
        width:100,
        backgroundColor:"purple",
        borderRadius:10,
        marginRight:5,
    },
    image:{
      height:"100%",
      width:"100%",
      resizeMode:"cover"
    }
    
})