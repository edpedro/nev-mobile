import { takeLatest, all, call, put } from 'redux-saga/effects'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Toast from 'react-native-toast-message';

import types from './types'
import { loginSucess, logoutSucess, loginUser } from './actions'
import { loading } from '../loading/actions'

import api from '../../../services/api'
import { replace, navigate } from '../../../services/navigation'

export function* RegisterUser({ user }){
  yield put(loading(true));
  
  try {
    const { data } = yield call(api.post, 'users', user)  

    if(data){
      const { email, password } = user
      
      yield put(loginUser({email, password})) 
    }  
    
    Toast.show({
      type: 'success',
      text1: 'Acesso',
      text2: 'Cadastro feito com sucesso'
    });

  } catch (error) {
    yield navigate('Register');
    Toast.show({
      type: 'error',
      text1: 'Erro de acesso',
      text2: 'Usuario já existe!'
    });
  }finally {
    yield put(loading(false));
  }
}

export function* LoginUser({ user }){
 
  yield put(loading(true));
  try {
    const { data } = yield call(api.post, 'sessions', user)

    AsyncStorage.setItem('@data', JSON.stringify(data)) 
    yield put(loginSucess(data)) 
    yield call(navigate, 'Inicio');

    Toast.show({
      type: 'success',
      text1: 'Acesso',
      text2: 'Logado com sucesso'
    });

  } catch (error) {
    Toast.show({
      type: 'error',
      text1: 'Erro de acesso',
      text2: 'Email ou Senha invalida!'
    });
  }finally {
    yield put(loading(false));
  }
}
export function* Logout(){
  AsyncStorage.removeItem('@data') 
  yield put(logoutSucess()) 
  yield call(replace, 'Login') 
}

export default all([
  takeLatest(types.REGISTER_USER, RegisterUser),
  takeLatest(types.LOGIN_USER, LoginUser),
  takeLatest(types.LOGOUT, Logout)
]);