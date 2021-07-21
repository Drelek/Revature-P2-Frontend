import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { KeyboardAvoidingView, StyleSheet, View, ScrollView} from 'react-native';
import useCachedResources from './hooks/useCachedResources';
import Canvas from 'react-native-canvas';
import handleCanvas from './components/canvas';
import Navigation from './navigation';
import { screenWidth } from './constants/Layout';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import SignUpScreen from './screens/SignUpScreen'
import LoginScreen from './screens/LoginScreen';

export default function App() {
  const isLoadingComplete = useCachedResources();


  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <KeyboardAwareScrollView contentContainerStyle={styles.container} scrollEnabled={false}>
        <View style={styles.container}>
          <Navigation/>
          <Canvas style={styles.canvas} ref={handleCanvas}/>
          <StatusBar/>
        </View>
        </KeyboardAwareScrollView> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth,
    backgroundColor: "black",
  },

  canvas:{
    flex:1,
    position: "absolute",
    zIndex: -1,
    elevation: -1
  }
});
