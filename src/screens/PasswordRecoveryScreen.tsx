import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Icon from 'react-native-vector-icons/Ionicons'; // Using Ionicons for the checkmark icon

const PasswordRecoveryScreen = () => {
  const [selectedOption, setSelectedOption] = useState('SMS'); // Default selection

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.container}>
        <Svg height="100%" width="100%" style={styles.svgBackground}>
            <Path
                d="M106.559 86.2492C-48.0682 40.9659 122.411 -133.884 226.952 -171.934C331.493 -209.983 447.085 -156.082 485.135 -51.541C523.184 52.9997 451.107 134.793 358.574 177.089C266.042 219.386 261.187 131.532 106.559 86.2492Z"
                fill="#F2F5FE"
            />
        </Svg>
        <Svg height="100%" width="100%" style={styles.svgBackground}>
        <Path
            d="M509.384 -57.7891C635.788 42.1213 412.223 140.376 301.041 136.494C189.859 132.611 102.875 39.333 106.758 -71.8491C110.64 -183.031 203.919 -270.015 315.101 -266.132C426.283 -262.25 382.979 -157.7 509.384 -57.7891Z"
            fill="#004BFE"
        />
        </Svg>
      {/* Background */}
      <View style={styles.content}>
        {/* Profile Section */}
        <View style={styles.profileContainer}>
          <View style={styles.placeholder}>
            {/* Placeholder for user image */}
            <Icon name="person-circle-outline" size={100} color="#ccc" />
          </View>
        </View>

        {/* Title Section */}
        <Text style={styles.title}>Password Recovery</Text>
        <Text style={styles.subtitle}>
          How you would like to restore your password?
        </Text>

        {/* Options */}
        <View style={styles.optionsContainer}>
          {/* SMS Option */}
          <TouchableOpacity
            style={[
              styles.option,
              selectedOption === 'SMS' && styles.selectedOption,
            ]}
            onPress={() => handleOptionChange('SMS')}
          >
            <Text
              style={[
                styles.optionText,
                selectedOption === 'SMS' && styles.selectedOptionText,
              ]}
            >
              SMS
            </Text>
            {selectedOption === 'SMS' && (
              <Icon name="checkmark-circle" size={20} color="#004BFE" />
            )}
          </TouchableOpacity>

          {/* Email Option */}
          <TouchableOpacity
            style={[
              styles.option,
              selectedOption === 'Email' && styles.selectedOption,
            ]}
            onPress={() => handleOptionChange('Email')}
          >
            <Text
              style={[
                styles.optionText,
                selectedOption === 'Email' && styles.selectedOptionText,
              ]}
            >
              Email
            </Text>
            {selectedOption === 'Email' && (
              <Icon name="checkmark-circle" size={20} color="#004BFE" />
            )}
          </TouchableOpacity>
        </View>

        {/* Buttons */}
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  svgBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  profileContainer: {
    marginTop: 40,
    marginBottom: 20,
    alignItems: 'center',
  },
  placeholder: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#f6f6f6',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginVertical: 10,
  },
  optionsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 20,
  },
  option: {
    width: 250,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#f6f6f6',
    borderRadius: 10,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectedOption: {
    backgroundColor: '#E5EDFF',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  selectedOptionText: {
    color: '#004BFE',
    fontWeight: 'bold',
  },
  nextButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#004BFE',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginVertical: 10,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cancelButtonText: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
  },
});

export default PasswordRecoveryScreen;
