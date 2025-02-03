import { KeyboardAvoidingView, Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { userfetchdata } from '../functionality/authentication';
import {dynamicWidth, dynamicBorderRadius, dynamicFontSize, dynamicPadding, Themes } from '../assets/fonts/color';
import CustomIcons from '../assets/fonts/CustomIcons';
import { LoginscreenSvg } from '../assets/fonts/SVGIcons';

const LoginScreen = ({ navigation }: any) => {
    const [username, setUsername] = useState("");

    function perform() {
        userfetchdata(navigation, username);
    }

    function createaccount() {
        navigation.navigate('CreateAccount');
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'android' ? 'padding' : 'height'}
        >
            <ScrollView style={styles.scrollViewContent}>
                <StatusBar hidden={true} />
                <View style={styles.svgContainer}>
                    <LoginscreenSvg/>
                </View>
                <View style={styles.content}>
                    <View style={styles.login_container}>
                        <Text style={styles.heading} allowFontScaling={false}>Login</Text>
                        <View style={{flexDirection:"row" ,alignItems:"center",gap:dynamicFontSize}}>
                            <Text style={styles.title} allowFontScaling={false}>Good to see you back!</Text>
                            <CustomIcons color={Themes.color8} name="heart" size={dynamicWidth < 600 ? 20 :38} />
                        </View>
                    </View>
                    <View style={styles.inputbox}>
                        <TextInput
                            allowFontScaling={false}
                            style={styles.input}
                            placeholder="Enter Your Email"
                            placeholderTextColor={Themes.color7}
                            onChange={(e) => { setUsername(e.nativeEvent.text) }}
                            value={username}
                        />
                    </View>
                    <View style={styles.buttonbox}>
                        <TouchableOpacity style={styles.doneButton} onPress={perform}>
                            <Text style={styles.doneButtonText} allowFontScaling={false}>Next</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cancelButton} onPress={createaccount}>
                            <Text style={styles.cancelButtonText} allowFontScaling={false}>Create Account</Text>
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
    svgBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    content: {
        flex: 1,
        padding:dynamicPadding,
    },
    login_container: {
        width:dynamicWidth,
        height:dynamicWidth*0.8,
        justifyContent: "flex-end",
    },
    heading: {
        fontWeight: "bold",
        fontFamily: "Raleway",
        color:Themes.color4,
        fontSize:dynamicWidth < 600 ? 62 : 120,
    },
    title: {
        color: Themes.color4,
        fontSize:dynamicWidth < 600 ? 20 :38,
    },
    inputbox: {
        height: dynamicWidth*0.65,
        justifyContent: "center",
    },
    input: {
        color: Themes.color4,
        width:dynamicWidth,
        fontSize:dynamicFontSize,
        height:dynamicFontSize*3.5,
        backgroundColor:Themes.color5,
        borderRadius:dynamicBorderRadius,
        paddingHorizontal:dynamicPadding,
    },
    buttonbox: {
        width:dynamicWidth,
        alignItems: 'center',
        height:dynamicFontSize*3.5,
        justifyContent: 'flex-start',
    },
    doneButton: {
        width:dynamicWidth,
        alignItems: 'center',
        justifyContent: 'center',
        height: dynamicFontSize*3.5,
        borderRadius:dynamicBorderRadius,
        backgroundColor:Themes.color2,
    },
    doneButtonText: {
        fontWeight: '200',
        fontSize:dynamicFontSize*1.5,
        color:Themes.color6,
    },
    cancelButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width:dynamicWidth,
        height:dynamicFontSize*3.5,
        borderRadius:dynamicBorderRadius,
        marginBottom:dynamicBorderRadius,
    },
    cancelButtonText: {
        fontSize:dynamicFontSize,
        color:Themes.color9,
    },
});

export default LoginScreen;
