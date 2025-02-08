import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import CustomIcons from '../assets/fonts/CustomIcons';
import { useData } from '../../APICall';
import { dynamicFontSize, dynamicIconSize, dynamicPadding, Themes } from '../assets/fonts/color';

const OrderBoxDetails = ({ orderitems, navigation }: any) => {
  return (
    <View style={styles.CartBox2}>
      <View style={styles.CartBox3}>
        <Text style={styles.ProductName} allowFontScaling={false}>
          {orderitems.product.product_name.slice(0, 50)}
        </Text>
        <Text style={styles.ProductSize} allowFontScaling={false}>
          {orderitems.order.order_id}
        </Text>
      </View>
      <View style={styles.CartBox4}>
        <View style={styles.estimatedate}>
            <Text style={styles.estimatedatetext}>DATE</Text>
        </View>
        <TouchableOpacity style={styles.review}>
            <Text style={styles.reviewtext}>Review</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  CartBox2: {
    height: "100%",
    width: '55%',
    padding: dynamicPadding - 10,
    // backgroundColor:"red",
  },
  CartBox3: {
    height:"65%",
    flexDirection: 'column',
    justifyContent: 'center',
  },
  CartBox4: {
    height: "35%",
    width: '96%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent:"space-between",
    alignItems:"center",
  },
  CartBox5: {
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  CartBox6: {
    height: "100%",
    width: "30%",
    display: 'flex',
    borderRadius: "50%",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Themes.color3
  },
  Count: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: Themes.color9,
    fontSize: dynamicFontSize,
  },
  ProductName: {
    flex: 1,
    paddingRight: 10,
    color: Themes.color9,
    fontSize: dynamicFontSize-3,
  },
  ProductSize: {
    fontWeight: 'bold',
    color: Themes.color9,
    fontSize: dynamicFontSize,
  },
  estimatedate:{
    height:"100%",
    width:"49%",
    backgroundColor:Themes.color5,
    borderRadius:10,
    alignItems:"center",
    justifyContent:"center",
  },
  review:{
    height:"100%",
    width:"49%",
    // backgroundColor:"green",
    borderRadius:10,
    alignItems:"center",
    justifyContent:"center",
    borderWidth:1,
    borderColor:Themes.color2
  },
  estimatedatetext:{
    fontSize:dynamicFontSize*1.5,
    color:Themes.color9
  },
  reviewtext:{
    fontSize:dynamicFontSize*1.5,
    color:Themes.color2
  }
});

export default OrderBoxDetails;
