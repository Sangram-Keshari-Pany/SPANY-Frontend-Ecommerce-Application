import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'

const ProductImageBox = ({productData}) => {
  return (
    <View style={styles.imagecontainer}>
        <FastImage source={{uri:productData.product_image1}} style={styles.productimage}/>
    </View>
  )
}

const styles = StyleSheet.create({
    imagecontainer:{
        height:400,
        width:"100%",
        backgroundColor:"purple",
    },
    productimage:{
        height:"100%",
        width:"100%",
        resizeMode:"contain"
    },

})

export default ProductImageBox

