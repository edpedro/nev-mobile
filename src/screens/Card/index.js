import { View, Text, FlatList } from 'react-native'

import User from '../../Components/User'
import CardComponent from '../../Components/CardComponent'
import TransComponent from '../../Components/TransComponent'

import styles from './styles'


const DATA = [{id: 1}]
const DATA1 = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}]

export default function Card() {

  return (
   <View style={styles.container}>
     <View style={styles.user}>
       <User />
       <View style={styles.title}>
         <Text style={styles.titleName}>Cartão de credito</Text>      
      </View>
     </View>
     <View style={styles.content}>
        <View style={styles.card}>
       
            <FlatList         
            data={DATA}
            renderItem={({item}) => (     
              <CardComponent />
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
              <TransComponent />
            )}        
            scrollEnabled
            showsHorizontalScrollIndicator={false}          
            keyExtractor={item => item.id}
          />  
      </View>     
   </View>
  );
}
