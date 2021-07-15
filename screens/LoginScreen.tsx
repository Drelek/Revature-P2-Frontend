import * as React from 'react';
import { StyleSheet, TextInput, SafeAreaView, Button, Pressable, Text } from 'react-native';
import { useState } from 'react';

const LoginScreen = () => {
  const [username, setUsername] = useState(' ');
  const [password, setPassword] = useState(' ');

  const validateLogin = () => {

  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        keyboardType="ascii-capable"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text => setPassword(text))}
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
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 250,
    margin: 12,
    borderWidth: 1,
    textAlign: 'center',
    borderRadius: 4
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    width: 150,
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
    margin: 'auto',
    width: 50,
    position: 'relative'
  }
});

export default LoginScreen;