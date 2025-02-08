import { StyleSheet, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import CustomIcons from '../assets/fonts/CustomIcons';
import { dynamicMargin, Themes } from '../assets/fonts/color';
import HeadingBox from '../BoxComponents/HeadingBox';
import { dynamicFontSize } from '../assets/fonts/color';
import { dynamicPadding } from '../assets/fonts/color';
import { dynamicBorderRadius } from '../assets/fonts/color';
const SearchBar = ({title,navigation,searcedhvalue=""}:any) => {
  const[searchvalue,setSearchvalue]=useState(searcedhvalue)
  return (
    <View style={styles.SearchBar}>
      {title.length>1?<HeadingBox title={title} display="none" Textsize={dynamicFontSize *3} />:null}
      <View style={styles.searchbox}>
        <TextInput
          style={styles.Input}
          placeholder="Search"
          placeholderTextColor={Themes.color7}
          multiline={false}
          scrollEnabled={true}
          allowFontScaling={false}
          value={searchvalue}
          onChangeText={(Text)=>{setSearchvalue(Text)}}
          onSubmitEditing={()=>{navigation.navigate("Home", { screen: "SearchScreen" ,params:{searchvalue:searchvalue}})}}
        />
        <View style={styles.camera}>
          <CustomIcons  name="camera" size={dynamicFontSize * 2} color={Themes.color2} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchbox: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    height: dynamicFontSize * 2.8,
    backgroundColor: Themes.color5,
    borderRadius: dynamicBorderRadius,
  },
  SearchBar: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Input: {
    flex: 1,
    height: "100%",
    color: Themes.color4,
    fontFamily: 'Raleway',
    fontSize: dynamicFontSize,
    paddingLeft: dynamicPadding,
    borderRadius: dynamicBorderRadius,
  },
  camera:{
    right:5
  }

});

export default SearchBar;
