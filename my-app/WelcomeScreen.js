import React from 'react';
import { View, Button, StyleSheet, ImageBackground, Text } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('./assets/welcomescreen.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome</Text>
        <Button title="Login" onPress={() => navigation('Login')} />
        <Button title="Sign Up" onPress={() => navigation('SignUp')} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  welcomeText: {
    fontSize: 32,
    marginBottom: 24,
    textAlign: 'center',
    color: 'white',
  },
});

export default WelcomeScreen;
