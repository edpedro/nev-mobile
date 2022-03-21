import { useState } from 'react'
import { Text, View, TouchableOpacity, FlatList } from 'react-native'

import User from '../../Components/User'
import TransComponent from '../../Components/TransComponent'
import Loading from '../Loading'
import ModalDelete from '../../Components/ModalDelete'

import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

import styles from './styles'

export default function DetailCard({route, navigation }){ 
  const [modalVisible, setModalVisible] = useState(false);

  const { creditCards } = route.params;
  const {id, bank, close, win, limit, cardBalance} = creditCards

    return (
    <View style={styles.container}>
      <User /> 

      <View style={styles.content}>
        <View style={styles.contentBody}>   

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
                creditCards        
              });
           }}>
              <MaterialIcons name="mode-edit" size={35} color="black" />
            </TouchableOpacity>            
          </View>
          <View style={styles.iconRemove}>
            <TouchableOpacity onPress={() => setModalVisible(true)} >
              <MaterialIcons name="delete-forever" size={35} color="black" />
            </TouchableOpacity>           
          </View>         
        </View>  
        </View>
        {/* {invoceCreditCard && invoceCreditCard.length > 0 ?
          <FlatList         
            data={invoceCreditCard}
            renderItem={({item}) =>                 
              <TransComponent invoceCreditCard={item}/>                            
            }        
            scrollEnabled
            showsHorizontalScrollIndicator={false}          
            keyExtractor={item => item.id}
          /> 
          :
          <View style={styles.notRelease}>
            <Text style={styles.notReleaseTitle}>Sem lançamentos</Text>     
          </View>          
        }   */}
        {modalVisible && 
          <ModalDelete 
            idCard={id} 
            modalVisible={modalVisible} 
            setModalVisible={setModalVisible}
            navigation={navigation}
          /> 
        }      
      </View>
    </View>
  )
}