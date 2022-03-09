import { createContext, useContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ToastAndroid } from 'react-native'

import api from '../services/api'

const CreditCardContext = createContext()

export function CreditCardProvider({ children }) { 
  
  async function handleRegisterCard (card) { 
    const authData  = await AsyncStorage.getItem('@data')
    const  data  = JSON.parse(authData)   
   
    try {
      await api.post('/creditCard', card, { 
        headers: {"Authorization" : `Bearer ${data.token}`}
      })

      ToastAndroid.showWithGravity(
        "Cadastro efetuado com sucesso",
        ToastAndroid.SHORT,
        ToastAndroid.TOP
      )
    } catch (error) {      
      ToastAndroid.showWithGravity(
        "Erro ao cadastrar cartão de credito",
        ToastAndroid.SHORT,
        ToastAndroid.TOP
      )
    }
  }
  
  return (
    <CreditCardContext.Provider value={{ handleRegisterCard }}>
      {children}
    </CreditCardContext.Provider>
  )
}
export function useCreditCard(){
  const context = useContext(CreditCardContext)

  if (!context) {
    throw new Error('useCreditCard must be used within an AuthProvider');
  }

  return context
}