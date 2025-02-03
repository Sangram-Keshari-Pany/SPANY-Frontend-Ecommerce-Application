import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeadingBox from '../BoxComponents/HeadingBox'
import StarRating from '../BoxComponents/StarRatingBox'
import TextBox from '../BoxComponents/TextBox'
import ProfilePhotos from '../BoxComponents/ProfilePhoto'

const Review = () => {
  return (
    <View style={styles.reviewbox}>
        <View style={styles.reviewbox1}><ProfilePhotos/></View>
        <View style={styles.reviewbox2}>
            <HeadingBox title="Sangram" display='none'/>
            <StarRating rating={4.5} size={20}/>
            <TextBox text={"bkdbakakvdadvdvhvdh"}/>
        </View>
    </View>
  )
}

export default Review

const styles = StyleSheet.create({      
    reviewbox:{
        height:200,
        width:"100%",
        // backgroundColor:"pink",
        display:"flex",
        flexDirection:"row",
    },
    reviewbox1:{
        height:200,
        width:"20%",
        // backgroundColor:"green",
        display:"flex",
        flexDirection:"row",
        justifyContent:"center"
    },
    reviewbox2:{
        height:200,
        width:"80%",
        // backgroundColor:"blue"
    }
})