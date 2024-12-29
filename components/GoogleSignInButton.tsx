import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import GoogleIcon from "../assets/g.png";
import * as WebBrowser from 'expo-web-browser'; 
import * as Google from 'expo-auth-session/providers/google';

const webClientId = '1080045917844-4iphbllh99mi49m8v7465pa4aipgrncm.apps.googleusercontent.com';
const androidClientId = '1080045917844-7dvj6fe3r0an0kolaq1271u2j1g90tvm.apps.googleusercontent.com';

WebBrowser.maybeCompleteAuthSession();

const GoogleSignInButton = () => {
  const config = {
    webClientId,
    androidClientId,
  }

  const [request, response, promptAsync] = Google.useAuthRequest(config);

  const handleToken = () => {
    if (response?.type === 'success') {
      const {authentication} = response;
      const token = authentication?.accessToken;
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