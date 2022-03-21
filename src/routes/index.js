import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux'

import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';
import Loading from '../screens/Loading';

import { navigataionRef } from '../services/navigation'

const Routes = () => {
  const { loggedState } = useSelector((state) => state.userReduce)
  const { loading } = useSelector((state) => state.loadingReducer)
  console.log(loggedState)

  if(loading){
    return (
      <Loading />
    )    
  }
  console.log(loading)
   return (
    <NavigationContainer ref={navigataionRef}>
     {loggedState ? <AuthStack /> : <AppStack /> } 
    </NavigationContainer>
  )
}

export default Routes