import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const SetupPasswordScreen = () => {
  const [newPassword, setNewPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleSave = () => {
    if (newPassword === repeatPassword) {
      alert('Password updated successfully!');
    } else {
      alert('Passwords do not match!');
    }
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
      <View style={styles.headerBackground} />
      <Image
        source={{ uri: 'https://example.com/avatar-placeholder.png' }} // Replace with actual avatar image URL
        style={styles.avatar}
      />
      <Text style={styles.title}>Setup New Password</Text>
      <Text style={styles.subtitle}>Please, setup a new password for your account</Text>

      <TextInput
        style={styles.input}
        placeholder="New Password"
        secureTextEntry
        value={newPassword}
        onChangeText={setNewPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Repeat Password"
        secureTextEntry
        value={repeatPassword}
        onChangeText={setRepeatPassword}
      />

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => alert('Cancelled')}>
        <Text style={styles.cancelText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
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
    height: '30%',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#ddd',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 30,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
  },
  saveButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#007BFF',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelText: {
    color: '#007BFF',
    fontSize: 16,
  },
});

export default SetupPasswordScreen;
