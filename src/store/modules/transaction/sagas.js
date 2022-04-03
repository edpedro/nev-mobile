import { takeLatest, all, call, put } from 'redux-saga/effects'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Toast from 'react-native-toast-message';

import types from './types'
import { setTransactions, getTransactions, setShowTransaction } from './actions'
import { loading } from '../loading/actions'

import api from '../../../services/api'
import { navigate } from '../../../services/navigation'

export function* GetTransactions(){
  const data = yield AsyncStorage.getItem('@data')
  const { token } = JSON.parse(data)

  yield put(loading(true));
 
  try {
    const { data } = yield call(api.get, 'transaction',{
      headers: {"Authorization" : `Bearer ${token}`}
    })        
    yield put(setTransactions(data))
  
  } catch (error) {
    Toast.show({
      type: 'error',
      text1: 'Tente novamente!',
     
    });
  }finally {
    yield put(loading(false));
  }
}

export function* GetShowTransaction({ id }){
  const data = yield AsyncStorage.getItem('@data')
  const { token } = JSON.parse(data)

  yield put(loading(true));
 
  try {
    const { data } = yield call(api.get, `transaction/${id}`, {
      headers: {"Authorization" : `Bearer ${token}`}
    })      
    yield put(setShowTransaction(data))
    
  } catch (error) {
    Toast.show({
      type: 'error',
      text1: 'Tente novamente!',
     
    });
  }finally {
    yield put(loading(false));
  }
}
export function* RegisterTransaction({ transaction }){
  const data = yield AsyncStorage.getItem('@data')
  const { token } = JSON.parse(data) 

  try {    
    yield call(api.post, 'transaction', transaction, {
      headers: {"Authorization" : `Bearer ${token}`}
    })    

    yield put(getTransactions())
    yield navigate('Inicio')

    Toast.show({
      type: 'success',
      text1: 'Transação',
      text2: 'Lançamento cadastrado com sucesso'
    });
  
  } catch (error) {
    console.log(error)
    Toast.show({
      type: 'error',
      text1: 'Tente novamente!',
     
    });
  }
}

export function* GetCardTrans({ id }){
  const data = yield AsyncStorage.getItem('@data')
  const { token } = JSON.parse(data)

  yield put(loading(true));
  
  try {
    const { data } = yield call(api.post, `creditCard/invoce/${id}`, mes, {
      headers: {"Authorization" : `Bearer ${token}`}
    })        
    
    yield put(setCardTrans(data))

  } catch (error) {
    Toast.show({
      type: 'error',
      text1: 'Tente novamente!',
     
    });
  }finally {
    yield put(loading(false));
  }
}

export function* UpdateCard({ card, id }){
  const data = yield AsyncStorage.getItem('@data')
  const { token } = JSON.parse(data)

  try {    
    yield call(api.put, `creditCard/${id}`, card, {
      headers: {"Authorization" : `Bearer ${token}`}
    })       
    
    yield put(getCards())
    
    Toast.show({
      type: 'success',
      text1: 'Cartão de credito',
      text2: 'Atualizado com sucesso'
    });
    
  } catch (error) {
    Toast.show({
      type: 'error',
      text1: 'Tente novamente!',
     
    });
  }
}

export function* DeleteCard({ id }){
  const data = yield AsyncStorage.getItem('@data')
  const { token } = JSON.parse(data)

  try {    
    yield call(api.delete, `creditCard/${id}`,{
      headers: {"Authorization" : `Bearer ${token}`}
    })       
    
    yield put(getCards()) 
    yield navigate('Card');
    Toast.show({
      type: 'success',
      text1: 'Cartão de credito',
      text2: 'Deletado com sucesso'
    });
    
  } catch (error) {
    Toast.show({
      type: 'error',
      text1: 'Tente novamente!',
     
    });
  }
}

export default all([
  takeLatest(types.GET_TRANSACTIONS, GetTransactions), 
  takeLatest(types.REGISTER_TRANSACTIONS, RegisterTransaction),
  takeLatest(types.GET_SHOW_TRANSACTIONS, GetShowTransaction),
]);