import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { dynamicBorderRadius, dynamicFontSize,Themes } from '../assets/fonts/color'
import ReviewBox from '../BoxComponents/ReviewBox'

const ReviewComponent = ({ navigation }: any) => {
    const imageurl = "http://192.168.0.116:8000/MEDIA/profile_pics/Untitled-2_copy.jpg"
    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero rem minima fugiat vel dolores quaerat, enim quam consectetur dolore ut molestias blanditiis voluptatibus esse. Sit eum iure reprehenderit quidem repellat."
    return (
        <View>
            <ReviewBox />
            <TouchableOpacity style={styles.TouchableOpacity} onPress={() => { navigation.navigate('reviewscreen') }}>
                <Text style={styles.TouchableOpacityText}>View All Reviews</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ReviewComponent

const styles = StyleSheet.create({
    TouchableOpacity: {
        height: dynamicFontSize * 3.5,
        backgroundColor: Themes.color2,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: dynamicBorderRadius
    },
    TouchableOpacityText: {
        color: Themes.color6,
        fontSize: dynamicFontSize * 1.5
    }
})