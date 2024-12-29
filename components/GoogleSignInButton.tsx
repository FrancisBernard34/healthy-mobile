import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { useGoogleAuth } from '../../healthy_backup/utils/auth';

export default function GoogleSignInButton() {
  const { promptAsync, userInfo } = useGoogleAuth();

  const handleSignIn = async () => {
    try {
      await promptAsync();
    } catch (error) {
      console.error('Sign in error:', error);
    }
  };

  if (userInfo) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome {userInfo.name}!</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity style={styles.button} onPress={handleSignIn}>
      <Text style={styles.buttonText}>Sign in with Google</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#4285F4',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
