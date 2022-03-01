import { View, Text, FlatList } from 'react-native'

import { useRoute } from '@react-navigation/native'

import User from '../../Components/User'
import Balance from '../../Components/Balance'
import TransComponent from '../../Components/TransComponent'

import styles from './styles'


const DATA1 = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}]

export default function Transaction() {
  const { name } = useRoute();

  return (
   <View style={styles.container}>
     <View style={styles.user}>
       <User />
       <View style={styles.title}>
         <Text style={styles.titleName}>Transações - Conta</Text>      
      </View>
     </View>
     <View style={styles.content}>
        <View style={styles.balance}>
           <Balance route={name}/>
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
