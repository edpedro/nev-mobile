import { takeLatest, all, call, put } from 'redux-saga/effects'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Toast from 'react-native-toast-message';

import types from './types'

import { getCards } from '../creditCard/actions'
import { setTransactions, getTransactions, setShowTransaction } from './actions'
import { loading } from '../loading/actions'

import api from '../../../services/api'
import { navigate } from '../../../services/navigation'

export function* GetTransactions(){
  const data = yield AsyncStorage.getItem('@data')
  const { token } = JSON.parse(data)

  yield put(loading(true));
 
  try {
    const { data } = yield call(api.get, 'transaction', {
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
  console.log(transaction)
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

    Toast.show({
      type: 'error',
      text1: 'Tente novamente!',
     
    });
  }
}

export function* UpdateTransaction({ transaction, id }){
  const data = yield AsyncStorage.getItem('@data')
  const { token } = JSON.parse(data)
  
  try {    
    yield call(api.put, `transaction/${id}`, transaction, {
      headers: {"Authorization" : `Bearer ${token}`}
    })       
    
    yield put(getTransactions())
    yield navigate('Inicio')
    
    Toast.show({
      type: 'success',
      text1: 'Transação',
      text2: 'Lançamento atualizado com sucesso'
    });
    
  } catch (error) {    
    Toast.show({
      type: 'error',
      text1: 'Tente novamente!',
     
    });
  }
}

export function* DeleteTransaction({ id }){
  const data = yield AsyncStorage.getItem('@data')
  const { token } = JSON.parse(data)
 
  try {    
    yield call(api.delete, `transaction/${id}`,{
      headers: {"Authorization" : `Bearer ${token}`}
    })     
   
    yield put(getCards()) 
    yield put(getTransactions())
    yield navigate('Inicio')

    Toast.show({
      type: 'success',
      text1: 'Transação',
      text2: 'Lançamento deletado com sucesso'
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
  takeLatest(types.UPDATE_TRANSACTION, UpdateTransaction),
  takeLatest(types.DELETE_TRANSACTION, DeleteTransaction),
]);