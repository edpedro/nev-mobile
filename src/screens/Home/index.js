import { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'

import styles from './styles'

import User from '../../Components/User'
import Balance from '../../Components/Balance';
import CardComponent from '../../Components/CardComponent';
import TransComponent from '../../Components/TransComponent'

import { getCards } from '../../store/modules/creditCard/actions'


const DATA = [{id: 1}]
const DATA1 = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}]

export default function Home({ navigation }) {
  const { cards } = useSelector((state) => state.creditCards)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getCards())
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
        {/* <FlatList         
            data={DATA1}
            renderItem={({item}) => (
              <TransComponent />
            )}        
            scrollEnabled
            showsHorizontalScrollIndicator={false}          
            keyExtractor={item => item.id}
          />        */}
      </View>
    </View>
  );
}
