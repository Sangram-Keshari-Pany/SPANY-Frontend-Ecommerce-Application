import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'



const CustomIcons = ({name,color,size=45}:any) => {
  const Icons={
    'heart':<AntDesign name='heart' size={size} color={color}/>,
    'camera':<SimpleLineIcons  name="camera" size={size} color={color}/>,
    'arrow-u-left-top':<MaterialCommunityIcons name='arrow-u-left-top' size={size} color={color}/>,
    'arrowright':<AntDesign name='arrowright' size={size} color={color}/>,
    'pencil':<MaterialCommunityIcons name='pencil' size={size} color={color}/>,
    'credit-card':<Entypo name='credit-card' size={size} color={color}/>,
    'menu':<Entypo name='menu' size={size} color={color}/>,
    'settings':<Feather name='settings'  size={size} color={color}/>,
    'dash':<Octicons name='dash' size={size} color={color}/>,      
    'dot-fill':<Octicons name='dot-fill' size={size} color={color}/> ,



    
    'pluscircleo':<AntDesign name='pluscircleo' size={size} color="blue"/>,
    'minuscircleo':<AntDesign name='minuscircleo' size={size} color="blue"/>,
    'hearto':<AntDesign name='hearto' size={size} color="blue"/>,
    'shoppingcart':<AntDesign name='shoppingcart' size={size} color="blue"/>,
    
    'arrow-with-circle-down':<Entypo name='arrow-with-circle-down' size={size} color="blue"/>,
    'arrow-with-circle-up':<Entypo name='arrow-with-circle-up' size={size} color="blue"/>,
    'share-outline':<MaterialCommunityIcons name='share-outline' size={size} color="blue"/>,
  
  }
  return (
    <View style={{height:size,width:size,...styles.FirstView4}}>{Icons[name]}</View>
  )
}

const styles = StyleSheet.create({
    FirstView4:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:"50%"
    },
})

export default CustomIcons
