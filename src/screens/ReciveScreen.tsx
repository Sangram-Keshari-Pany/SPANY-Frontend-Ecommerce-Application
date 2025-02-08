import { ScrollView, StatusBar, StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { demo, useData } from '../../APICall';
import ToRecive from '../BoxComponents/ToRecive';
import OrderHistory from '../components/OrderHistory';
import { baseURL } from '../../APICall';
import { dynamicWidth, dynamicFontSize, dynamicPadding, contentWidth, dynamicMargin, Themes } from '../assets/fonts/color';
import ReviewItems from '../BoxComponents/ReviewItems';

const ReciveScreen = ({ navigation }:any) => {
    const { categories, userDetails, subcategories, products, flashshales, favorites, reviews, cartitems, deliveritems, loading, error, fetchdata }:any = useData();
    const [trackorder, setTrackorder] = useState(false);
    const [currentorders, Setcurrentorders] = useState([]);
    const [slideAnim] = useState(new Animated.Value(0)); // for sliding animation

    useEffect(() => {
        if (trackorder) {
            Animated.timing(slideAnim, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }).start();
        } else {
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }).start();
        }
    }, [trackorder]);


    return (
        <View style={styles.ScreenContainer}>
            <StatusBar backgroundColor={"transparent"} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.ScrollViewContainer}
                scrollEventThrottle={20}
            >
                <ToRecive navigation={navigation} imageurl={baseURL + userDetails.profile_picture} />
                {deliveritems.map((deliveryitem: any) => {
                    return (
                        <OrderHistory navigation={navigation} deliveritem={deliveryitem} Setcurrentorders={Setcurrentorders} setTrackorder={setTrackorder}/>
                    );
                })}
            </ScrollView>

            {trackorder && (
                <ReviewItems currentorders={currentorders} navigation={navigation}/>
            )}
        </View>
    );
};

export default ReciveScreen;

const styles = StyleSheet.create({
    ScreenContainer: {
        flex: 1,
        backgroundColor:Themes.color1,
    },
    ScrollViewContainer: {
        padding: 15,
    },
    TrackOrderbox: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        maxHeight: '60%', // Control how much of the screen the track order box occupies
        zIndex: 10,
        overflow: 'hidden',
    },
    trackOrderText: {
        fontSize: dynamicFontSize + 2,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
});
