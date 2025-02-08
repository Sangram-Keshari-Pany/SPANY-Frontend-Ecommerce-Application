import { Animated, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CartBox from './CartBox'
import OrderBoxDetails from './OrderBoxDetails'
import { contentWidth, dynamicFontSize, dynamicMargin, dynamicWidth, Themes } from '../assets/fonts/color'
import { baseURL } from '../../APICall'

const ReviewItems = ({currentorders,navigation}:any) => {
    return (
        <Animated.View>
            <View style={styles.ReviewBox}>
                <Text style={styles.ReviewBoxText}>Which item you want to review?</Text>
            </View>
            <ScrollView style={styles.ScrollViewContainer}>
                {currentorders.map((currentorder: any) => {
                    return (
                        <View style={styles.cart} key={currentorders.order_id}>
                            <CartBox image={baseURL + currentorder.product.product_image1} />
                            <OrderBoxDetails navigation={navigation} orderitems={currentorder} />
                        </View>
                    )
                })}
            </ScrollView>
        </Animated.View>
    )
}

export default ReviewItems

const styles = StyleSheet.create({
    ScrollViewContainer: {
        padding: 15,
    },
    cart: {
        width: contentWidth,
        height: dynamicWidth * 0.28,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: dynamicMargin,
    },
    ReviewBox: {
        height: dynamicWidth * 0.15,
        backgroundColor: Themes.color3,
        alignItems: "center",
        justifyContent: "center"
    },
    ReviewBoxText: {
        fontSize: dynamicFontSize * 2,
        fontWeight: "bold"
    },
    Touchableopacity: {
        height: 35,
        width: 100,
        backgroundColor: Themes.color2
    }

})