import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
 const Stack=createNativeStackNavigator()
const HomeNavigators = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="SearchScreen" component={SearchScreen}></Stack.Screen>
    </Stack.Navigator>
  )
}

export default HomeNavigators

const styles = StyleSheet.create({})