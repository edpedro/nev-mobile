import { Text, View } from "react-native";

import styles from './styles'

export default function Balance(){
  return (
    <View style={styles.container}>
      <View style={styles.income}>
        <Text>Receita</Text>
        <Text style={styles.incomeValue}>200,00</Text>
      </View>
      <View style={styles.expense}>
        <Text>Despesa</Text>
        <Text style={styles.expenseValue}>150,00</Text>
      </View>
      <View style={styles.ContentBalance}>
        <Text>Saldo</Text>
        <Text style={styles.ContentBalanceValue}>50,00</Text>
      </View>
    </View>
  )
}