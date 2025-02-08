import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Review from '../components/ReviewComponent'
import HeadingBox from '../BoxComponents/HeadingBox'
import ReviewBox from '../BoxComponents/ReviewBox'
import { dynamicFontSize, Themes } from '../assets/fonts/color'

const ReviewScreen = () => {
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={"transparent"}/>
      <ScrollView showsVerticalScrollIndicator={false} 
                        contentContainerStyle={styles.ScrollViewContainer} 
                        scrollEventThrottle={20}>
        <HeadingBox title="Reviews" display='none' Textsize={dynamicFontSize*2}/>
        <ReviewBox/>
        <ReviewBox/>
        <ReviewBox/>
        <ReviewBox/>
        <ReviewBox/>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  ScreenContainer:{
    flex:1,
    backgroundColor:Themes.color1,
    width:"100%",
  },
  ScrollViewContainer:{
    width:"100%",
    padding:15
  },
})
export default ReviewScreen

