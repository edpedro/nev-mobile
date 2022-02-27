import { Text, View, TouchableOpacity } from "react-native";

import styles from './styles'

export default function Card(){
  return (
    <View style={styles.container}>
      <View style={styles.contentHeader}>
        <Text style={styles.headerTitle}>Nubank</Text>
        <Text style={styles.headerData}>01V | 09F</Text>
      </View>
      <View style={styles.contentBody}>
        <View style={styles.invoice}>
          <Text style={styles.invoiceTitle}>Fatura</Text>
          <Text style={styles.invoiceValue}>R$ - 150,00</Text>
        </View>
        <View style={styles.limit}>
        <Text style={styles.limitTitle}>Limite disponivel</Text>
          <Text style={styles.limitValue}>R$ - 150,00</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.viewInvoice}>
          <Text style={styles.viewInvoiceText}>ver fatura</Text>
      </TouchableOpacity>
    </View>
  )
}