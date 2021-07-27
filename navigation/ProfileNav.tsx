import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Logo from '../components/logo';
import FeedPicker from '../components/feedPicker';
import MenuIcon from '../components/menuIcon';
import Profile from '../screens/Profile'

const ProfileStack = createStackNavigator();

const ProfileStackScreen: React.FC= () => {
  return (
      <ProfileStack.Navigator screenOptions={{
        headerTitleAlign: 'center',
        headerTitle: () => <Logo />,
        headerRight: () => <FeedPicker/>,
        headerLeft: () => <MenuIcon/>
        }}>
      <ProfileStack.Screen name="Setting" component={Profile}/>
      </ProfileStack.Navigator>
  )
}

export default ProfileStackScreen;