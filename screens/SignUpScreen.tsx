import * as React from 'react';
import { StyleSheet, TextInput, SafeAreaView, Button, TouchableOpacity, Text, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import { useState } from 'react';
import { screenWidth } from '../constants/Layout';
import { useNavigation } from '@react-navigation/native';
import { IAppState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Toast from 'react-native-toast-message';

const SignUpScreen = (props: any) => {
  const auth = useSelector((state: IAppState) => state.auth);
  const dispatch = useDispatch();

  const [username, setUsername] = useState(' ');
  const [displayName, setDisplayName] = useState(' ');
  const [email, setEmail] = useState(' ');
  const [password, setPassword] = useState(' ');
  const [working, setWorking] = useState(false);
  const navigation = useNavigation();

  const createNewUser = async () => {
    if (working) return;
    console.log("Creating user");

    try {
      setWorking(true);
      const resp = await axios.post('https://w822121nz1.execute-api.us-east-2.amazonaws.com/Prod/auth/signup', {
        userName: username,
        password: password,
        email: email
      });
    } catch (err) {
      console.log(err);
      console.log(err.response.data);
      Toast.show({
        type: "error",
        position: "top",
        text1: "Invalid input",
        text2: "Password must contain lowercase, uppercase, and number",
        visibilityTime: 8000
      });
      setWorking(false);
      return;
    }

    try {
      const resp2 = await axios.post('https://w822121nz1.execute-api.us-east-2.amazonaws.com/Prod/user/' + username, {
        dataKey: username,
        dataType: 'user',
        displayName: displayName,
        email: email,
        profileImg: 'https://image.flaticon.com/icons/png/512/3239/3239647.png'
      });
    } catch (err) {
      console.log(err);
      console.log(err.response.data);
      setWorking(false);
      Toast.show({
        type: "error",
        position: "top",
        text1: "Signup Error",
        text2: "Failed to stash user info, contact an administrator"
      });
      return;
    }

    Toast.show({
      type: "success",
      text1: "Account Creation Successful",
      text2: "Please check your email for a verification link"
    })
    props.submitFunc();
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
    // <KeyboardAvoidingView
    //   behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
    //   style={{flex:1}}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView
      style={styles.safeArea}
    >
      
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
        placeholder="Password"
        placeholderTextColor="white"
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Display Name"
        placeholderTextColor="white"
        onChangeText={(text) => setDisplayName(text)}
        keyboardType="ascii-capable"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="white"
        onChangeText={(text) => {
          setEmail(text)
        }}
        keyboardType="ascii-capable"
      />
      <TouchableOpacity
        style={[styles.button, working ? styles.working : styles.notWorking]}
        onPress={() => createNewUser()}>
        <Text
          style={styles.text}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
    </TouchableWithoutFeedback>
    // </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  input: {
    width: screenWidth - 100,
    paddingBottom: 10,
    alignItems: 'center',
    textAlign: 'center',
    borderBottomWidth: 2,
    borderColor: 'purple',
    color: 'white',
    fontSize: 18,
    borderRadius: 10,
    paddingHorizontal: 25
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

  notWorking:{
    backgroundColor: 'purple'
  },

  working:{
    backgroundColor: 'grey'
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
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default SignUpScreen;