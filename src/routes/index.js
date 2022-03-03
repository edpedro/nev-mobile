import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RegisterRelease from '../screens/RegisterRelease'

import MenuTabs from './MenuTabs';

const Stack = createNativeStackNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='RegisterRelease' >
        <Stack.Screen options={{ headerShown: false }} name="RegisterRelease" component={RegisterRelease} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={MenuTabs} />       
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes