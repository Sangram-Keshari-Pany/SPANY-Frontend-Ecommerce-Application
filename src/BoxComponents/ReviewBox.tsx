import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProfilePhotos from './ProfilePhoto'
import HeadingBox from './HeadingBox'
import StarRating from './StarRatingBox'
import TextBox from './TextBox'
import { dynamicFontSize, dynamicPadding } from '../assets/fonts/color'

const ReviewBox = () => {
    const imageurl = "http://192.168.0.116:8000/MEDIA/profile_pics/Untitled-2_copy.jpg"
    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero rem minima fugiat vel dolores quaerat, enim quam consectetur dolore ut molestias blanditiis voluptatibus esse. Sit eum iure reprehenderit quidem repellat."
    return (
        <View>
            <View style={styles.reviewbox}>
                <View style={styles.reviewbox1}><ProfilePhotos imageurl={imageurl} /></View>
                <View style={styles.reviewbox2}>
                    <HeadingBox title="Sangram" display='none' Textsize={dynamicFontSize * 1.5} />
                    <StarRating rating={4.5} size={dynamicFontSize * 1.5} />
                    <TextBox text={text} />
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    reviewbox: {
        flex: 1,
        width: "100%",
        // backgroundColor:"pink",
        display: "flex",
        flexDirection: "row",
        paddingVertical: dynamicPadding
    },
    reviewbox1: {
        height: "40%",
        width: "20%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        paddingHorizontal: dynamicPadding
    },
    reviewbox2: {
        height: "100%",
        width: "80%",
    },
})

export default ReviewBox
