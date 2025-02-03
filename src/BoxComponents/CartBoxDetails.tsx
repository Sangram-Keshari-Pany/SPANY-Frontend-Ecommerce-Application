import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import CustomIcons from '../assets/fonts/CustomIcons';
import { add } from '../functionality/apifunctions';
import { useData } from '../../APICall';
import { dynamicFontSize, dynamicIconSize, dynamicPadding, Themes } from '../assets/fonts/color';

const CartBoxDetails = ({ orderitems, navigation }: any) => {
  const { fetchdata } = useData();

  function perform(Function: any, functionality: string) {
    const orderdetails = {
      product: orderitems.product.id,
      order: orderitems.order.id,
      functionality: functionality,
    };
    Function(orderdetails, navigation, fetchdata);
  }

  return (
    <View style={styles.CartBox2}>
      <View style={styles.CartBox3}>
        <Text style={styles.ProductName} allowFontScaling={false}>
          {orderitems.product.product_name.slice(0, 50)}
        </Text>
        <Text style={styles.ProductSize} allowFontScaling={false}>
          {orderitems.product.size.slice(0, 30)}
        </Text>
      </View>
      <View style={styles.CartBox4}>
        <View style={styles.CartBox5}>
          <Text style={styles.Count} allowFontScaling={false}>
            ₹ {orderitems.product.price}
          </Text>
        </View>
        <View style={styles.CartBox5}>
          <TouchableOpacity onPress={() => { perform(add, 'remove'); }}>
            <CustomIcons color={Themes.color2} name="minuscircleo" size={dynamicIconSize - 5} />
          </TouchableOpacity>
          <View style={styles.CartBox6}>
            <Text style={styles.Count} allowFontScaling={false}>{orderitems.quantity}</Text>
          </View>
          <TouchableOpacity onPress={() => { perform(add, 'add'); }}>
            <CustomIcons color={Themes.color2} name="pluscircleo" size={dynamicIconSize - 5} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  CartBox2: {
    height: "100%",
    width: '55%',
    padding: dynamicPadding - 10
  },
  CartBox3: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  CartBox4: {
    height: "30%",
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
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
    fontWeight: 'bold',
    color: Themes.color9,
    fontSize: dynamicFontSize,
  },
  ProductSize: {
    color: Themes.color9,
    fontSize: dynamicFontSize,
  },
});

export default CartBoxDetails;
