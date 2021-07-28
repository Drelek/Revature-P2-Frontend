import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, Pressable, KeyboardAvoidingView } from 'react-native';
import AnimatedTypeWriter from 'react-native-animated-typewriter';
import { screenWidth } from '../constants/Layout';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';

const SplashScreen: React.FC = (props: any) => {

  const [userSession, setUserSession] = useState({
    session: "login"
  });


  const renderSession = () => {
    const session = userSession.session;
    if (session === "login") {
      return (
        <LoginScreen />
      )
    } else if (session === "sign-up") {
      return (
        <SignUpScreen />
      )
    }
  }

  const renderSessionButton = () => {
    const session = userSession.session;
    if (session === "login") {
      return <Pressable
        onPress={() => setUserSession({ session: "sign-up" })}>
        <Text
          style={styles.text}>Sign Up</Text>
      </Pressable>
    } else if (session === "sign-up") {
      return <Pressable
        onPress={() => setUserSession({ session: "login" })}>
        <Text
          style={styles.text}>Login</Text>
      </Pressable>
    }
  }
  function welcomeMessage() {
    const message: string = "Welcome to Bohemian Grove, the message app for those in the know.";
    return <AnimatedTypeWriter containerStyle={styles.message} textStyle={styles.text} text={`${message}`} />
  }

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.smallView} />

      <SafeAreaView style={styles.smallView}>
        {welcomeMessage()}
      </SafeAreaView>

      <SafeAreaView style={styles.largeView}>
        {renderSession()}
        <SafeAreaView>{renderSessionButton()}</SafeAreaView>
      </SafeAreaView>

      <SafeAreaView style={styles.smallView} />

    </SafeAreaView>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  smallView: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: "transparent",
    borderColor: "purple"
  },

  largeView: {
    flex: 3,
    backgroundColor: 'rgb(33, 37, 41)',
    borderRadius: 10,
    borderWidth: 4,
    borderColor: 'purple',
    width: screenWidth - 20,
  },

  text: {
    color: "white",
    fontSize: 20,
    backgroundColor: "transparent",
    // fontFamily: "Montserrat",
  },

  message: {
    color: 'white',
    fontSize: 18,
    backgroundColor: 'rgb(33, 37, 41)',
    textAlign: "center",
    borderColor: 'purple',
    borderWidth: 4,
    borderRadius: 10,
    paddingHorizontal: 15,
    // fontFamily: "BadScript-Regular"
  }
})
