import { View, Text, TouchableOpacity } from 'react-native'

import styles from './styles'

import { navigate } from '../../services/navigation'

export default function ButtonAddCard(){
  return (
    <View style={styles.container}>
       <TouchableOpacity style={styles.button} onPress={() => navigate("RegisterCard")}>
        <Text style={styles.textButton}>+ Cartão credito</Text>
      </TouchableOpacity>
    </View>
   
  )
}