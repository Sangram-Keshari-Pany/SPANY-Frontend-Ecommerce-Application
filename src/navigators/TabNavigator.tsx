import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import FavoriteScreen from '../screens/FavoriteScreen'
import AppScreen from '../screens/AppScreen'
import OrderScreen from '../screens/OrderScreen'
import ProfileScreen from '../screens/ProfileScreen'

import Icon from 'react-native-vector-icons/AntDesign';
import { Textcolor } from '../assets/fonts/color'

const Tab=createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator 
    screenOptions={{
      tabBarHideOnKeyboard:true,
      headerShown:false,
      tabBarShowLabel:true,
      tabBarStyle:styles.tabBarStyle,
      tabBarItemStyle:styles.tabBarItemStyle,
      tabBarLabelStyle:styles.tabBarLabelStyle
    }}
    >
        <Tab.Screen name="Home" component={HomeScreen} 
        options={{headerShown: false,
                  tabBarIcon:({focused,color,size})=>(
                    <Icon name="home" size={size} color={color}/>
                  )
        }}/>
        <Tab.Screen name="Favorite" component={FavoriteScreen}
        options={{headerShown: false,
                  tabBarIcon:({focused,color,size})=>(
                    <Icon name="hearto" size={size} color={color}/>
                  )
        }}/>
        <Tab.Screen name="App" component={AppScreen} 
        options={{headerShown: false,
                  tabBarIcon:({focused,color,size})=>(
                    <Icon name="appstore-o" size={size} color={color}/>
                  )
        }}/>
        <Tab.Screen name="Order" component={OrderScreen}
        options={{headerShown: false,
                  tabBarIcon:({focused,color,size})=>(
                    <Icon name="shoppingcart" size={size} color={color}/>
                  )
        }}/>
        <Tab.Screen name="Profile" component={ProfileScreen} 
        options={{headerShown: false,
                  tabBarIcon:({focused,color,size})=>(
                    <Icon name="user" size={size} color={color}/>
                  )
        }}/>
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBarStyle: { 
    alignItems: 'center',
    justifyContent: 'center', 
  },
  tabBarItemStyle: {
  },
  tabBarIconStyle: {
    justifyContent: 'center', 
    alignItems: 'center',
    fontWeight:"bold",
    color:Textcolor.TextBlue
  },
  tabBarLabelStyle: {
    fontWeight: 'normal',
    fontSize:12, 
    textAlign: 'center', 
  }
})
export default TabNavigator

