import { Text, View, TouchableOpacity } from "react-native";

import styles from './styles'


export default function CardComponent({ creditCards, navigation }){ 
  const { id, bank, close, win, limit, cardBalance, name } = creditCards  
  
  return (   
      <View style={styles.container}>
        <View style={styles.contentHeader}>
          <Text style={styles.headerTitle}>{bank}</Text>
          <Text style={styles.headerData}>{win}V | {close}F</Text>
        </View>
        <View style={styles.contentBody}>
          <View style={styles.invoice}>
            <Text style={styles.invoiceTitle}>Fatura</Text>
            
            <Text style={styles.invoiceValue}>  
            {Intl.NumberFormat('pt-BR', { 
              style: 'currency', 
              currency: 'BRL',
            }).format(cardBalance)}</Text>
          </View>
          <View style={styles.limit}>
          <Text style={styles.limitTitle}>Limite disponivel</Text>        
          <Text style={styles.limitValue}>
              {Intl.NumberFormat('pt-BR', { 
              style: 'currency', 
              currency: 'BRL',
            }).format(limit - cardBalance)}</Text>     
          </View>
        </View>
        <View style={styles.viewBottom}>
          <TouchableOpacity style={styles.viewInvoice} onPress={() => {
              navigation.navigate('DetailCard', {
                id
              })          
            }}>            
              <Text style={styles.viewInvoiceText}>ver fatura</Text>
          </TouchableOpacity>
          <Text style={styles.viewInvoiceTextName}>{name}</Text>
        </View> 
      </View>   
  )
}