import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SameBox from '../BoxComponents/SameBox'
import HeadingBox from '../BoxComponents/HeadingBox'
import { dynamicFontSize } from '../assets/fonts/color'

const SimilarProduct = ({similarProducts}:any) => {
  return (
    <View>
      <HeadingBox title="Variations" display='none' Textsize={dynamicFontSize*1.5}/>
    <ScrollView horizontal={true}>
        {similarProducts.map((similarProduct:any)=>{
            return(<SameBox product={similarProduct} key={'similarproduct'+similarProduct.id}/>)
        })}
    </ScrollView>
    </View>
  )
}

export default SimilarProduct

const styles = StyleSheet.create({})