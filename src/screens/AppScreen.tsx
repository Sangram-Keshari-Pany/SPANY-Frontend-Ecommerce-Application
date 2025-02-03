import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, ScrollView, Image } from 'react-native';

const categories = [
  {
    id: '1',
    title: 'Clothing',
    subcategories: ['Dresses', 'Pants', 'Skirts', 'Shorts', 'Jackets', 'Hoodies', 'Shirts', 'Polo', 'T-Shirts', 'Tunics'],
  },
  { id: '2', title: 'Shoes',},
  { id: '3', title: 'Bags',},
  { id: '4', title: 'Lingerie', },
  { id: '5', title: 'Accessories', },
  { id: '6', title: 'Just for You', }
];

const CategoryItem = ({ category, expanded, onPress }) => (
  <View>
    <TouchableOpacity style={styles.categoryItem} onPress={onPress}>
      <Image source={category.icon} style={styles.icon} />
      <Text style={styles.categoryText}>{category.title}</Text>
      {category.subcategories && (8
        // <Ionicons name={expanded ? 'chevron-up' : 'chevron-down'} size={20} color='black' />
      )}
    </TouchableOpacity>
    {expanded && category.subcategories && (
      <View style={styles.subcategoryContainer}>
        {category.subcategories.map((sub, index) => (
          <TouchableOpacity key={index} style={styles.subcategoryItem}>
            <Text>{sub}</Text>
          </TouchableOpacity>
        ))}
      </View>
    )}
  </View>
);

export default function CategoryFilter() {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (id) => {
    setExpandedCategory(expandedCategory === id ? null : id);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>All Categories</Text>
      <View style={styles.toggleContainer}>
        <TouchableOpacity style={styles.toggleButton}><Text>All</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.toggleButton, styles.activeButton]}><Text>Female</Text></TouchableOpacity>
        <TouchableOpacity style={styles.toggleButton}><Text>Male</Text></TouchableOpacity>
      </View>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CategoryItem
            category={item}
            expanded={expandedCategory === item.id}
            onPress={() => toggleCategory(item.id)}
          />
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  toggleContainer: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 16 },
  toggleButton: { padding: 10, backgroundColor: '#eee', borderRadius: 10 },
  activeButton: { backgroundColor: '#007bff', color: 'white' },
  categoryItem: { flexDirection: 'row', alignItems: 'center', padding: 12, borderBottomWidth: 1, borderColor: '#ddd' },
  icon: { width: 30, height: 30, marginRight: 10 },
  categoryText: { flex: 1, fontSize: 18, marginLeft: 10 },
  subcategoryContainer: { paddingLeft: 40, paddingTop: 5 },
  subcategoryItem: { paddingVertical: 5 },
});
