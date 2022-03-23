import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux'

import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';


import { navigataionRef } from '../services/navigation'

const Routes = () => {
  const { loggedState } = useSelector((state) => state.users)

  return (
    <NavigationContainer ref={navigataionRef}> 
     {loggedState ? <AuthStack /> : <AppStack /> } 
    </NavigationContainer>
  )
}

export default Routes