import { Dimensions, ScrollView, StatusBar, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useMemo } from 'react'
import HeadingBox from '../BoxComponents/HeadingBox'
import TopProduct from '../components/TopProduct'
import WishlistComponent from '../components/WishlistComponent'
import MostPopular from '../components/MostPopular'
import { useData } from '../../APICall'
import { dynamicFontSize, dynamicPadding, dynamicWidth, Themes } from '../assets/fonts/color'

const FavoriteScreen = ({ navigation }: any) => {
  const { width } = useWindowDimensions(); // Using useWindowDimensions to track screen size
  const { categories, subcategories, products, favorites } = useData();

  const mostpopulars = useMemo(() => {
    return [...products].sort((a: any, b: any) => b.like - a.like).slice(0, 10);
  }, [products]);

 
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={"transparent"} />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.ScrollViewContainer} scrollEventThrottle={20}>
        <View>
          <HeadingBox title="Wishlist" display={"none"} Textsize={dynamicFontSize*3} />
        </View>
        <TopProduct name="Recent Viewed" products={products} navigation={navigation}/>
        <WishlistComponent favorites={favorites} navigation={navigation} />
        <MostPopular mostpopulars={mostpopulars} navigation={navigation} />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor:Themes.color1,
  },
  ScrollViewContainer: {
    padding:dynamicPadding,
  },
})

export default FavoriteScreen;
