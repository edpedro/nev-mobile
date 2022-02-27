import { View, Text, FlatList } from 'react-native';

import styles from './styles'

import User from '../../Components/User'
import Balance from '../../Components/Balance';
import Card from '../../Components/Card';
import TransComponents from '../../Components/TransComponents'

const DATA = [{id: 1}]
const DATA1 = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}]

export default function Home() {
  return (
    <View style={styles.container}>
      <User />
      <Balance />
      <View style={styles.content}>
        <Text style={styles.cardTitle}>Cartão de credito</Text>
        <View style={styles.card}>
          <FlatList         
            data={DATA}
            renderItem={({item}) => (
              <Card />
            )}
            horizontal={true}
            scrollEnabled
            showsHorizontalScrollIndicator={false}          
            keyExtractor={item => item.id}
          />        
        </View>
       
        <Text style={styles.transactionTitle}>Recentes Lançamentos</Text>
        <FlatList         
            data={DATA1}
            renderItem={({item}) => (
              <TransComponents/>
            )}        
            scrollEnabled
            showsHorizontalScrollIndicator={false}          
            keyExtractor={item => item.id}
          />       
      </View>
    </View>
  );
}
