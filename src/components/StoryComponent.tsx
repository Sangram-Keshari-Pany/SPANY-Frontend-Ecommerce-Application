import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeadingBox from '../BoxComponents/HeadingBox'
import StoryBox from '../BoxComponents/StoryBox'

const StoryComponent = ({reviews}) => {
  return (
    <View>
        <HeadingBox title="Stories" display='none'/>
        <ScrollView horizontal={true}>
          {reviews.map((review)=>{
            return(<StoryBox key={review.id} videourl={review.video_review}/>)
          })}
        </ScrollView>
    </View>
  )
}

export default StoryComponent

const styles = StyleSheet.create({})