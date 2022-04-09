import { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'

import styles from './styles'

import User from '../../Components/User'
import Balance from '../../Components/Balance';
import CardComponent from '../../Components/CardComponent';
import TransComponent from '../../Components/TransComponent'
import ButtonAddCard from '../../Components/ButtonAddCard';

import { getCards } from '../../store/modules/creditCard/actions'
import { getTransactions } from '../../store/modules/transaction/actions'

export default function Home({ navigation }) {
  const { cards } = useSelector((state) => state.creditCards)
  const { trans: { transactions, balance } } = useSelector((state) => state.transactions)

  const [refreshing, setRefreshing] = useState(false);

  const dispatch = useDispatch()

 
  useEffect(() => {
    dispatch(getCards())
    dispatch(getTransactions())
    setRefreshing(false)
  },[refreshing])
   
   return (
    <View style={styles.container}>  
      <User />
      <Balance data={balance}/>
      <View style={styles.content}>
        <Text style={styles.cardTitle}>Cartão de credito</Text>
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
          transactions && transactions.length > 0

          ? 
            <FlatList         
            data={transactions}
            renderItem={({item}) => (
              <TransComponent invoceCreditCard={item} navigation={navigation}/>
            )}        
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
        <FlatList         
            data={transactions}
            renderItem={({item}) => (
              <TransComponent invoceCreditCard={item} navigation={navigation}/>
            )}        
            scrollEnabled
            showsHorizontalScrollIndicator={false}          
            keyExtractor={item => item.id}
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);          
            }}
          />       
      </View>
    </View>
  );
}
