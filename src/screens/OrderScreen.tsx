import { ScrollView, StatusBar, StyleSheet, Text, View,} from 'react-native';
import React, { useEffect, useState } from 'react';
import AnouncementBox from '../BoxComponents/AnouncementBox';
import HeadingBox from '../BoxComponents/HeadingBox';
import CartComponent from '../components/CartComponent';
import WishlistComponent from '../components/WishlistComponent';
import Button from '../BoxComponents/Button';
import { useData, demo } from '../../APICall';
import { checkout } from '../functionality/apifunctions';
import { dynamicBorderRadius, dynamicFontSize, dynamicPadding, dynamicWidth, Themes } from '../assets/fonts/color';

const OrderScreen = ({ navigation }: any) => {
  const { userDetails, cartitems, favorites,shippingaddress }:any = useData();
  
  const [totalprice, setTotalprice] = useState(0);
  const [orderdata, setOrderData] = useState({});
  const [address,setAddress]= useState("Ankita Sahu jay gopal sahi dhenkanal odisha 759019 \n7978359909")


  useEffect(() => {
    const data = {order: null, user: null};
    try {
      data.order = cartitems[0].order.id;
      data.user = userDetails.username;
    } catch {
      console.log('error orderid');
    }
    console.log(data);
    let total = 0;
    cartitems.forEach((cartitem: any) => {
      total += (Number(cartitem.product.price) * Number(cartitem.quantity));
    });

    setOrderData(data);
    setTotalprice(total);
    
    
  }, [cartitems]);

  useEffect(()=>{
    console.log(shippingaddress);
    // setAddress(`${shippingaddress[0].name} , ${shippingaddress[0].address} , ${shippingaddress[0].landmark} ,${shippingaddress[0].city} , ${shippingaddress[0].state} , ${shippingaddress[0].country} ,${shippingaddress[0].zipcode}\n${shippingaddress[0].phone}`)
  },[shippingaddress])

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={"transparent"} />
      <ScrollView showsVerticalScrollIndicator={false}
                  contentContainerStyle={styles.ScrollViewContainer}
                  scrollEventThrottle={20}>
        <HeadingBox title="Cart" display="none" Textsize={dynamicFontSize *3} />
        <AnouncementBox  Announcement={address} title={"Shopping address"} icon="pencil" />
        <CartComponent orderitems={cartitems} navigation={navigation} />
        <HeadingBox title="From Your Wishlist" display='none' Textsize={dynamicFontSize*2}/>
        <WishlistComponent favorites={favorites} navigation={navigation} key={'OrderScreenWishlist'} />
        <Text>ORDER SCREEN</Text>
      </ScrollView>


      <View style={styles.PriceContainer}>
        <View style={styles.PriceBox}>
          <Text style={[styles.PriceText,]} allowFontScaling={false}>
            Total ₹{totalprice}
          </Text>
        </View>
        <View style={styles.PriceBox}>
          <Button  
            name={"Checkout"} 
            height={dynamicFontSize*3} 
            width={dynamicWidth*0.4} 
            backgroundColor={Themes.color2} 
            borderRadius={dynamicBorderRadius}
            color={Themes.color6} 
            size={dynamicFontSize*1.5} 
            Function={cartitems.length > 0 ? checkout : demo} 
            functiondata={orderdata} 
            navigation={navigation}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor:Themes.color1,
  },
  ScrollViewContainer: {
    padding: 15,
  },
  PriceContainer: {
    display: "flex",
    flexDirection: "row",
    padding:dynamicPadding-10,
    backgroundColor:Themes.color1,
  },
  PriceBox: {
    height: "100%",
    width: "50%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    color:Themes.color9
  },
  PriceText: {
    fontWeight: "bold",
    fontSize:dynamicFontSize*2,
    color:Themes.color9

  },
});

export default OrderScreen;
