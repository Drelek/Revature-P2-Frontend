import * as React from 'react';
import { StyleSheet, TextInput, SafeAreaView,  Pressable, Text, KeyboardAvoidingView } from 'react-native';
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
        placeholderTextColor="antiquewhite" 
        onChangeText={(text) => setUsername(text)}
        keyboardType="ascii-capable"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text => setPassword(text))}
        placeholderTextColor="antiquewhite" 
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
    width:screenWidth - 100,
    paddingBottom: 10,
    alignItems: 'center',
    textAlign: 'center',
    borderBottomWidth: 2,
    borderColor: 'purple',
    color: 'white',
    fontSize: 18,
    borderRadius: 10,
    paddingHorizontal:25
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: 'purple',
    fontSize: 18,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'antiquewhite',
  },
  safeArea: {
    flex: 3,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  fillArea:{
    flex: 1
  }
});

export default LoginScreen;