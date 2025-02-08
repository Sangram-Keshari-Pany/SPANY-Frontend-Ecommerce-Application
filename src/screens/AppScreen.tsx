import React, { useEffect, useState } from 'react';
import { Text,FlatList, StyleSheet} from 'react-native';
import { useData } from '../../APICall';
import CategoryItemComponent from '../components/CategoryItemComponent';
import { dynamicFontSize, dynamicMargin, Themes } from '../assets/fonts/color';
import { useRoute } from '@react-navigation/native';


export default function CategoryFilter({navigation}:any) {
  const { categories, subcategories } = useData();
  const [expandedCategory, setExpandedCategory] = useState(null);
  const route:any = useRoute(); 
  useEffect(()=>{
    console.log(route.params.categoryId);
    if (route.params && route.params.categoryId) {
      setExpandedCategory(route.params.categoryId); 
    } else {
      setExpandedCategory(null);
    }
  },[route.params])
  return (
    <FlatList
      ListHeaderComponent={<Text style={styles.header}>All Categories</Text>}
      data={categories}
      keyExtractor={(item:any) => item.id.toString()}
      renderItem={({ item }) => (
        <CategoryItemComponent
          category={item}
          subcategories={subcategories.filter((sub:any) => sub.category === item.id)}
          expanded={expandedCategory === item.id}
          onPress={() => setExpandedCategory(expandedCategory === item.id ? null : item.id)}
          navigation={navigation}
        />
      )}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: { padding: 15 ,backgroundColor:Themes.color1},
  header: { fontSize:dynamicFontSize*3, fontWeight: 'bold', marginBottom:dynamicMargin ,color:Themes.color9},
});
