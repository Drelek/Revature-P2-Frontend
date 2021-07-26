import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeFeedScreen from '../screens/HomeFeed'
import Logo from '../components/logo';
import FeedPicker from '../components/feedPicker';
import MenuIcon from '../components/menuIcon';

const HomeStack = createStackNavigator();

const HomeStackScreen: React.FC= () => {
  return (
      <HomeStack.Navigator screenOptions={{
        headerTitleAlign: 'center',
        headerTitle: () => <Logo />,
        headerRight: () => <FeedPicker/>,
        headerLeft: () => <MenuIcon/>
        }}>
      <HomeStack.Screen name="Home" component={HomeFeedScreen}/>
      </HomeStack.Navigator>
  )
}

export default HomeStackScreen;
