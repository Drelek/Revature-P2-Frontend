import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import MyTheme from '../constants/Colors';
import SplashScreen from '../screens/SplashScreen';
import Logo from '../components/logo';
import PostCard from '../screens/PostCard';
import GlobalFeed from '../screens/Feed';
import Profile from '../screens/Profile';

const Navigation:React.FC = (props:any) => {
  return (
    <NavigationContainer
      theme={MyTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

export default Navigation;

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Splash" 
        options={() => ({
        headerTitle: () => <Logo/>,
        })}
        component={Profile}/>
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}