import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, StatusBar, KeyboardAvoidingView, Platform, Dimensions } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import FastImage from 'react-native-fast-image';
import { userregistration } from '../functionality/authentication';
import {dynamicWidth,dynamicBorderRadius,dynamicFontSize,dynamicPadding, Themes, dynamicMargin } from '../assets/fonts/color';
import CustomIcons from '../assets/fonts/CustomIcons';
import { useData } from '../../APICall';
import { CreateScreenSvg } from '../assets/fonts/SVGIcons';


const CreateAccountScreen = ({ navigation }: any) => {
  const { fetchdata } = useData();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [image, setImage] = useState(null);

  const openImagePicker = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response: any) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorCode);
      } else {
        setImage(response.assets[0].uri);
      }
    });
  };

  const perform = () => {
    const registration_credential = {
      user: { username: username, password: password, email: username },
      phone_number: Number(phone),
      profile_picture: image,
    };
    userregistration(navigation, registration_credential, fetchdata);
  };

  const Login = () => navigation.navigate('Login');

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
      <ScrollView style={styles.scrollViewContent}>
        <StatusBar hidden={true} />
        <View style={styles.svgContainer}>
          <CreateScreenSvg />
        </View>
        <View style={styles.content}>
          <View style={styles.titleBox}>
            <Text style={styles.title} allowFontScaling={false}>Create</Text>
            <Text style={styles.title} allowFontScaling={false}>Account</Text>
          </View>

          <View style={styles.cameraBox}>
            <TouchableOpacity style={styles.profilePicture} onPress={openImagePicker}>
              {image != null ? (
                <FastImage source={{ uri: image }} style={styles.image} />
              ) : (
                <CustomIcons name="camera" size={dynamicWidth < 600 ?35 :70} color={Themes.color2} />
              )}
            </TouchableOpacity>
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor={Themes.color7}
              textContentType="emailAddress"
              keyboardType="email-address"
              onChange={(e) => {
                setUsername(e.nativeEvent.text);
              }}
              value={username}
              allowFontScaling={false}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor={Themes.color7}
              textContentType="password"
              secureTextEntry
              onChange={(e) => {
                setPassword(e.nativeEvent.text);
              }}
              value={password}
              allowFontScaling={false}
            />
            <View style={styles.phoneInputContainer}>
              <Image source={{ uri: 'https://flagcdn.com/w320/in.png' }} style={styles.flag} />
              <TextInput
                style={styles.phoneInput}
                placeholder="Your number"
                placeholderTextColor={Themes.color7}
                textContentType="telephoneNumber"
                keyboardType="phone-pad"
                onChange={(e) => {
                  setPhone(e.nativeEvent.text);
                }}
                value={phone}
                allowFontScaling={false}
              />
            </View>
          </View>
          <View>
            <TouchableOpacity style={styles.doneButton} onPress={perform}>
              <Text style={styles.doneButtonText} allowFontScaling={false}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={Login}>
              <Text style={styles.cancelButtonText} allowFontScaling={false}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    position: 'relative',
    backgroundColor:Themes.color1,
  },
  svgContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  content: {
    flex: 1,
    padding:dynamicPadding,
  },
  titleBox: {
    width: dynamicWidth,
    height: dynamicWidth * 0.7,
    justifyContent: 'flex-end',
  },
  title: {
    fontWeight: 'bold',
    fontFamily: 'Raleway',
    color: Themes.color4,
    fontSize: dynamicWidth < 600 ? 62 : 120,
  },
  cameraBox: {
    width:dynamicWidth,
    justifyContent: 'center',
    height: dynamicWidth * 0.4,
  },
  profilePicture: {
    width: "20%",
    height: "50%",
    alignItems: 'center',
    borderRadius: "50%",
    borderStyle: 'dashed',
    justifyContent: 'center',
    borderColor: Themes.color2,
    borderWidth: dynamicWidth < 600 ?3 :5,
  },
  image: {
    height:'99%',
    width: '99%',
    resizeMode: 'contain',
    borderRadius: "50%",
  },
  input: {
    color:Themes.color4,
    width: dynamicWidth,
    fontSize: dynamicFontSize,
    marginBottom: dynamicPadding,
    backgroundColor:Themes.color5,
    height: dynamicFontSize * 3.5,
    borderRadius:dynamicBorderRadius,
    paddingHorizontal:dynamicPadding,
  },
  phoneInputContainer: {
    height: dynamicFontSize * 3.5,
    width: dynamicWidth,
    borderRadius: dynamicBorderRadius,
    marginBottom:dynamicMargin,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: dynamicPadding,
    backgroundColor:Themes.color5,
  },
  flag: {
    width: dynamicFontSize * 3,
    height: dynamicFontSize * 2,
    borderRadius: 3,
    marginRight:dynamicMargin,
  },
  phoneInput: {
    flex: 1,
    color:Themes.color4,
    fontSize: dynamicFontSize,
  },
  doneButton: {
    width: dynamicWidth,
    height: dynamicFontSize * 3.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: dynamicBorderRadius,
    backgroundColor:Themes.color2,
  },
  doneButtonText: {
    color:Themes.color6,
    fontSize: dynamicFontSize,
    fontWeight: 'bold',
  },
  cancelButton: {
    width: dynamicWidth,
    height: dynamicFontSize * 3.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: dynamicBorderRadius,
  },
  cancelButtonText: {
    fontSize: dynamicFontSize,
    color:Themes.color9,
  },
});

export default CreateAccountScreen;
