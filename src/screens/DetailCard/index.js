import { useEffect, useState } from 'react'
import { Text, View, TouchableOpacity, FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import User from '../../Components/User'
import TransComponent from '../../Components/TransComponent'
import ModalDelete from '../../Components/ModalDelete'

import { getCard, getCardTrans } from '../../store/modules/creditCard/actions'

import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

import styles from './styles'

export default function DetailCard({ route, navigation }){ 
  const { cardTrans, cards } = useSelector((state) => state.creditCards)
  const dispatch = useDispatch()

  const [modalVisible, setModalVisible] = useState(false);
  const [cardFilter, setCardFilter] = useState({})

  const { id } = route.params || {} 

  useEffect(() => {
    dispatch(getCard(id))
    dispatch(getCardTrans(id))

     const filterCard  = cards.filter((item) => {
        return item.id === id
      })
  
      setCardFilter(filterCard[0])
  },[id]) 

    return (
    <View style={styles.container}>
      <User /> 

      <View style={styles.content}>
        <View style={styles.contentBody}>   

        <View style={styles.iconCard}>
          <FontAwesome name="credit-card" size={25} color="black" />
        </View>    
 
        <Text style={styles.detailTitle}>{cardFilter.bank}</Text>

        <View style={styles.detailBody}>          
          <Text style={styles.contentTitle}>{cardFilter.win} Vencimento | {cardFilter.close} Fechamento</Text>
          <View style={styles.contenInvoice}>
            <Text style={styles.invoiceTitle}>Fatura</Text>
            <Text style={styles.invoiceValue}>  
            {Intl.NumberFormat('pt-BR', { 
            style: 'currency', 
            currency: 'BRL',
          }).format(cardFilter.cardBalance)}
          </Text>
          </View>
          <View style={styles.contentLimit}>
            <Text style={styles.limitTitle}>Limite disponivel</Text>
            <Text style={styles.limitValue}>  
              {Intl.NumberFormat('pt-BR', { 
              style: 'currency', 
              currency: 'BRL',
            }).format(cardFilter.limit - cardFilter.cardBalance)}
           </Text>         
          </View>          
        </View>

        <View style={styles.iconEditRemove}>
          <View style={styles.iconEdit}>
            <TouchableOpacity onPress={() => {      
              navigation.navigate('RegisterCard', {
                cardFilter 
              });
           }}>
              <MaterialIcons name="mode-edit" size={35} color="black" />
            </TouchableOpacity>            
          </View>
          <View style={styles.iconRemove}>
            <TouchableOpacity onPress={() => {
              setModalVisible(true)              
              }} >
              <MaterialIcons name="delete-forever" size={35} color="black" />
            </TouchableOpacity>           
          </View>         
        </View>  
  
        </View>      
        {cardTrans && cardTrans.length > 0 ?
          <FlatList         
            data={cardTrans}
            renderItem={({item}) =>                 
              <TransComponent invoceCreditCard={item} navigation={navigation}/>                            
            }        
            scrollEnabled
            showsHorizontalScrollIndicator={false}          
            keyExtractor={item => item.id}
          /> 
          :
          <View style={styles.notRelease}>
            <Text style={styles.notReleaseTitle}>Sem lançamentos</Text>     
          </View>          
        }  
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