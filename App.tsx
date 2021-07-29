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
import { Provider, useSelector } from 'react-redux';
import { createStore, Store } from 'redux';
import { reducers } from './redux/session_reducers';
import { IAppState } from './redux/store';
import { IAppActions } from './redux/actions';
import { registerRootComponent } from 'expo';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CanvasScreen from './screens/Canvas';


const store: Store<IAppState, IAppActions> = createStore(reducers);

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
        <SafeAreaProvider style={styles.container}>
          <Navigation/>
          <CanvasScreen/>
          <StatusBar/>
        </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth,
    backgroundColor: "black",
  },

  loadingBackgroundStyle:{
    backgroundColor: 'rgb(33, 37, 41)'
  }
});

export default App;