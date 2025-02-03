import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
import CustomIcons from '../assets/fonts/CustomIcons';
import {dynamicBorderRadius, dynamicFontSize, dynamicIconSize, dynamicPadding, Textcolor, Themes } from '../assets/fonts/color';


const AnouncementBox = ({Announcement="", title, icon }: any) => {
  return (
    <View style={styles.AnouncementBox}>
      <View style={styles.Box1}>
        <Text style={styles.Announcement} allowFontScaling={false}>{title}</Text>
        <Text style={styles.Announcementcontent} allowFontScaling={false}>{Announcement}</Text>
      </View>
      <View style={styles.Box2}>
      <CustomIcons name={icon} color={Themes.color2} size={dynamicIconSize}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  AnouncementBox: {
    borderWidth:1,
    display: 'flex',
    flexDirection:'row',
    alignItems:'center',
    padding:dynamicPadding-10,
    borderColor:Themes.color10,
    backgroundColor:Themes.color1,
    justifyContent:'space-between',
    borderRadius:dynamicBorderRadius,
    shadowColor:Themes.color9,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  Box1: {
    flex:1
  },
  Box2: {
    alignItems:"center",
  },
  Announcement: {
    fontSize:dynamicFontSize*1.2,
    fontWeight: 'bold',
    color:Themes.color9
  },
  Announcementcontent:{
    fontSize:dynamicFontSize,
    color:Themes.color9
  }
});

export default AnouncementBox;
