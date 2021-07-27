import { NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { RootStackParamList } from '../types';
import MyTheme from '../constants/Colors';
import SplashScreen from '../screens/SplashScreen';
import Logo from '../components/logo';
import { DrawerContent } from './DrawerContent';
import {
  DarkTheme as PaperDarkTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import merge from 'deepmerge';
import HomeStackScreen from './HomeNav';
import SettingsStackScreen from './SettingsNav';
import { enableScreens } from 'react-native-screens';
import { useSelector } from "react-redux";
import { IAppState } from '../Redux/Store';
import ProfileStackScreen from './ProfileNav';

enableScreens();

const CombinedDarkTheme = merge(PaperDarkTheme, MyTheme);

const Navigation: React.FC = (props: any) => {
  const user = useSelector((state: IAppState) => state.user);

  return (
    <PaperProvider theme={CombinedDarkTheme}>
      <NavigationContainer
      theme={CombinedDarkTheme}>
        {user ? 
        <RootDrawerNavigator/> :
        <RootStackNavigator />
        }
      </NavigationContainer>
    </PaperProvider>
  );
}

export default Navigation;

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Drawer = createDrawerNavigator<RootStackParamList>();
const Stack = createStackNavigator<RootStackParamList>();

function RootDrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      {/* <Drawer.Screen name="Splash"
        options={({
          headerTitle: () => <Logo />,
        })}
        component={SplashScreen} /> */}
      <Drawer.Screen name="Home"
        component={HomeStackScreen} />
      <Drawer.Screen name="Setting"
        component={SettingsStackScreen} />
      <Drawer.Screen name="Profile"
        component={ProfileStackScreen} />
    </Drawer.Navigator>
  );
}

function RootStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      headerTitleAlign: 'center',
      }}>
      <Stack.Screen name="Splash"
        options={({
          headerTitle: () => <Logo />,
        })}
        component={SplashScreen}
        />
    </Stack.Navigator>
  );
}