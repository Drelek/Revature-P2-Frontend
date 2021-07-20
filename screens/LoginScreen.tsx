import * as React from 'react';
import { StyleSheet, TextInput, SafeAreaView,  Pressable, Text } from 'react-native';
import { useState } from 'react';
import { screenWidth } from '../constants/Layout';

const LoginScreen: React.FC = () => {
  const[username, setUsername] = useState(' ');
  const[password, setPassword] = useState(' ');

  const validateLogin = () => {

  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <SafeAreaView style={styles.safeArea}>
        <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="white" 
        onChangeText={(text) => setUsername(text)}
        keyboardType="ascii-capable"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text => setPassword(text))}
        placeholderTextColor="white" 
        placeholder="Password"
        secureTextEntry={true}
      />
      <Pressable
        style={styles.button}
        onPress={() => validateLogin()}>
        <Text
          style={styles.text}>Submit</Text>
      </Pressable>
      </SafeAreaView>
      <SafeAreaView style={styles.fillArea}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    padding:5,
    textAlign: 'center',
    borderBottomWidth: 2,
    borderColor: 'white',
    color: 'antiquewhite',
    fontSize: 20
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'purple',
    display: 'flex'

  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  safeArea: {
    flex: 3,
    width: screenWidth - 100,
    justifyContent: 'space-evenly'

  },
  fillArea:{
    flex: 1
  }
});

export default LoginScreen;