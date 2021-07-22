import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import HomeFeedScreen from '../screens/HomeFeed'
import Logo from '../components/logo';
import FeedPicker from '../components/feedPicker';
import MenuIcon from '../components/menuIcon';

const HomeStack = createStackNavigator();

const HomeStackScreen: React.FC= () => {
  const navigation = useNavigation();
  return (
      <HomeStack.Navigator screenOptions={{
        headerTitleAlign: 'center',}}>
      <HomeStack.Screen name="Home" component={HomeFeedScreen} options={{
        headerTitle: () => <Logo />,
        headerRight: () => <FeedPicker/>,
        headerLeft: () => <MenuIcon/>
        }} />
      </HomeStack.Navigator>
  )
}

export default HomeStackScreen;
