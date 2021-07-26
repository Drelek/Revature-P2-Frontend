import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Logo from '../components/logo';
import FeedPicker from '../components/feedPicker';
import MenuIcon from '../components/menuIcon';
import SettingsScreen from '../screens/Settings';

const SettingsStack = createStackNavigator();

const SettingsStackScreen: React.FC= () => {
  return (
      <SettingsStack.Navigator screenOptions={{
        headerTitleAlign: 'center',
        headerTitle: () => <Logo />,
        headerRight: () => <FeedPicker/>,
        headerLeft: () => <MenuIcon/>
        }}>
      <SettingsStack.Screen name="Setting" component={SettingsScreen}/>
      </SettingsStack.Navigator>
  )
}

export default SettingsStackScreen;