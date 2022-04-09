import { Text, View, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'

import { logout } from '../../store/modules/user/actions'

import User from '../../Components/User'

import { MaterialIcons, Ionicons } from '@expo/vector-icons';

import styles from './styles'

export default function Acount(){
  const dispatch = useDispatch()

  function Logout(){
    dispatch(logout())
  }
  return (
    <View style={styles.container}>
      {/* <User />  */}

      <View style={styles.content}> 
       <View style={styles.exitIcon}>
         <View style={styles.exit}>
          <TouchableOpacity onPress={Logout}>
            <MaterialIcons name="exit-to-app" size={40} color="black" />
            <Text>Sair</Text>
          </TouchableOpacity>            
        </View>   
      </View>             
      </View>
    </View>
  )
}