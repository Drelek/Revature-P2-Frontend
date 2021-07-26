import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react';
import { StyleSheet, View} from 'react-native';
import useCachedResources from './hooks/useCachedResources';
import Canvas from 'react-native-canvas';
import handleCanvas from './components/canvas';
import Navigation from './navigation';
import { screenWidth } from './constants/Layout';
import * as Font from 'expo-font';

const App:React.FC = () => {
  const isLoadingComplete = useCachedResources();
  const [fontsLoaded, setFonts] = useState(false);
  
  useEffect(() => {loadFonts()});

  const loadFonts = async() => {
    await Font.loadAsync({
      BadScript: require('./assets/fonts/BadScript-Regular.ttf'),
      Montserrat: require('./assets/fonts/Montserrat-Regular.ttf'),
    });
    setFonts(true);
  }

  if (!isLoadingComplete && !fontsLoaded) {
    return null;
  } else {
    return (
        <View style={styles.container}>
          <Navigation/>
          <Canvas style={styles.canvas} ref={handleCanvas}/>
          <StatusBar/>
        </View>
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

export default App;