import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Review from '../components/Review'
import HeadingBox from '../BoxComponents/HeadingBox'

const ReviewScreen = () => {
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={"transparent"}/>
      <ScrollView showsVerticalScrollIndicator={false} 
                        contentContainerStyle={styles.ScrollViewContainer} 
                        scrollEventThrottle={20}>
        <HeadingBox title="Reviews" display='none'/>
        <Review/>
        <Review/>
        <Review/>
        <Review/>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  ScreenContainer:{
    flex:1,
    backgroundColor:"#FFFFFF",
    width:"100%",
  },
  ScrollViewContainer:{
    width:"100%",
    padding:15
  },
})
export default ReviewScreen

