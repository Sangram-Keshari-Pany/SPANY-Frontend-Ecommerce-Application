import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomIcons from '../assets/fonts/CustomIcons'
import { dynamicBorderRadius, dynamicIconSize, dynamicMargin, dynamicWidth, Themes } from '../assets/fonts/color'
import ProductImageBox from '../BoxComponents/ProductImageBox'

const ProductImagecomponent = ({productData}: any) => {
    const [productimageurls, setproductimageurls] = useState([])
    const [currentCard, setCurrentCard] = useState(0);

    useEffect(() => {
        const urls: any = [productData.product_image1, productData.product_image2, productData.product_image3, productData.product_image4, productData.product_image5]
        setproductimageurls(urls)
    }, [productData])

    const handleNext = () => {
        setCurrentCard(prev => (prev + 1) % productimageurls.length);
    };
    return (
        <View>
            <TouchableOpacity style={styles.SlidingContainer} onPress={handleNext}>
                <ProductImageBox imageurl={productimageurls[currentCard]}/>
            </TouchableOpacity>

            <View style={styles.paginationContainer}>
                {productimageurls.map((_, index) => (
                    <CustomIcons
                        key={index}
                        name={index === currentCard ? 'dash' : 'dot-fill'}
                        size={dynamicIconSize-10}
                        color={index === currentCard ? Themes.color2 : Themes.color7}
                        style={{ marginHorizontal: 5 }}
                    />
                ))}
            </View>
        </View>

    )
}


const styles = StyleSheet.create({
    SlidingContainer: {
        height:dynamicWidth*1.3,
        width:dynamicWidth,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: dynamicBorderRadius,
    },
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: dynamicMargin,
    },
})

export default ProductImagecomponent
