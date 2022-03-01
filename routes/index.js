import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Detail from '../src/screens/Detail'

import MenuTabs from './MenuTabs';

const Stack = createNativeStackNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' >
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Detail} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={MenuTabs} />       
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes