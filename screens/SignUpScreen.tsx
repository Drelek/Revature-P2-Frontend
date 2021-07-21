import * as React from 'react';
import { StyleSheet, TextInput, SafeAreaView, Button, Pressable, Text, KeyboardAvoidingView } from 'react-native';
import { useState } from 'react';
import { screenWidth } from '../constants/Layout';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = (props:any) => {
    const[username, setUsername] = useState(' ');
    const[displayname, setDisplayName] = useState(' ');
    const[email, setEmail] = useState(' ');
    const[password, setPassword] = useState(' ');
    const navigation = useNavigation();

    const createNewUser = () => {
      navigation.navigate("Home");
    }

    const redirectGlobal = () => {

    }

    const validateEmail = (text: string) => {
            console.log(text);
            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
            if (reg.test(text) === false) {
              console.log("Email is Not Correct");
              return false;
            }
            else {
              console.log("Email is Correct");
            }
    }

    return (
        <SafeAreaView
          style={styles.safeArea}
        >
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
            placeholder="Password"
            placeholderTextColor="antiquewhite" 
            secureTextEntry={true}
          />
          <TextInput
            style={styles.input}
            placeholder="Display Name"
            placeholderTextColor="antiquewhite" 
            onChangeText={(text) => setUsername(text)}
            keyboardType="ascii-capable"
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="antiquewhite" 
            onChangeText={(text) => {
                validateEmail(text)
                setUsername(text)
            }}
            keyboardType="ascii-capable"
          />
          <Pressable 
            style={styles.button} 
            onPress={() => createNewUser()}>
            <Text 
            style={styles.text}>Submit</Text>
          </Pressable>
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
    alignItems: 'center',
  },
});

export default SignUpScreen;