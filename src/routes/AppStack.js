import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/Login'
import Register from '../screens/Register'

const Stack = createNativeStackNavigator();

export function AppStack() {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
      <Stack.Screen options={{ headerShown: false }} name="Register" component={Register} />
    </Stack.Navigator>
  );
}