import { takeLatest, all, call, put } from 'redux-saga/effects'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Alert } from 'react-native'

import types from './types'
import { loginSucess, logoutSucess } from './actions'
import { loading } from '../loading/actions'

import api from '../../../services/api'
import { replace, navigate } from '../../../services/navigation'

export function* LoginUser({ user }){
  yield put(loading(true));
  try {
    const { data } = yield call(api.post, 'sessions', user)

    AsyncStorage.setItem('@data', JSON.stringify(data)) 
    yield put(loginSucess(data)) 
    yield call(navigate, 'Inicio');

  } catch (error) {
    Alert.alert('Erro de acesso!', "Email ou Senha Invalida!");
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
  takeLatest(types.LOGIN_USER, LoginUser),
  takeLatest(types.LOGOUT, Logout)
]);