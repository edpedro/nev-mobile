import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RegisterCard from '../screens/RegisterCard'

import MenuTabs from './MenuTabs';

const Stack = createNativeStackNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='RegisterCard' >
        <Stack.Screen options={{ headerShown: false }} name="RegisterCard" component={RegisterCard} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={MenuTabs} />       
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes