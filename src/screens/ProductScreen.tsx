import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import CustomIcons from '../assets/fonts/CustomIcons'
import Button from '../BoxComponents/Button'
import MostPopular from '../components/MostPopular'
import {demo, useData } from  '../../APICall'
import JustForYou from '../components/JustForYou'
import Specification from '../components/Specification'
import SimilarProduct from '../components/SimilarProduct'
import ProductPrice from '../components/ProductPrice'
import { add } from '../functionality/apifunctions'
import { dynamicBorderRadius, dynamicFontSize, dynamicIconSize, dynamicWidth, Themes } from '../assets/fonts/color'
import ProductImagecomponent from '../components/ProductImagecomponent'
import RatingComponent from '../components/RatingComponent'
import ReviewComponent from '../components/ReviewComponent'

const ProductScreen = ({navigation}:any) => {
    const { products,favorites, error,fetchdata} = useData();
    const route=useRoute()

    const [similarproducts,setSimilarproducts]=useState([])
    const [like,Setlike]=useState(false)

    const mostpopulars = useMemo(() => {
        return [...products].sort((a:any, b:any) => b.like - a.like).slice(0, 10);
      }, [products]);
    const productData = route.params as { [key: string]: any };


    useEffect(()=>{
      const similarProducts = products.filter((product:any) => product.product_name === productData.product_name && product.id!=productData.id);
      setSimilarproducts(similarProducts);

      const like=favorites.filter((favorite:any)=>favorite.product.id==productData.id)
      Setlike(like.length>0)

    },[productData])

    return (
      <View style={styles.ScreenContainer}>
          <StatusBar backgroundColor={"transparent"}/>
          <ScrollView showsVerticalScrollIndicator={false} 
                      contentContainerStyle={styles.ScrollViewContainer} 
                      scrollEventThrottle={20}>
            <ProductImagecomponent productData={productData}/>
            <ProductPrice productData={productData}/>
            <SimilarProduct similarProducts={similarproducts}/> 
            <Specification  productData={productData}/>
            <RatingComponent/>
            <ReviewComponent navigation={navigation}/>
            <MostPopular mostpopulars={mostpopulars} navigation={navigation}/>
            <JustForYou products={products} navigation={navigation} title={"Just For You"}/>
          </ScrollView>
          <View style={styles.ProductButtonSection}>
            {like==true?
            (<CustomIcons color={Themes.color8} name="hearto" size={dynamicIconSize}/>):
            (<CustomIcons color={Themes.color8} name="heart" size={dynamicIconSize}/>)
            }
            <View><Button name={"Add to cart"} height={dynamicFontSize*3.5} width={dynamicWidth*0.4} backgroundColor={"#000000"} borderRadius={dynamicBorderRadius}color={Themes.color6} size={dynamicFontSize*1.5} Function={add} functiondata={{product:productData.id,functionality:'Add To Cart'}} navigation={navigation}/></View>
            <View><Button name={"Buy Now"} height={dynamicFontSize*3.5} width={dynamicWidth*0.4} backgroundColor={Themes.color2} borderRadius={dynamicBorderRadius}color={Themes.color6} size={dynamicFontSize*1.5} Function={add} functiondata={{product:productData.id,functionality:'Buy Now'}} navigation={navigation}/></View>
          </View>
      </View>
    )
}  

const styles = StyleSheet.create({
  ScreenContainer:{
    flex:1,
    backgroundColor:Themes.color1,
  },
  ScrollViewContainer:{
    padding:15
  },
  ProductButtonSection:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-around",
    height:dynamicWidth*0.13,
    backgroundColor:Themes.color3,
  },   
})

export default ProductScreen

