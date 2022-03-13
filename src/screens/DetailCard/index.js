import { useEffect } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import User from '../../Components/User'

import { useCreditCard } from '../../contexts/CreditCard'
import Loading from '../../screens/Loading'

import { FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons';

import styles from './styles'

export default function DetailCard({route, navigation }){
  const { handleShowCreditCard, showCreditCard, isLoading } = useCreditCard()

  const { creditCards } = route.params;
  const {id, bank, close, win} = creditCards

  return (
    <View style={styles.container}>
      <User /> 

      <View style={styles.content}>
        <View style={styles.iconCard}>
          <FontAwesome name="credit-card" size={25} color="black" />
        </View>

        <Text style={styles.detailTitle}>{bank}</Text>

        <View style={styles.detailBody}>          
          <Text style={styles.contentTitle}>{win} Vencimento | {close} Fechamento</Text>
          <View style={styles.contenInvoice}>
            <Text style={styles.invoiceTitle}>Fatura</Text>
            <Text style={styles.invoiceValue}>R$ - 150,00</Text>
          </View>
          <View style={styles.contentLimit}>
            <Text style={styles.limitTitle}>Limite disponivel</Text>
            <Text style={styles.limitValue}>R$ - 150,00</Text>         
          </View>          
        </View>

        <View style={styles.iconEditRemove}>
          <View style={styles.iconEdit}>
            <TouchableOpacity onPress={() => {      
              navigation.navigate('RegisterCard', {
                id          
              });
           }}>
              <MaterialIcons name="mode-edit" size={35} color="black" />
            </TouchableOpacity>            
          </View>
          <View style={styles.iconRemove}>
            <TouchableOpacity>
              <MaterialIcons name="delete-forever" size={35} color="black" />
            </TouchableOpacity>           
          </View>
        </View>

        <View style={styles.goBack}>
          <Ionicons name="arrow-back" size={24} color="black" />
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.goBackTitle}>Voltar</Text>
          </TouchableOpacity>
                    
        </View>        
      </View>
    </View>
  )
}