import { useState, useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'

import { useRoute } from '@react-navigation/native'

import { useSelector, useDispatch } from 'react-redux'

import { getTransactionsRelease } from '../../store/modules/transaction/actions'

import User from '../../Components/User'
import Balance from '../../Components/Balance'
import TransComponent from '../../Components/TransComponent'
import SelectFilter from '../../Components/SelectFilter'

import styles from './styles'

const months = ["01","02","03","04","05","06","07","08","09","10","11","12"]

export default function Transaction({ navigation }) {
  const { name } = useRoute();
  const { transRelease: { result, balance } } = useSelector((state) => state.transactions)

  const dispatch = useDispatch()

  const [cardMonth, setCardMonth] = useState("")

  useEffect(() => {
    dispatch(getTransactionsRelease(cardMonth))  
  },[cardMonth])

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
           <Balance route={name} data={balance}/>
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
          <Text style={styles.transactionTitle}>Lançamentos</Text>
          <FlatList         
            data={result}
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
