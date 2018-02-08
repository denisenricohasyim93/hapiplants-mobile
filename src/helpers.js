import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity ,
  Alert,
  Image,
  Linking,
  Platform,
  ScrollView
} from 'react-native';
import WebView from 'react-native';
import {Actions} from 'react-native-router-flux';

// var SafariView = require('react-native-safari-view');

export const loginWithFacebook = () => openURL('http://localhost:3000/auth/facebook');

export const openURL = (url) => {
    // Use SafariView on iOS
    // if (Platform.OS === 'ios') {
    //   SafariView.show({
    //     url: url,
    //     fromBottom: true,
    //   });
    //   Linking.openURL(url);
    // }
    // // Or Linking.openURL on Android
      
    // else {
    //   Linking.openURL(url);
    // }
    Linking.openURL(url);
  };