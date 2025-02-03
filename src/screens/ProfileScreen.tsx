import { ScrollView, StatusBar, StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useEffect, useMemo } from 'react'
import MyActivity from '../BoxComponents/MyActivity';
import TopProduct from '../components/TopProduct';
import NewItems from '../components/NewItems';
import MostPopular from '../components/MostPopular';
import CategoryComponent from '../components/CategoryComponent';
import FlashSale from '../components/FlashSale';
import JustForYou from '../components/JustForYou';
import AnouncementBox from '../BoxComponents/AnouncementBox';
import StoryComponent from '../components/StoryComponent';
import HeadingBox from '../BoxComponents/HeadingBox';
import Button from '../BoxComponents/Button';
import { baseURL, useData } from '../../APICall'
import { demo } from '../../APICall';

// Get the screen width and height
const { width, height } = Dimensions.get('window');

const ProfileScreen = ({navigation}) => {
  const { categories, subcategories, products, flashshales, favorites, reviews, cartitems, deliveritems, loading, error, userDetails,fetchdata }:any = useData();

  const Announcemnet="🚀 Exciting New Feature: We’re thrilled to announce the launch of [feature name]! This new update will enhance your experience by [brief description]. Try it out today and let us know what you think!"

  const mostpopulars = useMemo(() => {
    return [...products].sort((a, b) => b.like - a.like).slice(0, 10);
  }, [products]);

  useEffect(()=>{console.log((userDetails));
  },[])

  function torecive (){
    navigation.navigate("recivescreen")
  }

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={"transparent"} />
      <ScrollView showsVerticalScrollIndicator={false}
                  contentContainerStyle={styles.ScrollViewContainer}
                  scrollEventThrottle={20}>
        <MyActivity name="My Activity" imageurl={baseURL+userDetails.profile_picture}/>
        <Text style={[styles.greetingText]}>{"Hello \n"+userDetails.username} !</Text>
        <AnouncementBox Announcement={Announcemnet} title="Announcement" icon="arrowright" />
        
        <TopProduct name="Recently viewed" products={products} navigation={navigation} />
        
        <HeadingBox title="Orders" display='none' />
        
        <View style={styles.ordercontainer}>
          <Button name={"To Pay"} height={50} width={width * 0.25} backgroundColor={"#CCD8FA"} borderRadius={20} color={"blue"} size={20} Function={demo} functiondata={{}} navigation={navigation} />
          <Button name={"To Recive"} height={50} width={width * 0.3} backgroundColor={"#CCD8FA"} borderRadius={20} color={"blue"} size={20} Function={torecive} functiondata={{}} navigation={navigation} />
          <Button name={"To Review"} height={50} width={width * 0.3} backgroundColor={"#CCD8FA"} borderRadius={20} color={"blue"} size={20} Function={demo} functiondata={{}} navigation={navigation} />
        </View>

        <StoryComponent reviews={reviews} />
        <NewItems products={products} navigation={navigation} />
        <MostPopular mostpopulars={mostpopulars} navigation={navigation} />
        <CategoryComponent categories={categories} subcategories={subcategories} navigation={navigation} />
        <FlashSale flashshales={flashshales} navigation={navigation} />
        <TopProduct name="Top Product" products={products} navigation={navigation} />
        <JustForYou products={products} navigation={navigation} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    width: "100%",
  },
  ScrollViewContainer: {
    width: "100%",
    padding: 15,
  },
  ordercontainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  greetingText: {
    fontSize: width * 0.05, // Responsive font size
    fontWeight: "bold",
    marginVertical: 10,
  },
});

export default ProfileScreen;
