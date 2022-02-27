import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MenuTabs from './MenuTabs';

const Stack = createNativeStackNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />   */}
        <Stack.Screen options={{ headerShown: false }} name="Home" component={MenuTabs} />       
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes