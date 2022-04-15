import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'

import styles from './styles'

export default function BalanceCard(){
  const { balanceCard: {balance, expense} } = useSelector((state) => state.creditCards)

  return (
    <View style={styles.container}>
      <View style={styles.balanceCard}>
        <Text style={styles.balanceCardName}>Saldo Total Crédito</Text>
        <Text style={styles.balanceCardValue}> {Intl.NumberFormat('pt-BR', { 
              style: 'currency', 
              currency: 'BRL',
            }).format(balance).replace(/^(\D+)/, '$1 ')}
        </Text>  
      </View> 
      <View style={styles.expenseCard}>
        <Text style={styles.expenseCardName}>Despesa Total Crédito</Text>
        <Text style={styles.expenseCardValue}>{Intl.NumberFormat('pt-BR', { 
              style: 'currency', 
              currency: 'BRL',
            }).format(expense).replace(/^(\D+)/, '$1 ')}
        </Text>  
      </View>   
    </View>
  ) 
}