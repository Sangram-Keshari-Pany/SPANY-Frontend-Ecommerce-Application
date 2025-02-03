import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomIcons from '../assets/fonts/CustomIcons'

const ProductPrice = ({productData}) => {
  return (
    <View style={styles.priceblock}>
        <View style={styles.block1}>
            <View style={styles.block4}><Text style={styles.price}>₹ {Math.round(productData.price)}</Text></View>
            <View style={styles.block5}><Text>timer</Text></View>
            <View style={styles.block6}><CustomIcons color={"#FFFFFF"} name="share-outline" size={50}/></View>
        </View>
        <View style={styles.block2}>
            <Text style={styles.specialprice}>{productData.cost_price}</Text>
            <Text style={styles.specialprice2}>{productData.discount}</Text>
        </View>
        <View style={styles.block3}><Text style={styles.specialname}>{productData.product_name}</Text></View>
    </View>
  )
}

const styles = StyleSheet.create({
    priceblock:{
        // paddingLeft:15,
        // paddingRight:15,
      },
      block1:{
        height:60,
        width:"100%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
      },
      block2:{
        height:30,
        display:"flex",
        flexDirection:"row",
        alignItems:"center"
      },
      block3:{
        // height:"50%",
        // width:"100%",
        // backgroundColor:"red"
      },
      block4:{
        height:"100%",
        width:"30%",
        // backgroundColor:"green",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        padding:5
      },
      block5:{
        height:"100%",
        width:"40%",
        // backgroundColor:"red"
      },
      block6:{
        height:"100%",
        width:"15%",
        // backgroundColor:"orange",
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
      },
      price:{
        fontSize:25,
        fontWeight:"bold",
      },
      specialprice:{
        width:"20%",
        fontSize:15,
        padding:5,
        textDecorationLine: 'line-through',
        color:"red"
      },
      specialprice2:{
        height:25,
        width:50,
        fontSize:15,
        padding:2,
        color:"white",
        backgroundColor:"pink",
        textAlign:"center",
        borderRadius:5
      },
      specialname:{
        fontWeight:"bold"
      },

})

export default ProductPrice

