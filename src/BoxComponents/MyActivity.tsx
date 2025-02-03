import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomIcons from '../assets/fonts/CustomIcons'
import ProfilePhotos from './ProfilePhoto'
import Button from './Button'
import { demo } from '../../APICall'
import { Textcolor } from '../assets/fonts/color'

const MyActivity = ({navigation,imageurl,name}:any) => {
  return (
    <View style={styles.FirstView}>
        <ProfilePhotos imageurl={imageurl}/>
        <View><Button navigation={navigation} name={name} height={40} width={150} backgroundColor={"#004CFF"} borderRadius={50}color={"white"} size={20} Function={demo} functiondata={{}}/></View>
        <View style={styles.FirstView3}>
            <CustomIcons name="credit-card" color={Textcolor.TextBlue} size={30}/>
            <CustomIcons name="menu" color={Textcolor.TextBlue} size={30}/>
            <CustomIcons name="settings"  color={Textcolor.TextBlue} size={30}/>
        </View>
    </View>
  )
}  

const styles = StyleSheet.create({
    FirstView:{
    // backgroundColor:"red",
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    gap:5
    },
    FirstView3:{
    // backgroundColor:"green",
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    gap:5,
    marginLeft:22
    },
    
})

export default MyActivity

