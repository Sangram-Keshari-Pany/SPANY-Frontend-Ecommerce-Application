import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { demo, useData } from '../../APICall';
import ToRecive from '../BoxComponents/ToRecive';
import OrderImageBox from '../BoxComponents/OrderImageBox';
import Button from '../BoxComponents/Button';
import SpaceBox from '../BoxComponents/SpaceBox';
import OrderHistory from '../components/OrderHistory';

const ReciveScreen = ({navigation}) => {
    const [completeOrder,setCompleteOrder]=useState()
    const { categories, subcategories, products, flashshales,favorites,reviews,cartitems,deliveritems,loading, error,fetchdata} = useData();
    return (
        <View style={styles.ScreenContainer}>
            <StatusBar backgroundColor={"transparent"}/>
            <ScrollView showsVerticalScrollIndicator={false} 
                        contentContainerStyle={styles.ScrollViewContainer} 
                        scrollEventThrottle={20}>
            <ToRecive navigation={navigation}/>
            {deliveritems.map((deliveryitem)=>{
                return(
                    <View>
                        <SpaceBox height={20} width={"100%"}/>
                        <OrderHistory key={`deliveritem${deliveritems.id}`} navigation={navigation} deliveritem={deliveryitem}/>
                    </View>
                )
            })}
            </ScrollView>
        </View>
  )
}

export default ReciveScreen

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
    orderbox:{
        height:100,
        width:"100%",
        // backgroundColor:"red",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
    },
})