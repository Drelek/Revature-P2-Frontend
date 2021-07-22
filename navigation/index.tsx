import { NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { RootStackParamList } from '../types';
import MyTheme from '../constants/Colors';
import SplashScreen from '../screens/SplashScreen';
import Logo from '../components/logo';
import Feed from '../components/Feed'
import HomeFeedScreen from '../screens/HomeFeed'
import MenuIcon from '../components/menuIcon';
import FeedPicker from '../components/feedPicker';
import { DrawerContent } from './DrawerContent';
import {
  DarkTheme as PaperDarkTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import merge from 'deepmerge';
import HomeStackScreen from './HomeNav';

const CombinedDarkTheme = merge(PaperDarkTheme, MyTheme);
console.log(CombinedDarkTheme);

const Navigation: React.FC = (props: any) => {
  return (
    <PaperProvider theme={CombinedDarkTheme}>
      <NavigationContainer
      theme={CombinedDarkTheme}>
        <RootDrawerNavigator/>
        {/* <RootStackNavigator /> */}
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
      <Drawer.Screen name="Splash"
        options={({
          headerTitle: () => <Logo />,
        })}
        component={SplashScreen} />
      <Drawer.Screen name="Home"
        // options={({
        //   headerTitle: () => <Logo />,
        //   headerLeft: () => <MenuIcon/>,
        //   headerRight: () => <FeedPicker/>
        // })}
        component={HomeStackScreen} />
    </Drawer.Navigator>
  );
}

// function RootStackNavigator() {
//   return (
//     <Stack.Navigator screenOptions={{
//       headerTitleAlign: 'center',
//       }}>
//       <Stack.Screen name="Splash"
//         options={({
//           headerTitle: () => <Logo />,
//         })}
//         component={SplashScreen} />
//     </Stack.Navigator>
//   );
// }