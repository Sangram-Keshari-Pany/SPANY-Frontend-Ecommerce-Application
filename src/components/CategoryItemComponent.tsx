import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import { dynamicBorderRadius, dynamicFontSize, dynamicMargin, dynamicPadding, dynamicWidth, Themes } from '../assets/fonts/color'

const CategoryItemComponent = ({navigation, category, subcategories, expanded, onPress }: any) => {
    return (
        <View>
            <TouchableOpacity style={styles.categoryItem} onPress={onPress}>
                <FastImage source={{ uri: category.category_image }} style={styles.icon} />
                <Text style={styles.categoryText}>{category.category_name}</Text>
            </TouchableOpacity>

            {expanded && subcategories.length > 0 && (
                <View style={styles.subcategoryContainer}>
                    {subcategories.map((sub: any, index: any) => (
                        <TouchableOpacity key={index} style={styles.subcategoryItem} onPress={()=>{navigation.navigate("Home", { screen: "SearchScreen",params: { subcategoryid: sub.id }})}}>
                            <Text style={styles.categoryText}>{sub.sub_category_name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    )
}

export default CategoryItemComponent

const styles = StyleSheet.create({
    categoryItem: { 
        borderWidth:1,
        flexDirection:'row',
        alignItems:'center',
        width:dynamicWidth,
        height:dynamicWidth*0.2,
        borderColor:Themes.color10,
        marginBottom:dynamicMargin-10,
        backgroundColor:Themes.color1,
        borderRadius:dynamicBorderRadius-8,

        shadowColor:Themes.color4,
        shadowOffset: { width:0, height:2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation:5,
    },
    icon: { 
        width:"20%",
        height:"100%",
        borderWidth:5,
        marginRight:dynamicMargin,
        borderColor:Themes.color10,
        backgroundColor:Themes.color1,
        borderRadius:dynamicBorderRadius-8,
    },
    categoryText: { 
        fontSize:dynamicFontSize*1.5,
        fontWeight:"bold" ,
        color:Themes.color9,
    },
    subcategoryContainer: { 
        display:"flex",
        flexWrap:"wrap",
        gap:dynamicMargin,
        flexDirection:"row",
        width:dynamicWidth,
        marginVertical:dynamicMargin,
        justifyContent:"space-between",
    },
    subcategoryItem: { 
        borderWidth:1,
        padding:dynamicPadding,
        width:dynamicWidth*0.48,
        justifyContent:"center",
        alignItems:"center",
        borderColor:Themes.color2,
        borderRadius:dynamicBorderRadius-8,
    },
})