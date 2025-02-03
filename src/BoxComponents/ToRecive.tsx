import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from './Button'
import ProfilePhotos from './ProfilePhoto'
import { demo } from '../../APICall'
import CustomIcons from '../assets/fonts/CustomIcons'
import HeadingBox from './HeadingBox'

const ToRecive = ({navigation}) => {
  return (
    <View style={styles.FirstView}>
      <View><ProfilePhotos/></View>
      <View><HeadingBox title={"To Recive"} display={"none"}/></View>
      <View style={styles.FirstView3}>
          <CustomIcons name="credit-card" color="#E6E6E6"/>
          <CustomIcons name="menu" color="#E6E6E6"/>
          <CustomIcons name="settings" color="#E6E6E6"/>
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
gap:5
},
FirstView3:{
// backgroundColor:"green",
display:"flex",
flexDirection:"row",
alignItems:"center",
gap:4,
marginLeft:22
},

})


export default ToRecive

