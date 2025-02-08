import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeadingBox from '../BoxComponents/HeadingBox'
import StarRating from '../BoxComponents/StarRatingBox'
import { dynamicFontSize, dynamicPadding } from '../assets/fonts/color'

const RatingComponent = () => {
  return (
    <View>
      <HeadingBox title="Rating & Reviews" display='none' Textsize={dynamicFontSize *1.5}/>
      <View style={{paddingHorizontal:dynamicPadding}}>
        <StarRating rating={4.5} size={dynamicFontSize*2}/>
      </View>
    </View>
  )
}

export default RatingComponent

const styles = StyleSheet.create({})