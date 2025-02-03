import { StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import React from 'react';
import CustomIcons from '../assets/fonts/CustomIcons';
import { add } from '../functionality/apifunctions';
import { useData } from '../../APICall';
import { dynamicBorderRadius, dynamicFontSize, dynamicIconSize, dynamicPadding, Themes } from '../assets/fonts/color';

const WishlistBoxdetails = ({ product, navigation }: any) => {
  const {fetchdata}=useData()

  function perform(Function: any, functionality: any) {
    const orderdetails = {
      product: product.id,
      functionality: functionality,
    };
    Function(orderdetails, navigation, fetchdata);
  }

  return (
    <View style={styles.wishlistBox2}>
      <View style={[styles.wishlistBox3]}>
        <Text style={[styles.productName]} allowFontScaling={false}>
          {product.product_name.slice(0, 50)}
        </Text>
        <View style={styles.wishlistBox5}>
          <Text style={styles.Count} allowFontScaling={false}>₹ {product.price}</Text>
        </View>
      </View>
      <View style={styles.wishlistBox4}>
        <View style={styles.wishlistBox5}>
          <View style={styles.wishlistBox6}>
            <Text style={styles.Text} allowFontScaling={false}>Pink</Text>
          </View>
          <View style={styles.wishlistBox6}>
            <Text style={styles.Text} allowFontScaling={false}>M</Text>
          </View>
        </View>
        <View style={styles.wishlistBox7}>
          <TouchableOpacity onPress={() => { perform(add, 'wishlist'); }}>
            <CustomIcons color={'#FFFFFF'} name="shoppingcart" size={dynamicIconSize} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({ 
  wishlistBox2: {
    height:"100%",
    width: '55%',
    padding:dynamicPadding-10
  },
  wishlistBox3: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  productName: {
    flex: 1,
    fontWeight: 'bold',
    color:Themes.color9,
    fontSize:dynamicFontSize,
    paddingRight:dynamicPadding,
  },
  wishlistBox4: {
    height:"30%",
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  wishlistBox5: {
    width: '80%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',    
  },
  wishlistBox6: {
    height:"90%",
    width:"48%",
    display: 'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor:Themes.color3,
    borderRadius:dynamicBorderRadius,
  },
  wishlistBox7: {
    width: '20%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  Count: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize:dynamicFontSize,
    color:Themes.color9
  },
  Text: {
    fontSize:dynamicFontSize,
    textAlign: 'center',
    color:Themes.color9
  },
});

export default WishlistBoxdetails;
