import { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'

import { AntDesign } from '@expo/vector-icons'; 

import User from '../../Components/User'
import CardComponent from '../../Components/CardComponent'
import TransComponent from '../../Components/TransComponent';

import styles from './styles'

export default function Card({ navigation }) {
  const { cards } = useSelector((state) => state.creditCards)
  const { trans: { transactions } } = useSelector((state) => state.transactions)

  const [filterCards, setFilterCards] = useState("")

  useEffect(() => {
    FilterCard()
  },[])

  function FilterCard(){
    const result = transactions.filter((item) => { return item.operation === "cartao"})

    setFilterCards(result)
  }

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
            data={filterCards}
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
