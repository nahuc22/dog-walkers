import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Login';
import OnBoardingScreen from '../screens/OnBoarding';
import RegisterScreen from "../screens/Register"
import TabCreator from './TabCreator';

const Stack = createStackNavigator();

const RouterList = ({setIsLoggedIn }) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OnBoarding">
        {(props) => <OnBoardingScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
      </Stack.Screen>
      <Stack.Screen name="Login">
        {(props) => <LoginScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
      </Stack.Screen>
      <Stack.Screen name="Register">
        {(props) => <RegisterScreen {...props} setIsLoggedIn={setIsLoggedIn}/>}
      </Stack.Screen>
      <Stack.Screen name="TabCreator" component={TabCreator} />
    </Stack.Navigator>
  );
};

export default RouterList;
