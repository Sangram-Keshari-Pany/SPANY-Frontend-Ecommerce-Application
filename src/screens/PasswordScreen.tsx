import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, ScrollView, KeyboardAvoidingView, StatusBar, Platform } from 'react-native';
import FastImage from 'react-native-fast-image';
import { userlogin } from '../functionality/authentication';
import { useData } from '../../APICall';
import { dynamicWidth, dynamicBorderRadius, dynamicFontSize, dynamicPadding, height, Textcolor, Themes, dynamicMargin } from '../assets/fonts/color';
import CustomIcons from '../assets/fonts/CustomIcons';
import { PasswordScreenSvg } from '../assets/fonts/SVGIcons';

const PasswordScreen = ({ navigation }: any) => {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false); // For loading state

  const { fetchdata } = useData();
  const route = useRoute();
  const userData = route.params as any;

  useEffect(() => {
    if (userData && userData[0]) {
      setUsername(userData[0].user.username);
    }
  }, [userData]);

  const perform = async () => {
    setLoading(true);
    const userCredentials = {
      username: username,
      password: password,
    };
    await userlogin(navigation, userCredentials, fetchdata);
    setLoading(false);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'android' ? 'padding' : 'height'}
    >
      <ScrollView style={styles.scrollViewContent}>
        <StatusBar hidden={true} />
        <View style={styles.svgContainer}>
          <PasswordScreenSvg/>
        </View>
        <View style={styles.content}>
          <View style={styles.avatarContainer}>
            <FastImage source={{ uri: userData[0].profile_picture }} style={styles.avatar} />
            <Text style={styles.greeting} allowFontScaling={false}>{userData[0].user.username}</Text>
          </View>
          <View style={styles.passwordInputContainer}>
            <TextInput
              allowFontScaling={false}
              style={styles.input}
              placeholder="Password"
              placeholderTextColor={Themes.color7}
              textContentType="password"
              secureTextEntry
              onChange={(e) => setPassword(e.nativeEvent.text.trim())}
              value={password}
            />
          </View>
          <TouchableOpacity style={styles.doneButton} onPress={perform}>
            {loading ? (
              <ActivityIndicator size="small" color={Themes.color6} />
            ) : (
              <Text style={styles.doneButtonText} allowFontScaling={false}>Proceed</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity style={styles.notYouButton}>
            <Text style={styles.notYoutext} allowFontScaling={false}>Not you?</Text>
            <CustomIcons name="arrow-u-left-top" color={Themes.color8} size={dynamicWidth < 600 ?20:32} />
          </TouchableOpacity>
        </View>
    </ScrollView>
  </KeyboardAvoidingView >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor:Themes.color1,
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
    height:height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom:dynamicMargin,
  },
  avatar: {
    borderRadius:"50%",
    width:dynamicWidth*0.3,
    height:dynamicWidth*0.3,
    borderColor:Themes.color2,
    marginBottom:dynamicMargin,
    borderWidth:dynamicBorderRadius-10,
  },
  greeting: {
    fontWeight: 'bold',
    color:Themes.color4,
    fontSize:dynamicWidth < 600 ?14:32,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:dynamicMargin,
    justifyContent: 'space-between',
  },
  input: {
    width:dynamicWidth,
    color:Themes.color4,
    fontSize:dynamicFontSize,
    height:dynamicFontSize*3.5,
    marginBottom:dynamicPadding,
    borderRadius:dynamicBorderRadius,
    paddingHorizontal:dynamicPadding,
    backgroundColor:Themes.color5,
  },
  notYouButton: {
    width:dynamicWidth,
    flexDirection:'row',
    alignItems:'center',
    height:dynamicFontSize*3.5,
    justifyContent: 'center',
  },
  doneButton: {
    width:dynamicWidth,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:dynamicPadding,
    height:dynamicFontSize*3.5,
    backgroundColor:Themes.color2,
  },
  doneButtonText: {
    fontWeight: '200',
    color:Themes.color6,
    fontSize:dynamicFontSize*1.5,
  },
  notYoutext: {
    color: Textcolor.TextBlack,
    fontSize:dynamicFontSize*1.5,
  },
});

export default PasswordScreen;

