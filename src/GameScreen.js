import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {UserProvider} from './components/Provider/UserProvider';
import {ImageBackground, StyleSheet} from 'react-native';
import {MainScreen} from './components/Main/main-screen';

export default function GameScreen() {
  return (
    <UserProvider>
      <NavigationContainer>
        <ImageBackground
          style={styles.main_backgroundImage}
          source={require('./assets/images/background.png')}>
          <MainScreen />
        </ImageBackground>
      </NavigationContainer>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  main_backgroundImage: {
    width: '100%',
    height: '100%',
  },
});
