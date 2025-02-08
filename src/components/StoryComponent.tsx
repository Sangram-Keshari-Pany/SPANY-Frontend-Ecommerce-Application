import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeadingBox from '../BoxComponents/HeadingBox'
import StoryBox from '../BoxComponents/StoryBox'
import { dynamicFontSize } from '../assets/fonts/color'

const StoryComponent = ({reviews}:any) => {
  return (
    <View>
        <HeadingBox title="Stories" display='none' Textsize={dynamicFontSize*2}/>
        <ScrollView horizontal={true}>
          {reviews.map((review:any)=>{
            return(<StoryBox key={review.id} videourl={review.video_review}/>)
          })}
        </ScrollView>
    </View>
  )
}

export default StoryComponent

const styles = StyleSheet.create({})