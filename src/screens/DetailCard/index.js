import { Text, View, TouchableOpacity, FlatList } from 'react-native'

import User from '../../Components/User'
import TransComponent from '../../Components/TransComponent'

import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

import styles from './styles'

const DATA1 = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}]

export default function DetailCard({route, navigation }){ 

  const { creditCards } = route.params;
  const {id, bank, close, win, limit, cardBalance} = creditCards

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
            <Text style={styles.invoiceValue}>  
            {Intl.NumberFormat('pt-BR', { 
            style: 'currency', 
            currency: 'BRL',
          }).format(cardBalance)}
          </Text>
          </View>
          <View style={styles.contentLimit}>
            <Text style={styles.limitTitle}>Limite disponivel</Text>
            <Text style={styles.limitValue}>  
              {Intl.NumberFormat('pt-BR', { 
              style: 'currency', 
              currency: 'BRL',
            }).format(limit - cardBalance)}
           </Text>         
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
        <View style={styles.transaction}>
          <FlatList         
            data={DATA1}
            renderItem={({item}) => (
              <TransComponent />
            )}        
            scrollEnabled
            showsHorizontalScrollIndicator={false}          
            keyExtractor={item => item.id}
          />      
        </View>        
      </View>
    </View>
  )
}