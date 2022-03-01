import { View, Text, TouchableOpacity } from 'react-native'

import styles from './styles'

export default function ButtonAddCard({ navigation }){
  return (
    <View style={styles.container}>
       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.textButton}>+ Cartão credito</Text>
      </TouchableOpacity>
    </View>
   
  )
}