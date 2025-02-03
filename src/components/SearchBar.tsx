import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';
import CustomIcons from '../assets/fonts/CustomIcons';
import { Themes } from '../assets/fonts/color';
import HeadingBox from '../BoxComponents/HeadingBox';
import { dynamicFontSize } from '../assets/fonts/color';
import { dynamicPadding } from '../assets/fonts/color';
import { dynamicBorderRadius } from '../assets/fonts/color';
const SearchBar = () => {
  return (
    <View style={styles.SearchBar}>
      <HeadingBox title="Shop" display="none" Textsize={dynamicFontSize *3} />
      <View style={styles.searchbox}>
        <TextInput
          style={styles.Input}
          placeholder="Search"
          placeholderTextColor={Themes.color7}
          multiline={false}
          scrollEnabled={true}
          allowFontScaling={false}
        />
        <CustomIcons name="camera" size={dynamicFontSize * 2} color={Themes.color2} />
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
    borderRadius: dynamicBorderRadius
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
    color: Themes.color6,
    fontFamily: 'Raleway',
    fontSize: dynamicFontSize,
    paddingLeft: dynamicPadding,
    borderRadius: dynamicBorderRadius,
  },

});

export default SearchBar;
