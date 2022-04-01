import { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'

import styles from './styles'

import User from '../../Components/User'
import Balance from '../../Components/Balance';
import CardComponent from '../../Components/CardComponent';
import TransComponent from '../../Components/TransComponent'

import { getCards } from '../../store/modules/creditCard/actions'
import { getTransactions } from '../../store/modules/transaction/actions'

export default function Home({ navigation }) {
  const { cards } = useSelector((state) => state.creditCards)
  const { trans: { transactions } } = useSelector((state) => state.transactions)

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getCards())
    dispatch(getTransactions())
  },[])
  
   return (
    <View style={styles.container}>  
      <User />
      <Balance />
      <View style={styles.content}>
        <Text style={styles.cardTitle}>Cartão de credito</Text>
        <View style={styles.card}>
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
        </View>
       
        <Text style={styles.transactionTitle}>Recentes Lançamentos</Text>
        <FlatList         
            data={transactions}
            renderItem={({item}) => (
              <TransComponent invoceCreditCard={item}/>
            )}        
            scrollEnabled
            showsHorizontalScrollIndicator={false}          
            keyExtractor={item => item.id}
          />       
      </View>
    </View>
  );
}
