import React, { useState, FormEvent}from 'react';
import { StyleSheet, TextInput, SafeAreaView,  Pressable, Text } from 'react-native';
import { IAppState } from '../Redux/Store';
import { screenWidth } from '../constants/Layout';
import { useNavigation } from '@react-navigation/native';
import cogClient from '../Cognito';
import { InitiateAuthCommand, InitiateAuthCommandInput} from '@aws-sdk/client-cognito-identity-provider';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import {UserAction} from '../redux/actions';
const LoginScreen: React.FC = (props:any) => {
  const user = useSelector((state: IAppState) => state.user);
  const dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState({
        userName: '',
        password: ''
    });

  const navigation = useNavigation();

  async function submitForm(event: FormEvent) {
        event.preventDefault();
        const params: InitiateAuthCommandInput = {
            AuthFlow: "USER_PASSWORD_AUTH",
            AuthParameters: {
                USERNAME: userInfo.userName,
                PASSWORD: userInfo.password,
                SCOPE: "openid"
            },
            ClientId: "gptc74a8d8t29m3a4pos69c2a"
        }

        const resp1 = await cogClient.send(new InitiateAuthCommand(params));

      }
  const submit = () => {
    // console.log(user)
    const newUser = {
    userName: "kai",
    displayName: "kai",
    profileImg: "kai",
    email: "kai",
    password: "kai",
  }
    dispatch({
      type: UserAction.LOGIN,
      payload: {user:newUser},
    });
  //   console.log(user)
  }

  // const reduxChecker = () => {
  //   console.log(user); 
  // }

  const redirect = () => {
    navigation.navigate('Home');
  }
  
  return (
    <SafeAreaView style={styles.safeArea}>
      {user !== undefined && redirect()}
      <SafeAreaView style={styles.safeArea}>
        <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="white" 
        onChangeText={text => setUserInfo({ ...userInfo, userName: text})}
        keyboardType="ascii-capable"
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setUserInfo({ ...userInfo, userName: text})}
        placeholderTextColor="white" 
        placeholder="Password"
        secureTextEntry={true}
      />
      <Pressable
        style={styles.button}
        // onPress={(e) => submitForm(e)}>
        onPress={() => submit()}>
        <Text
          style={styles.text}>Submit</Text>
      </Pressable>
      {/* <Pressable
        style={styles.button}
        // onPress={(e) => submitForm(e)}>
        onPress={() => reduxChecker()}>
        <Text
          style={styles.text}>redux</Text>
      </Pressable> */}
      </SafeAreaView>
      <SafeAreaView style={styles.fillArea}/>
    </SafeAreaView>
  )
    
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
    paddingHorizontal: 50,
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
    color: 'white',
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