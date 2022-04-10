import { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { AntDesign } from '@expo/vector-icons'; 

import User from '../../Components/User'
import CardComponent from '../../Components/CardComponent'
import TransComponent from '../../Components/TransComponent'
import ButtonAddCard from '../../Components/ButtonAddCard';

import { getCards } from '../../store/modules/creditCard/actions'
import { getTransactions } from '../../store/modules/transaction/actions'

import styles from './styles'

export default function Card({ navigation, route }) {
  const { cards } = useSelector((state) => state.creditCards)
  const { transCard: { result } } = useSelector((state) => state.transactions)

  const dispatch = useDispatch()

  const name = route.name || {};

  const [filterCards, setFilterCards] = useState("")  

  useEffect(() => {
    dispatch(getCards())
    dispatch(getTransactions())     
  },[]) 
 
  return (
   <View style={styles.container}>
     <View style={styles.user}>
       <User />
       <View style={styles.title}>
         <Text style={styles.titleName}>Cartão de credito</Text>
         <TouchableOpacity style={styles.tabItemCenter} onPress={() => navigation.navigate("RegisterCard")}>  
            <AntDesign name="pluscircle" size={40} color="white" />     
         </TouchableOpacity >      
      </View>
     </View>
     <View style={styles.content}>
        <View style={styles.card}>
        {cards && cards.length > 0
            ?
            <FlatList         
            data={cards}
            renderItem={({item}) => (         
              <CardComponent creditCards={item} navigation={navigation}/>
            )}
            horizontal={true}
            scrollEnabled
            showsHorizontalScrollIndicator={false}          
            keyExtractor={item => item.id}
          />        
            :
              <ButtonAddCard />
          }          
        </View> 
    
          <Text style={styles.transactionTitle}>Recentes Lançamentos</Text>
          {
            result && result.length > 0

            ?
              <FlatList         
              data={result}
              renderItem={({item}) => (
                <TransComponent invoceCreditCard={item} navigation={navigation}/>
              )}        
              scrollEnabled
              showsHorizontalScrollIndicator={false}          
              keyExtractor={item => item.id}
            />
            :
            <View style={styles.notRelease}>
              <Text style={styles.notReleaseTitle}>Sem lançamentos</Text>     
            </View> 
          }
            
      </View>     
   </View>
  );
}
