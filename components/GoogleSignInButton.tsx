import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import GoogleIcon from "../assets/g.png";
import * as WebBrowser from 'expo-web-browser'; 
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from 'expo-router';

import {ANDROID_CLIENT_ID, WEB_CLIENT_ID} from '@env'

WebBrowser.maybeCompleteAuthSession();

const GoogleSignInButton = () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: ANDROID_CLIENT_ID,
    webClientId: WEB_CLIENT_ID,
    redirectUri: 'http://localhost:8081',
  });

  const handleToken = () => {
    if (response?.type === 'success') {
      const {authentication} = response;
      const token = authentication?.accessToken;
      AsyncStorage.setItem('token', token);
      console.log("access token: ", token);
    }
  }

  useEffect(() => {
    handleToken();
  }, [response])

  return (
    <TouchableOpacity style={styles.googleButton} onPress={() => promptAsync()}>
      <Image source={GoogleIcon} style={styles.googleIcon} />
      <Text style={styles.googleButtonText}>Entrar com Google</Text>
    </TouchableOpacity>
  );
};

export default GoogleSignInButton;

const styles = StyleSheet.create({
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4285F4",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  googleIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  googleButtonText: {
    color: "white",
    fontSize: 16,
  },
});