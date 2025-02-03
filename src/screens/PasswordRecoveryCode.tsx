import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Icon from 'react-native-vector-icons/Ionicons'; // For placeholder icons

const PasswordRecoveryCode = () => {
  const [code, setCode] = useState(['', '', '', '']); // Array to handle individual digit inputs

  const handleInputChange = (text, index) => {
    if (text.length <= 1) {
      const newCode = [...code];
      newCode[index] = text;
      setCode(newCode);

      // Automatically move to the next input field
      if (text && index < 3) {
        const nextInput = `input-${index + 1}`;
        ref[nextInput]?.focus();
      }
    }
  };

  const handleBackspace = (index) => {
    const newCode = [...code];
    newCode[index] = '';
    setCode(newCode);

    // Automatically move to the previous input field
    if (index > 0) {
      const prevInput = `input-${index - 1}`;
      ref[prevInput]?.focus();
    }
  };

  const ref = {}; // To manage refs for TextInputs

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
      {/* User profile */}
      <View style={styles.profileContainer}>
        <Icon name="person-circle-outline" size={100} color="#ccc" />
      </View>

      {/* Title and Subtext */}
      <Text style={styles.title}>Password Recovery</Text>
      <Text style={styles.subtitle}>
        Enter 4-digits code we sent you on your phone number
      </Text>
      <Text style={styles.phoneNumber}>+98*******00</Text>

      {/* Input Fields */}
      <View style={styles.codeContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.input}
            value={digit}
            onChangeText={(text) => handleInputChange(text, index)}
            onKeyPress={({ nativeEvent }) => {
              if (nativeEvent.key === 'Backspace') handleBackspace(index);
            }}
            maxLength={1}
            keyboardType="number-pad"
            ref={(input) => {
              ref[`input-${index}`] = input;
            }}
          />
        ))}
      </View>

      {/* Buttons */}
      <TouchableOpacity style={styles.sendAgainButton}>
        <Text style={styles.sendAgainText}>Send Again</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.cancelText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50,
  },
  svgBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  profileContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
  },
  phoneNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 30,
  },
  input: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: '#F5F5F5',
  },
  sendAgainButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#FF6781',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  sendAgainText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cancelText: {
    fontSize: 16,
    color: '#666',
  },
});

export default PasswordRecoveryCode;
