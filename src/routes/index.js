import { NavigationContainer } from '@react-navigation/native';

import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';
import Loading from '../screens/Loading'
import { useAuth } from '../contexts/Auth'

const Routes = () => {
  const { user, isLoading } = useAuth()
 
  if(isLoading){
    return (
      <Loading />
    )
  }
  return (
    <NavigationContainer>
      {user ? <AuthStack /> : <AppStack />} 
    </NavigationContainer>
  )
}

export default Routes