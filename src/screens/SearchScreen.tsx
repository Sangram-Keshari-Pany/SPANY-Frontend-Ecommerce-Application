import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useData } from '../../APICall';
import JustForYou from '../components/JustForYou';
import { Backgroundcolor, dynamicPadding, Themes } from '../assets/fonts/color';
import SearchBar from '../components/SearchBar';
import NewItems from '../components/NewItems';

const SearchScreen = ({ route, navigation }: any) => {
  const [searchproducts, setSearchproducts]:any= useState([])
  const [ newproducts,setNewproduct] = useState([])
  const { subcategoryid, searchvalue } = route.params || {};
  const { products } = useData();

  useEffect(() => {
    console.log(route);

    console.log(subcategoryid);
    console.log(searchvalue);
    const filteredproducts = products.filter((product: any) => product.subcategory == subcategoryid)
    setSearchproducts(filteredproducts)

    if (subcategoryid == undefined) {
      const searchproducts = products.filter((product: any) => {
        const regex = new RegExp(`\\b${searchvalue}\\b`, 'i');
        return regex.test(product.product_name);
      })
      setSearchproducts(searchproducts)

      if (searchproducts.length == 0) {
        const searchproducts = products.filter((product: any) => {
          const regex = new RegExp(`\\b${searchvalue}\\b`, 'i');
          return regex.test(product.keyword);
        })
        setSearchproducts(searchproducts)
      }
    }
  }, [route])
  
  useEffect(()=>{
    try{
      const newproducts=products.filter((product:any)=>product.subcategory==searchproducts[0].subcategory)
      setNewproduct(newproducts.slice(-10))
    }catch{
      setNewproduct([])
    }
  },[searchproducts])


  return (
    <View style={styles.ScreenContainer}>
      <StatusBar hidden={false} barStyle="dark-content" backgroundColor={Backgroundcolor.backgroundWhite} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.ScrollViewContainer, { padding: dynamicPadding }]}
        scrollEventThrottle={20}
      >
        <SearchBar title={""} navigation={navigation} searcedhvalue={searchvalue} />
        <JustForYou products={searchproducts} navigation={navigation} title={""} />
        <NewItems products={newproducts} navigation={navigation}/>
      </ScrollView>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: Themes.color1,
  },
  ScrollViewContainer: {
    zIndex: -1,
  },
})