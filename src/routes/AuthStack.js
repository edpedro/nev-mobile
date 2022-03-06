import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MenuTabs from './MenuTabs';

import RegisterCard from '../screens/RegisterCard'
import RegisterRelease from '../screens/RegisterRelease'
import Detail from '../screens/Detail'
import DetailCard from '../screens/DetailCard'

const Stack = createNativeStackNavigator();

export function AuthStack() {
  return (
    <Stack.Navigator initialRouteName='Inicio'>
      <Stack.Screen options={{ headerShown: false }} name="Inicio" component={MenuTabs} />
      <Stack.Screen options={{ headerShown: false }} name="RegisterCard" component={RegisterCard} />
      <Stack.Screen options={{ headerShown: false }} name="Detail" component={Detail} />
      <Stack.Screen options={{ headerShown: false }} name="DetailCard" component={DetailCard} />
      <Stack.Screen options={{ headerShown: false }} name="RegisterRelease" component={RegisterRelease} />             
    </Stack.Navigator>
  );
}
