import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Button from '../BoxComponents/Button'
import OrderImageBox from '../BoxComponents/OrderImageBox'
import { demo } from '../../APICall'
import { baseURL } from '../../APICall'
const OrderHistory = ({navigation,deliveritem}) => {
    const [images_path,setImagePath]=useState([])
    useEffect(()=>{ 
        let iamge_path=[]
        deliveritem.map((orderitems)=>{
            iamge_path.push(baseURL+orderitems.product.product_image1)
        })
        setImagePath(iamge_path)  
    },[])
    return (
    <View style={styles.orderbox}>
        <View style={styles.orderimagebox}><OrderImageBox images={images_path}/></View>
        <View style={styles.orderboxtext}>
            <View style={styles.orderboxtext1}>
                <Text style={styles.orderid}>{deliveritem[0].order.order_id}</Text>
                <Text style={styles.orderstatus}>{deliveritem[0].order.status}</Text>
            </View>
            <View style={styles.orderboxtext2}>
                <Text style={styles.totalorderitems}>{deliveritem.length} items</Text>
                <View ><Button name={"Track"} height={35} width={100} backgroundColor={"#004CFF"} borderRadius={10}color={"white"} size={20} Function={demo} functiondata={{}} navigation={navigation}/></View>
            </View>
        </View>
    </View>
    )
}

export default OrderHistory

const styles = StyleSheet.create({
    orderbox:{
        height:100,
        width:"100%",
        // backgroundColor:"red",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    orderimagebox:{
        height:"100%",
        width:"26%",
        borderWidth:0.5,
        borderColor:"black",
        borderRadius:10,


    },
    orderboxtext:{
        height:"100%",
        width:"74%",
        // backgroundColor:"green",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    orderboxtext1:{
        height:"100%",
        width:"60%",
        // backgroundColor:"blue",
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        padding:10
    },
    orderid:{
        fontSize:15,
        fontWeight:"bold"
    },
    orderstatus:{
        fontSize:20,
        fontWeight:"bold"
    },
    orderboxtext2:{
        height:"100%",
        width:"40%",
        // backgroundColor:"pink",
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        alignItems:"flex-end"
    },
    totalorderitems:{
        width:70,
        height:25,
        fontSize:15,
        backgroundColor:"#E5EBFC",
        borderRadius:5,
        textAlign:"center"
    }

})