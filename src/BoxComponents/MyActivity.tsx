import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CustomIcons from '../assets/fonts/CustomIcons'
import ProfilePhotos from './ProfilePhoto'
import Button from './Button'
import { demo } from '../../APICall'
import { contentWidth, dynamicBorderRadius, dynamicFontSize, dynamicIconSize, dynamicPadding, Textcolor, Themes } from '../assets/fonts/color'

const MyActivity = ({ navigation, imageurl, name }: any) => {
  return (
    <View style={styles.FirstView}>
      <View style={styles.profilebox}>
        <TouchableOpacity style={styles.TouchableOpacity}>
          <ProfilePhotos imageurl={imageurl} />
        </TouchableOpacity>
        <Button navigation={navigation} name={name} height={dynamicFontSize*3} width={contentWidth * 0.35} backgroundColor={Themes.color2} borderRadius={dynamicBorderRadius} color={Themes.color6} size={dynamicFontSize*1.5} Function={demo} functiondata={{}} />
      </View>
      <View style={styles.FirstView3}>
        <TouchableOpacity style={styles.iconbox}>
          <CustomIcons name="credit-card" color={Themes.color2} size={dynamicIconSize-12} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconbox}>
          <CustomIcons name="menu" color={Themes.color2} size={dynamicIconSize-12} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconbox}>
          <CustomIcons name="settings" color={Themes.color2} size={dynamicIconSize-12} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  FirstView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: contentWidth,
    height: contentWidth * 0.15,
  },
  profilebox: {
    width: "50%",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",

  },
  TouchableOpacity: {
    height: "100%",
    width: "30%",
    marginRight: dynamicPadding,
    borderRadius: "50%",
    overflow: 'hidden',
    shadowColor: Themes.color4,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
    borderWidth: 1,
    borderColor: Themes.color10,
    backgroundColor: Themes.color1,
  },
  FirstView3: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap:dynamicPadding-10,
  },
  iconbox:{
    backgroundColor:Themes.color5,
    padding:dynamicPadding-5,
    borderRadius:"50%"
  }

})

export default MyActivity

