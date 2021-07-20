import React, {useState }from 'react';
import { StyleSheet, Text, SafeAreaView, Pressable} from 'react-native';
import AnimatedTypeWriter from 'react-native-animated-typewriter';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
//cognito signup, alert user to confirm email then press ok to bring back to login 

const SplashScreen: React.FC = (props:any) => {
  const [userSession, setUserSession] = useState({
    session: "login"
  });
  

  const renderSession = () => {
    const session = userSession.session;
    if (session === "login"){
      return <LoginScreen/>
    } else if(session === "signup"){
      return <SignUpScreen/>
    }
  }

  const renderSessionButton = () => {
    const session = userSession.session;
    if (session === "login"){
      return <Pressable
        onPress={() => setUserSession({session: "signup"})}>
        <Text
          style={styles.text}>Sign Up</Text>
      </Pressable>
    } else if(session === "signup"){
      return <Pressable
        onPress={() => setUserSession({session: "login"})}>
        <Text
          style={styles.text}>Login</Text>
      </Pressable>
    }
  }

  function callback(){
    return console.log("hello");
  }

  function welcomeMessage(){
    const message:string = "Welcome to Bohemian Grove, the message app for those in the know.";
    return <AnimatedTypeWriter style={styles.message} text={`${message}`} timeBetweenLetters={60} onTypingEnd={callback} />
  }

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.smallView}/>

      <SafeAreaView style={styles.smallView}>
        {welcomeMessage()}
      </SafeAreaView>

      <SafeAreaView style={styles.largeView}>
        {renderSession()}
        <SafeAreaView>{renderSessionButton()}</SafeAreaView>
      </SafeAreaView>

      <SafeAreaView style={styles.smallView}/>
      
    </SafeAreaView>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: "column",
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  smallView:{
    flex:1,
    alignItems: 'center',
    paddingHorizontal:8,
    backgroundColor: "transparent",
  },

  largeView:{
    flex: 3,
    backgroundColor:"grey"
  },

  text:{
    color:"white",
    borderWidth:0,
    backgroundColor:"transparent",
  },

  message:{
    color: "white",
    fontSize: 18,
    backgroundColor: "black",
    textAlign:"center",
    borderColor: 'purple',
    borderWidth: 4,
    borderRadius: 4,
    paddingVertical:8,
    paddingHorizontal:8,
    // fontFamily: "BadScript-Regular"
  }
})