import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import HomeFeedScreen from '../screens/HomeFeed'
import Logo from '../components/logo';
import FeedPicker from '../components/feedPicker';
import MenuIcon from '../components/menuIcon';
import SettingsScreen from '../screens/Settings';
import ExpandedPost from '../screens/ExpandedPost'
import Profile from '../screens/Profile'
import SearchScreen from '../screens/SearchScreen';

const HomeStack = createStackNavigator();
const TransitionScreenOptions = {
  ...TransitionPresets.SlideFromRightIOS, // This is where the transition happens
};

const HomeStackScreen: React.FC = () => {
  return (
    <HomeStack.Navigator screenOptions={{
      headerTitleAlign: 'center',
      headerTitle: () => <Logo />,
      headerRight: () => <FeedPicker />,
      headerLeft: () => <MenuIcon />,
      ...TransitionPresets.SlideFromRightIOS,
    }}>
      <HomeStack.Screen name="Home" component={HomeFeedScreen} />
      <HomeStack.Screen name="Settings" component={SettingsScreen} />
      <HomeStack.Screen name="ExpandedPost" component={ExpandedPost} />
      <HomeStack.Screen name="Profile" component={Profile} />
      <HomeStack.Screen name="Search" component={SearchScreen} />
    </HomeStack.Navigator>
  )
}

export default HomeStackScreen;
