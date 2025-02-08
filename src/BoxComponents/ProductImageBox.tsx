import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import { dynamicBorderRadius } from '../assets/fonts/color'

const ProductImageBox = ({imageurl}:any) => {
  return (
    <FastImage source={{uri:imageurl}} style={styles.productimage}/>
  )
}

const styles = StyleSheet.create({    
    productimage:{
        height:"100%",
        width:"100%",
        resizeMode:"contain",
        borderRadius:dynamicBorderRadius,

    },
})

export default ProductImageBox

