import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { RootStackParamList, RootDrawerParamList } from '../types';
import MyTheme from '../constants/Colors';
import SplashScreen from '../screens/SplashScreen';
import { DrawerContent } from './DrawerContent';
import { DarkTheme as PaperDarkTheme, Provider as PaperProvider, } from 'react-native-paper';
import merge from 'deepmerge';
import HomeStackScreen from './HomeNav';
import { enableScreens } from 'react-native-screens';
import { useSelector } from "react-redux";
import { IAppState } from '../redux/store';



enableScreens();

const CombinedDarkTheme = merge(PaperDarkTheme, MyTheme);

const Navigation = (props: any) => {
  const user = useSelector((state: IAppState) => state.user);

  return (
    <PaperProvider theme={CombinedDarkTheme}>
      <NavigationContainer
        theme={CombinedDarkTheme}>
        {user ?
          <RootDrawerNavigator /> :
          <RootStackNavigator />
        }
      </NavigationContainer>
    </PaperProvider>
  );
}

export default Navigation;

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Drawer = createDrawerNavigator<RootDrawerParamList>();
const Stack = createStackNavigator<RootStackParamList>();

function RootDrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home"
        component={HomeStackScreen} />
    </Drawer.Navigator>
  );
}

function RootStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Splash"
        component={SplashScreen}
      />
    </Stack.Navigator>
  );
}