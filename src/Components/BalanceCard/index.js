import { View, Text } from 'react-native'

import styles from './styles'

export default function BalanceCard(){
  return (
    <View style={styles.container}>
      <View style={styles.balanceCard}>
        <Text style={styles.balanceCardName}>Saldo Total Crédito</Text>
        <Text style={styles.balanceCardValue}>200,00</Text>  
      </View> 
      <View style={styles.expenseCard}>
        <Text style={styles.expenseCardName}>Despesa Total Crédito</Text>
        <Text>200,00</Text>  
      </View>   
    </View>
  ) 
}