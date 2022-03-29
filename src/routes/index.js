import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux'

import { navigationRef } from '../services/navigation'

import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';

const Routes = () => {
  const { loggedState } = useSelector((state) => state.users)

  return (
    <NavigationContainer 
      options={{ animationEnabled: true }}
      ref={navigationRef} 
    > 
     {loggedState ? <AuthStack /> : <AppStack /> } 
    </NavigationContainer>
  )
}

export default Routes