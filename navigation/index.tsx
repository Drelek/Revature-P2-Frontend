import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { RootStackParamList } from '../types';
import MyTheme from '../constants/Colors';
import SplashScreen from '../screens/SplashScreen';
import Logo from '../components/logo';
import Feed from '../components/Feed'
import HomeFeedScreen from '../screens/HomeFeed'


const Navigation: React.FC = (props: any) => {
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
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen name="Splash"
        options={({
          headerTitle: () => <Logo />,
          headerLeft: () => console.log('hello')
        })}
        component={SplashScreen} />
      <Stack.Screen name="Home"
        options={({
          headerTitle: () => <Logo />,
          headerLeft: () => console.log('hello')
        })}
        component={HomeFeedScreen} />
    </Stack.Navigator>
  );
}