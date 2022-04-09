import { useEffect, useState } from 'react'
import { Text, View, TouchableOpacity, FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import User from '../../Components/User'
import TransComponent from '../../Components/TransComponent'
import ModalDelete from '../../Components/ModalDeleteCard'

import { getCard, getCardTrans } from '../../store/modules/creditCard/actions'

import SelectFilter from '../../Components/SelectFilter'

import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

import styles from './styles'

const months = ["01","02","03","04","05","06","07","08","09","10","11","12"]

export default function DetailCard({ route, navigation }){ 
  const { cardTrans, card } = useSelector((state) => state.creditCards)
  const dispatch = useDispatch()

  const [modalVisible, setModalVisible] = useState(false);
  const [cardMonth, setCardMonth] = useState("")
  const [refreshing, setRefreshing] = useState(false);

  const { id } = route.params || {} 

  useEffect(() => {
    dispatch(getCard(id, cardMonth))
    dispatch(getCardTrans(id, cardMonth))   
    setRefreshing(false) 
  },[id, cardMonth, refreshing]) 


  return (
    <View style={styles.container}>
      <User /> 

      <View style={styles.content}>
        <View style={styles.contentBody}>   

        <View style={styles.iconCard}>
          <FontAwesome name="credit-card" size={25} color="black" />
        </View> 
         
        <View style={styles.filter}>
          <SelectFilter  
              title="Data" 
              text={"Filtro por Mês"} 
              options={months}
              onChangeSelect={(item) => {                
                setCardMonth((prevState) => ({
                  ...prevState,
                  month: item                  
                }));             
              }}    
          />
          
        </View>

        <Text style={styles.detailTitle}>{card.bank}</Text>

        <View style={styles.detailBody}>          
          <Text style={styles.contentTitle}>{card.win} Vencimento | {card.close} Fechamento</Text>
          <View style={styles.contenInvoice}>
            <Text style={styles.invoiceTitle}>Fatura</Text>
            <Text style={styles.invoiceValue}>  
            {Intl.NumberFormat('pt-BR', { 
            style: 'currency', 
            currency: 'BRL',
          }).format(card.cardBalance)}
          </Text>
          </View>
          <View style={styles.contentLimit}>
            <Text style={styles.limitTitle}>Limite disponivel</Text>
            <Text style={styles.limitValue}>  
              {Intl.NumberFormat('pt-BR', { 
              style: 'currency', 
              currency: 'BRL',
            }).format(card.limit - card.cardBalance)}
           </Text>         
          </View>          
        </View>

        <View style={styles.iconEditRemove}>
          <View style={styles.iconEdit}>
            <TouchableOpacity onPress={() => {      
              navigation.navigate('RegisterCard', {
                card 
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
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);          
            }}
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