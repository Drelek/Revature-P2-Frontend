import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Navigation from './index';



export const nestedHell = (
    state,
    callBack,
    screenName = 'testScreen1',
    screenName2 = 'testScreen2',
) => {
    const mockStore = configureStore([thunk]);
    const store = mockStore(state);
    const Stack = createStackNavigator();
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Home"
                    screenOptions={{
                        header: (props) => (
                            <Navigation
                                {...props}
                            />
                        ), //Use Custom Navigator Bar
                    }}>
                    <Stack.Screen name={screenName}>
                        {callBack}
                    </Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
};