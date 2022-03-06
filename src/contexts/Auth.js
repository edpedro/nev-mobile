import { createContext, useContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Alert } from 'react-native'

import api from '../services/api'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState({})
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

      AsyncStorage.setItem('@data', JSON.stringify(data))
      setUser(data)
      setIsLoading(false)

      Alert.alert("Logado")
    } catch (error) {
      Alert.alert(error.message, "Tente novamente")
    }
  }

  function handleLogout() {
    setUser(undefined)
    AsyncStorage.removeItem('@data');
  } 

  return (
    <AuthContext.Provider value={{ handleLogin, handleLogout, user, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}
export function useAuth(){
  const context = useContext(AuthContext)

  return context
}