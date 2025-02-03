import { StyleSheet, View } from 'react-native';
import React from 'react';
import WishlistTotalBox from '../BoxComponents/WishlistTotalBox';
import WishlistEmpty from '../BoxComponents/WishlistEmpty';
import { EmptyWishlist } from '../assets/fonts/SVGIcons';

const WishlistComponent = ({ favorites, navigation ,keys="wishlist"}: any) => {
  return (
    <View style={styles.wishlist}>
      {favorites.length >0 ? (
        favorites.map((favorite: any) => {
          return (
            <WishlistTotalBox
              key={keys + favorite.id}
              favorite={favorite}
              navigation={navigation}
            />
          );
        })
      ) : (
        <WishlistEmpty/>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wishlist: {
    justifyContent: 'space-between',
  },
});

export default WishlistComponent;
