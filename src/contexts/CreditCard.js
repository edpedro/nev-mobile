import { createContext, useContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ToastAndroid } from 'react-native'

import api from '../services/api'

const CreditCardContext = createContext()

export function CreditCardProvider({ children }) { 
  const [creditCards, setCreditCards] = useState({})
  const [invoceCreditCard, setInvoceCreditCard] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [updateCreditCard, setUpdateCreditCard] = useState({})
  

  useEffect(() => {
    handleListCreditCard()
  },[updateCreditCard])

  const dataCurrent = new Date(); 
  const month = String(dataCurrent.getMonth() + 1).padStart(2, '0');

  const monthCurrent = {
    month
  }

  async function handleListCreditCard () { 
    const authData  = await AsyncStorage.getItem('@data')
    const { token }  = JSON.parse(authData)   

           
    try {  
      const { data } = await api.post('/creditCard/list', monthCurrent, { 
        headers: {"Authorization" : `Bearer ${token}`}
      })      
      setCreditCards(data)    
    
    } catch (error) {     
      console.log(error) 
      ToastAndroid.showWithGravity(
        "Erro",
        ToastAndroid.SHORT,
        ToastAndroid.TOP
      )
    }
  }
  
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

  async function handleUpdateCard (id, card) { 
    const authData  = await AsyncStorage.getItem('@data')
    const  dataToken  = JSON.parse(authData)   
   
    try {
      const { data } = await api.put(`/creditCard/${id}`, card, { 
        headers: {"Authorization" : `Bearer ${dataToken.token}`}
      })

      setUpdateCreditCard(data)
      ToastAndroid.showWithGravity(
        "Atualizado efetuado com sucesso",
        ToastAndroid.SHORT,
        ToastAndroid.TOP
      )
    } catch (error) {      
      ToastAndroid.showWithGravity(
        "Erro ao atualizar cartão de credito",
        ToastAndroid.SHORT,
        ToastAndroid.TOP
      )
    }
  }

  async function handleInvoceCreditCard (id, date) {
    const authData  = await AsyncStorage.getItem('@data')
    const { token }  = JSON.parse(authData)
    
    const month = date ? date : monthCurrent
  
    try {
      setIsLoading(true)
      const { data } = await api.post(`/creditCard/invoce/${id}`, month, { 
        headers: {"Authorization" : `Bearer ${token}`}
      })      
      setInvoceCreditCard(data)
      setIsLoading(false)     
    } catch (error) {      
      setInvoceCreditCard({})
      setIsLoading(false)
    }
  }
  
  return (
    <CreditCardContext.Provider value={{ 
        handleRegisterCard, 
        creditCards, 
        handleInvoceCreditCard, 
        invoceCreditCard,
        isLoading,
        handleUpdateCard,
        updateCreditCard 
      }}>
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