import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import GoogleIcon from "../assets/g.png";

const GoogleSignInButton = () => {
  return (
    <TouchableOpacity style={styles.googleButton}>
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