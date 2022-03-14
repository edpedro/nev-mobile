import { createContext, useContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ToastAndroid } from 'react-native'

import api from '../services/api'

const CreditCardContext = createContext()

export function CreditCardProvider({ children }) { 
  const [creditCards, setCreditCards] = useState({})
  const [showCreditCard, setShowCreditCard] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  

  useEffect(() => {
    handleListCreditCard()
  },[])

  async function handleListCreditCard () { 
    const authData  = await AsyncStorage.getItem('@data')
    const { token }  = JSON.parse(authData)   

    const data = new Date(); 
    const month = String(data.getMonth() + 1).padStart(2, '0');

    const data1 = {
      month
    }
       
    try {  
      const { data } = await api.post('/creditCard/list', data1, { 
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

  async function handleShowCreditCard (id) {
    const authData  = await AsyncStorage.getItem('@data')
    const { token }  = JSON.parse(authData)   
      
    try {
      setIsLoading(true)
      const { data } = await api.get(`/creditCard/${id}`, { 
        headers: {"Authorization" : `Bearer ${token}`}
      })      
      setShowCreditCard(data)
      setIsLoading(false)
      
    } catch (error) {      
      setShowCreditCard({})
      setIsLoading(false)
    }
  }
  
  return (
    <CreditCardContext.Provider value={{ 
      handleRegisterCard, 
      creditCards, 
      handleShowCreditCard, 
      showCreditCard,
      isLoading 
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