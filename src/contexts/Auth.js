import { createContext, useContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ToastAndroid } from 'react-native'

import api from '../services/api'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState()
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    loadStorageData()
  }, [])

  async function loadStorageData(){
    const authData  = await AsyncStorage.getItem('@data')
    
    if(authData){
      const data = JSON.parse(authData)

      setUser(data)
      
    }    
    setIsLoading(false)
  }
  
  async function handleLogin(user) {   
    try {
      const { data } = await api.post('/sessions', user)

      setUser(data) 
      AsyncStorage.setItem('@data', JSON.stringify(data))       
      
      ToastAndroid.showWithGravity(
        "Login efetuado com sucesso",
        ToastAndroid.SHORT,
        ToastAndroid.TOP
      )
    } catch (error) {
      ToastAndroid.showWithGravity(
        "Tente novamente",
        ToastAndroid.SHORT,
        ToastAndroid.TOP
      )
    }
  }

  async function handleRegister(user) {   
    try {
      const { data } = await api.post('/users', user)

      setUser(data) 
      AsyncStorage.setItem('@data', JSON.stringify(data))       
      
      ToastAndroid.showWithGravity(
        "Cadastro efetuado com sucesso",
        ToastAndroid.SHORT,
        ToastAndroid.TOP
      )
    } catch (error) {
      ToastAndroid.showWithGravity(
        "Tente novamente",
        ToastAndroid.SHORT,
        ToastAndroid.TOP
      )
    }
  }

  function handleLogout() {
    setUser(undefined)
    AsyncStorage.removeItem('@data');
  } 

  return (
    <AuthContext.Provider value={{ handleLogin, handleLogout, handleRegister, user, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}
export function useAuth(){
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context
}