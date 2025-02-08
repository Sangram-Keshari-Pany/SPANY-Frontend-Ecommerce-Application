import { ScrollView, StatusBar, StyleSheet, Text, View, Dimensions } from 'react-native';
import React, { useMemo } from 'react';
import SearchBar from '../components/SearchBar';
import SlidingRow from '../components/SlidingRow';
import CategoryComponent from '../components/CategoryComponent';
import TopProduct from '../components/TopProduct';
import NewItems from '../components/NewItems';
import FlashSale from '../components/FlashSale';
import MostPopular from '../components/MostPopular';
import JustForYou from '../components/JustForYou';
import { useData } from '../../APICall';
import { Backgroundcolor, Themes } from '../assets/fonts/color';

import { dynamicPadding } from '../assets/fonts/color';

function HomeScreen({ navigation }: any) {
  const { categories, subcategories, products, flashshales, loading } = useData();

  const mostpopulars = useMemo(() => {
    return [...products].sort((a:any, b:any) => b.like - a.like).slice(0, 10);
  }, [products]);

  if (loading) {
    return <Text>Loading...</Text>;
  } else {

    return (
      <View style={styles.ScreenContainer}>
        <StatusBar hidden={false} barStyle="default"  />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[styles.ScrollViewContainer, { padding: dynamicPadding }]}
          scrollEventThrottle={20}
        >
          <SearchBar title={"Shop"} navigation={navigation}/>
          <SlidingRow/>
          <CategoryComponent categories={categories} subcategories={subcategories} navigation={navigation}/>
          <TopProduct name="Top Products" products={products} navigation={navigation}/>
          <NewItems products={products} navigation={navigation}/>
          <FlashSale flashshales={flashshales} navigation={navigation} />
          <MostPopular mostpopulars={mostpopulars} navigation={navigation} />
          <JustForYou products={products} navigation={navigation} title={"Just For You"}/>
        </ScrollView>
      </View>
    );
  }  
}

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: Themes.color1,
  },
  ScrollViewContainer: {
    zIndex: -1,
  },
}); 

export default HomeScreen;
