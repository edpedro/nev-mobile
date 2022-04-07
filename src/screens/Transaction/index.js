import { useState, useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'

import { useRoute } from '@react-navigation/native'

import { useSelector } from 'react-redux'

import User from '../../Components/User'
import Balance from '../../Components/Balance'
import TransComponent from '../../Components/TransComponent'
import SelectFilter from '../../Components/SelectFilter'

import styles from './styles'

export default function Transaction({ navigation }) {
  const { name } = useRoute();
  const { trans: { transactions } } = useSelector((state) => state.transactions)

  const [filterTrans, setFilterTrans] = useState("")

  useEffect(() => {
    FilterTrans()
  },[])

  function FilterTrans(){
    const result = transactions.filter((item) => { return item.operation === "conta"})

    setFilterTrans(result)
  }

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
        <View style={styles.filter}>
          <SelectFilter  
              title="Data" 
              text={"Filtro por Mês"} 
          />
          
        </View>   
          <Text style={styles.transactionTitle}>Recentes Lançamentos</Text>
          <FlatList         
            data={filterTrans}
            renderItem={({item}) => (
              <TransComponent invoceCreditCard={item} navigation={navigation}/>
            )}        
            scrollEnabled
            showsHorizontalScrollIndicator={false}          
            keyExtractor={item => item.id}
          />       
      </View>     
   </View>
  );
}
