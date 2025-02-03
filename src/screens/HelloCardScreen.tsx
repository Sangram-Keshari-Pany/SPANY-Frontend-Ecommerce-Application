import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Entypo from 'react-native-vector-icons/Octicons';


const HelloCardScreen = ({navigation}) => {
  const [currentCard, setCurrentCard] = useState(0);

  const cards = [
    {
      title: 'Hello',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non consectetur turpis. Morbi eu eleifend lacus.',
      image: 'https://example.com/shopping-image.png', // Replace with actual image URL
    },
    {
      title: 'Welcome',
      description: 'Proin eu varius arcu. Vivamus id lorem id metus scelerisque malesuada id eget nulla.',
      image: 'https://example.com/welcome-image.png',
    },
    {
      title: 'Get Started',
      description: 'Curabitur a magna at ligula efficitur tincidunt nec quis ligula. Nulla facilisi.',
      image: 'https://example.com/start-image.png',
    },
  ];

  const handleNext = () => {
    setCurrentCard((prev) => (prev + 1) % cards.length);
  };

  function perform (){
    navigation.navigate('Tab')
  }


  return (
    <View style={styles.container}>
      <Svg height="100%" width="100%" style={styles.svgBackground}>
          <Path
              d="M511.592 631.646C605.561 762.528 363.573 795.354 257.768 760.976C151.963 726.598 94.0602 612.957 128.438 507.152C162.816 401.347 284.146 352.436 368.928 404.907C453.71 457.379 417.623 500.764 511.592 631.646Z"
              fill="#F2F5FE"
          />
      </Svg>
      <Svg height="100%" width="100%" style={styles.svgBackground}>
      <Path
          d="M53.9997 -83.545C149.438 -213.36 255.435 6.64084 255.435 117.891C255.435 229.141 165.25 319.326 53.9997 319.326C-57.2502 319.326 -147.436 229.141 -147.436 117.891C-147.436 6.64084 -41.4384 46.2696 53.9997 -83.545Z"
          fill="#004BFE"
      />
      </Svg>

      <View style={styles.headerBackground} />
      <TouchableOpacity  onPress={handleNext}>
      <View style={styles.card}>
        <Image
          source={{ uri: cards[currentCard].image }}
          style={styles.image}
        />
        <Text style={styles.title}>{cards[currentCard].title}</Text>
        <Text style={styles.description}>{cards[currentCard].description}</Text>
        {currentCard+1==cards.length ? 
        (<TouchableOpacity style={styles.button} onPress={perform} >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>): <Text></Text>}
      </View>
      </TouchableOpacity>
      

      
      <View style={styles.paginationContainer}>
        {cards.map((_, index) => (
          <Entypo
            key={index}
            name="dot-fill"
            size={35}
            color={index === currentCard ? '#007BFF' : '#ccc'}
            style={{ marginHorizontal:5 }}
          />
        ))}
      </View>

      
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  svgBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  headerBackground: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '40%',
    // backgroundColor: '#007BFF',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  card: {
    width: width * 0.8,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 400,
    borderRadius: 15,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
  paginationContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent:"center",

  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HelloCardScreen;
