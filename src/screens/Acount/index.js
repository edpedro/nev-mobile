import { Text, View, TouchableOpacity } from 'react-native'

import { useAuth } from '../../contexts/Auth'

import User from '../../Components/User'

import { MaterialIcons, Ionicons } from '@expo/vector-icons';

import styles from './styles'

export default function Acount(){
  const { handleLogout } = useAuth()

  function logout(){
    handleLogout()
  }
  return (
    <View style={styles.container}>
      <User /> 

      <View style={styles.content}> 
       <View style={styles.exitIcon}>
         <View style={styles.exit}>
          <TouchableOpacity onPress={logout}>
            <MaterialIcons name="exit-to-app" size={40} color="black" />
            <Text>Sair</Text>
          </TouchableOpacity>            
        </View>   
      </View> 
        <View style={styles.goBack}>
          <Ionicons name="arrow-back" size={24} color="black" />
          <TouchableOpacity>
            <Text style={styles.goBackTitle}>Voltar</Text>
          </TouchableOpacity>                    
        </View>        
      </View>
    </View>
  )
}