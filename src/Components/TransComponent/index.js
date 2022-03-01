import { View, Text } from 'react-native'

import { FontAwesome, Entypo  } from '@expo/vector-icons';

import styles from './styles'

export default function TransComponent(){
  return (
    <View style={styles.container}>

     <View style={styles.iconCardCircle}>
      <FontAwesome name="credit-card" size={18} color="black" />
     </View>

     <View style={styles.content}>
       <Text style={styles.contentTitle}>Internet</Text>
       <View style={styles.contentData}>
         <Text>Fev 02-2022</Text>
          <View style={styles.contentCircle}></View>
         <Text>Cartão</Text>
       </View>       
     </View>

     <View style={styles.circle}>
      <Entypo name="circle" size={12} color="red" />
     </View>

     <View>
       <Text style={styles.valueText}>R$ - 150,00</Text>
     </View>
    </View>
  ) 
}