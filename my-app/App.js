import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('Welcome');

  const navigate = (screen) => {
    setCurrentScreen(screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Welcome':
        return <WelcomeScreen navigation={navigate} />;
      case 'Login':
        return <LoginScreen navigation={navigate} />;
      case 'SignUp':
        return <SignUpScreen navigation={navigate} />;
      default:
        return <WelcomeScreen navigation={navigate} />;
    }
  };

  return (
    <View style={styles.container}>
      {renderScreen()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
