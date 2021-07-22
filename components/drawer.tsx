import * as React from 'react';
import { Button, SafeAreaView, Pressable } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
      <Drawer.Navigator>
        <Drawer.Screen name="Profile" component={SignUpScreen} />
        <Drawer.Screen name="Settings" component={LoginScreen} />
      </Drawer.Navigator>
  )
}

export default DrawerNav