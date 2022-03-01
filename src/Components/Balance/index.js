import { Text, View } from "react-native";

import styles from './styles'

export default function Balance({ route }){
  
  return (
    <View style={styles.container}>
      <View 
        style={[styles.income, 
        {backgroundColor: route === 'Transaction'? "#058373": "#fff",
          shadowColor: route === 'Transaction'? "#058373": "#000"
        }]}>
        <Text
        style={[{color: route === 'Transaction'? "#fff": "#000"}]}
        >Receita</Text>
        <Text 
        style={[styles.incomeValue, {color: route === 'Transaction'? "#fff": "#000"}]}
        >200,00</Text>
      </View>
      <View style={[styles.expense, 
        {backgroundColor: route === 'Transaction'? "#058373": "#fff",
          shadowColor: route === 'Transaction'? "#058373": "#000"
        }]}>
        <Text style={[{color: route === 'Transaction'? "#fff": "#000"}]}>Despesa</Text>
        <Text style={[styles.expenseValue, {color: route === 'Transaction'? "#fff": "#EC1C24"}]}>150,00</Text>
      </View>
      <View style={[styles.ContentBalance, 
        {backgroundColor: route === 'Transaction'? "#058373": "#fff",
          shadowColor: route === 'Transaction'? "#058373": "#000"
        }]}>
        <Text style={[styles.incomeValue, {color: route === 'Transaction'? "#fff": "#000"}]}>Saldo</Text>
        <Text style={[styles.ContentBalanceValue, {color: route === 'Transaction'? "#fff": "#058373"}]}>50,00</Text>
      </View>
    </View>
  )
}