import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import CustomIcons from '../assets/fonts/CustomIcons'
import HeadingBox from '../BoxComponents/HeadingBox'
import Button from '../BoxComponents/Button'
import MostPopular from '../components/MostPopular'
import {demo, useData } from  '../../APICall'
import JustForYou from '../components/JustForYou'
import StarRating from '../BoxComponents/StarRatingBox'
import SpaceBox from '../BoxComponents/SpaceBox'
import ProductImageBox from '../BoxComponents/ProductImageBox'
import Specification from '../components/Specification'
import SimilarProduct from '../components/SimilarProduct'
import Review from '../components/Review'
import ProductPrice from '../components/ProductPrice'
import { add } from '../functionality/apifunctions'

const ProductScreen = ({navigation}) => {
    const [similarproducts,setSimilarproducts]=useState([])
    const [cartdetails,setCartDetails]=useState({})
    const { categories, subcategories, products, flashshales,favorites,reviews,cartitems,deliveritems,loading, error,fetchdata} = useData();
    const mostpopulars = useMemo(() => {
        return [...products].sort((a, b) => b.like - a.like).slice(0, 10);
      }, [products]);
    const route=useRoute()
    const productData = route.params as { [key: string]: any };
    useEffect(()=>{
      const similarProducts = products.filter(product => product.product_name === productData.product_name && product.id!=productData.id);
      setSimilarproducts(similarProducts);

    },[productData])

    return (
      <View style={styles.ScreenContainer}>
          <StatusBar backgroundColor={"transparent"}/>
          <ScrollView showsVerticalScrollIndicator={false} 
                      contentContainerStyle={styles.ScrollViewContainer} 
                      scrollEventThrottle={20}>
            <ProductImageBox productData={productData}/>
            <ProductPrice productData={productData}/>
            <HeadingBox title="Variations" display='none'/>
            <SimilarProduct similarProducts={similarproducts}/> 
            <HeadingBox title="Specification" display='none'/>
            <Specification  productData={productData}/>
            <HeadingBox title="Rating & Reviews" display='none'/>
            <StarRating rating={4.5} size={30}/>
            <Review/>
            <SpaceBox height={10} width={"100%"}/>
            <Button name={"View All Reviews"} height={50} width={"100%"} backgroundColor={"#004CFF"} borderRadius={12}color={"white"} size={20} Function={demo} functiondata={productData} navigation={navigation}/>
            <MostPopular mostpopulars={mostpopulars} navigation={navigation}/>
            <JustForYou products={products} navigation={navigation}/>
          </ScrollView>
          <View style={styles.PriceContainer2}>
            <CustomIcons color={"F9F9F9"} name="hearto" size={50}/>
            <View><Button name={"Add to cart"} height={50} width={150} backgroundColor={"black"} borderRadius={12}color={"white"} size={20} Function={add} functiondata={{product:productData.id,functionality:'Add To Cart'}} navigation={navigation}/></View>
            <View><Button name={"Buy Now"} height={50} width={150} backgroundColor={"#004CFF"} borderRadius={12}color={"white"} size={20} Function={add} functiondata={{product:productData.id,functionality:'Buy Now'}} navigation={navigation}/></View>
          </View>
      </View>
    )
}  

const styles = StyleSheet.create({
  ScreenContainer:{
    flex:1,
    backgroundColor:"#FFFFFF",
    width:"100%",
  },
  ScrollViewContainer:{
    width:"100%",
    padding:15
  },
  PriceContainer2:{
    height:55,
    width:"100%",
    backgroundColor:"#F9F9F9",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around"
  },   
})

export default ProductScreen

