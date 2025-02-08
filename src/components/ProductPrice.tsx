import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CustomIcons from '../assets/fonts/CustomIcons'
import { dynamicBorderRadius, dynamicFontSize, dynamicIconSize, dynamicPadding, dynamicWidth, Themes } from '../assets/fonts/color'

const ProductPrice = ({ productData }:any) => {
  return (
    <View style={styles.mainblock}>
      <View style={styles.priceblock}>
        <View style={styles.block1}>
          <View style={styles.block4}><Text style={styles.price}>₹ {Math.round(productData.price)}</Text></View>
          <View style={styles.block5}>
            <View style={styles.stopwatch}>
              <CustomIcons color={Themes.color8} name="stopwatch" size={dynamicIconSize-10} />
            </View>
            <View style={styles.stopwatch}>
              <Text style={styles.stopwatchtime}>12</Text>
            </View>
            <View style={styles.stopwatch}>
              <Text style={styles.stopwatchtime}>12</Text>
            </View>
            <View style={styles.stopwatch}>
              <Text style={styles.stopwatchtime}>00</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.block6}><CustomIcons color={Themes.color7} name="share-outline" size={dynamicIconSize} /></TouchableOpacity>
        </View>
        <View style={styles.block2}>
          <Text style={styles.specialprice}>{productData.cost_price}</Text>
          <Text style={styles.specialprice2}>{productData.discount}</Text>
        </View>
      </View>
      <View style={styles.block3}><Text style={styles.specialname}>{productData.product_name}</Text></View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainblock: {
    flex: 1,
  },
  priceblock: {
    height: dynamicWidth * 0.2,
    width: dynamicWidth,
  },
  block1: {
    height: "60%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  block2: {
    height: "40%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  block3: {
  },
  block4: {
    height: "100%",
    width: "30%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding:dynamicPadding-10
  },
  block5: {
    height: "100%",
    width: "50%",
    // backgroundColor:"pink",
    display: "flex",
    flexDirection:"row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  block6: {
    height: "100%",
    width: "12%",
    display: "flex",
    flexDirection:"row",
    borderRadius:"50%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:Themes.color5,
  },
  price: {
    fontWeight: "bold",
    color:Themes.color9,
    fontSize:dynamicFontSize*2,
  },
  specialprice: {
    fontSize:dynamicFontSize*1.5,
    padding: dynamicPadding-10,
    textDecorationLine: 'line-through',
    color:Themes.color7,
  },
  specialprice2: {
    width:"10%",
    fontSize:dynamicFontSize,
    padding: 2,
    color: "white",
    backgroundColor:"green",
    textAlign: "center",
    borderRadius:dynamicBorderRadius-10
  },
  specialname: {
    fontSize:dynamicFontSize*1.5,
    fontWeight: "bold",
    color:Themes.color9
  },
  stopwatch:{
    height:"80%",
    width:"20%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:Themes.color3,
    borderRadius:dynamicBorderRadius-5
  },
  stopwatchtime:{
    fontWeight:"bold",
    fontSize:dynamicFontSize*1.5,
    color:Themes.color9
  }

})

export default ProductPrice

