import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { dynamicFontSize, Themes } from '../assets/fonts/color'

const TextBox = ({text}:any) => {
  return (
      <Text style={{fontSize:dynamicFontSize,color:Themes.color9,fontWeight:"bold"}}>
        {text}
      </Text>
  )
}

export default TextBox

const styles = StyleSheet.create({
  
})