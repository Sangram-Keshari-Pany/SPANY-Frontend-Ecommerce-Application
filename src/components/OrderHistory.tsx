import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import OrderImageBox from '../BoxComponents/OrderImageBox'
import { baseURL } from '../../APICall'
import { dynamicBorderRadius, dynamicFontSize, dynamicPadding, dynamicWidth, Themes } from '../assets/fonts/color'

const OrderHistory = ({ navigation, deliveritem ,Setcurrentorders,setTrackorder }: any) => {
    const [images_path, setImagePath] = useState([])
    useEffect(() => {
        let iamge_path: any = []
        deliveritem.map((orderitems: any) => {
            iamge_path.push(baseURL + orderitems.product.product_image1)
        })
        setImagePath(iamge_path)
    }, [])
    return (
        <View style={styles.outerorderbox}>
            <View style={styles.orderbox}>
                <View style={styles.orderimagebox}>
                    <OrderImageBox images={images_path} />
                </View>
                <View style={styles.orderboxtext}>
                    <View style={styles.orderboxtext1}>
                        <Text style={styles.orderid}>{deliveritem[0].order.order_id}</Text>
                        <Text style={styles.orderstatus}>{deliveritem[0].order.status}</Text>
                    </View>
                    <View style={styles.orderboxtext2}>
                        <Text style={styles.items}>{deliveritem.length} items</Text>
                        {deliveritem[0].order.status=='Delivered' ?
                        ( <TouchableOpacity style={styles.TouchableOpacityReview}
                            onPress={()=>{Setcurrentorders(deliveritem),setTrackorder(true)}}
                        >
                            <Text style={styles.Review}>Review</Text>
                          </TouchableOpacity>)
                        :
                        (<TouchableOpacity style={styles.TouchableOpacityTrack}>
                            <Text style={styles.Track}>Track</Text>
                        </TouchableOpacity>)
                         }
                </View>
                </View>
            </View>
        </View>
    )
}

export default OrderHistory

const styles = StyleSheet.create({
    outerorderbox:{
        shadowColor:Themes.color4,
        shadowOffset: { width:0, height:1 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation:2,
        padding:5,
        borderRadius:dynamicBorderRadius-10,
        marginVertical:5,

    },
    orderbox: {
        height: dynamicWidth * 0.25,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    orderimagebox: {
        height: "100%",
        width: "26%",
        overflow:"hidden"
    },
    orderboxtext: {
        height: "100%",
        width: "74%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    orderboxtext1: {
        height: "100%",
        width: "60%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: dynamicPadding,
        // backgroundColor:"red"
    },
    orderid: {
        fontSize: dynamicFontSize,
        fontWeight: "bold",
        color:Themes.color9

    },
    orderstatus: {
        fontSize: dynamicFontSize,
        fontWeight: "bold",
        color:Themes.color9
    },
    orderboxtext2: {
        height: "100%",
        width: "40%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-end",
        // backgroundColor:"green",

    },
    totalorderitems: {
        width: "60%",
        height: "25%",
        backgroundColor: Themes.color3,
        borderRadius: dynamicBorderRadius - 10,

    },
    totalorderitemsText: {
        textAlign: "center",
        padding: dynamicPadding - 10,
        fontWeight: "bold",
        fontSize: dynamicFontSize,
        color:Themes.color9

    },
    TouchableOpacityReview:{
        height:"35%",
        width:"90%",
        borderRadius:dynamicBorderRadius-5,
        borderColor:Themes.color2,
        borderWidth:1,
        alignItems:"center",
        justifyContent:"center"
    },
    TouchableOpacityTrack:{
        height:"35%",
        width:"90%",
        borderRadius:dynamicBorderRadius-5,
        backgroundColor:Themes.color2,
        alignItems:"center",
        justifyContent:"center"
    },
    items:{
        fontWeight:"bold",
        fontSize:dynamicFontSize,
        paddingHorizontal:"5%",
        paddingVertical:"5%",
        borderRadius:dynamicBorderRadius-10,
        backgroundColor:Themes.color3,
        color:Themes.color9
    },
    Review:{
        fontSize:dynamicFontSize*1.5,
        color:Themes.color2
    },
    Track:{
        fontSize:dynamicFontSize*1.5,
        color:Themes.color6
    }
    

})