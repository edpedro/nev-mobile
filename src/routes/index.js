import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux'

import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';
import Loading from '../screens/Loading';

import { navigataionRef } from '../services/navigation'

const Routes = () => {
  const { loggedState } = useSelector((state) => state.userReduce)
  const { loading } = useSelector((state) => state.loadingReducer)

  if(loading){
    return (
      <Loading />
    )    
  }

   return (
    <NavigationContainer ref={navigataionRef}>
     {loggedState ? <AuthStack /> : <AppStack /> } 
    </NavigationContainer>
  )
}

export default Routes