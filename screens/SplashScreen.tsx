import React, {useState, useEffect, useRef}from 'react';
import { StyleSheet, Text, View, TouchableOpacity, useWindowDimensions} from 'react-native';
import AnimatedTypeWriter from 'react-native-animated-typewriter';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import { useSelector, useDispatch } from 'react-redux';
import { IAppState } from '../redux/store';
import { AppAction } from '../redux/actions';
import { screenWidth } from '../constants/Layout';


const SplashScreen: React.FC = (props:any) => {
  const windowHeight = useWindowDimensions().height;
  const [userSession, setUserSession] = useState({
    session: "login"
  });

  function returnToLogin() {
    setUserSession({session: "login"});
  }
  
  const canvas = useSelector((state: IAppState) => state.canvas);
  const dispatch = useDispatch();

  const renderSession = () => {
    const session = userSession.session;
    if (session === "login"){
      return (
        <LoginScreen/>
      )
    } else if(session === "sign-up"){
      return (
        <SignUpScreen submitFunc={returnToLogin}/>
      )
    }
  }

  const renderSessionButton = () => {
    const session = userSession.session;
    if (session === "login"){
      return <TouchableOpacity style={styles.TouchableOpacity}
        onPress={() => setUserSession({session: "sign-up"})}>
        <Text
          style={styles.text}>Sign Up</Text>
      </TouchableOpacity>
    } else if(session === "sign-up"){
      return <TouchableOpacity style={styles.TouchableOpacity}
        onPress={() => setUserSession({session: "login"})}>
        <Text
          style={styles.text}>Login</Text>
      </TouchableOpacity>
    }
  }
  function welcomeMessage(){
    const message:string = "Welcome to Bohemian Grove, the message app for those in the know.";
    return <AnimatedTypeWriter containerStyle={styles.message} textStyle={styles.text} text={`${message}`}/>
  }

  return (
    <View style={[{ minHeight: Math.round(windowHeight) }]}>

      {/* <View style={styles.smallView}/> */}
    
      <View style={styles.messageView}>
        {welcomeMessage()}
      </View>

      <View style={styles.largeView}>
        {renderSession()}
        <View>{renderSessionButton()}</View>
      </View>
      
        <View style={{flex:1}} />

    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    zIndex: 1,
    elevation: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  smallView: {
    flex: 1,
    backgroundColor: "transparent",
    borderColor:"purple",
  },

  messageView: {
    flex: 1.5,
    alignItems: 'center',
    paddingHorizontal:15,
    backgroundColor: "transparent",
    borderColor:"purple",
    justifyContent: 'flex-end',

  },

  largeView: {
    flex: 3,
    backgroundColor:'rgb(33, 37, 41)',
    borderRadius: 10,
    borderWidth:4,
    borderColor: 'purple',
    marginHorizontal:10,
    width:screenWidth - 20,
    marginTop:20,
  
  },

  text:{
    color:"white",
    fontSize: 20,
    backgroundColor:"transparent",
    textAlign:"center",
    // fontFamily: "Montserrat",
  },

  message:{
    color: 'white',
    fontSize: 18,
    backgroundColor: 'rgb(33, 37, 41)',
    textAlign:"center",
    borderColor: 'purple',
    borderWidth: 4,
    borderRadius: 10,
    paddingHorizontal:15,
    // fontFamily: "BadScript-Regular"
  },

  TouchableOpacity: {
    backgroundColor:"purple",
    
  },
})
