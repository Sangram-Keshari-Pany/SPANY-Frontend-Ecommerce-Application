import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SameBox from '../BoxComponents/SameBox'

const SimilarProduct = ({similarProducts}) => {
  return (
    <ScrollView horizontal={true}>
        {similarProducts.map((similarProduct)=>{
            return(<SameBox product={similarProduct}/>)
        })}
    </ScrollView>
  )
}

export default SimilarProduct

const styles = StyleSheet.create({})