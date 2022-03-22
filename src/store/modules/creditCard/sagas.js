import { takeLatest, all, call, put } from 'redux-saga/effects'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Toast from 'react-native-toast-message';

import types from './types'
import { setCards, getCards } from './actions'
import { loading } from '../loading/actions'

import api from '../../../services/api'
import { replace, navigate } from '../../../services/navigation'

const mes = {
  month: "03"
}
export function* GetCards(){
  const data = yield AsyncStorage.getItem('@data')
  const { token } = JSON.parse(data)
 
  try {
    const { data } = yield call(api.post, 'creditCard/list', mes, {
      headers: {"Authorization" : `Bearer ${token}`}
    })        
    yield put(setCards(data)) 

  } catch (error) {
    Toast.show({
      type: 'error',
      text1: 'Tente novamente!',
     
    });
  }
}
export function* RegisterCards({card}){
  const data = yield AsyncStorage.getItem('@data')
  const { token } = JSON.parse(data)

  yield put(loading(true));

  try {    
    yield call(api.post, 'creditCard', card, {
      headers: {"Authorization" : `Bearer ${token}`}
    })        
    yield put(getCards()) 
    yield navigate('Inicio');
  } catch (error) {
    Toast.show({
      type: 'error',
      text1: 'Tente novamente!',
     
    });
  }finally {
    yield put(loading(false));
  }
}

export default all([
  takeLatest(types.GET_CARDS, GetCards),
  takeLatest(types.REGISTER_CARD, RegisterCards),
]);