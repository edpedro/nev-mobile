import { View, Text, TouchableOpacity } from 'react-native'
import moment from 'moment'

import { FontAwesome, Entypo, Feather  } from '@expo/vector-icons';

import styles from './styles'

export default function TransComponent({ invoceCreditCard, navigation }){ 
  const { id, value, type, category, operation, data} = invoceCreditCard

  return (  
    <>
     <TouchableOpacity onPress={() => {
          navigation.navigate('Detail', {
            id
          })          
        }}>
      <View style={styles.container}>     
        <View style={styles.content}>        
          <View style={styles.contentBody}>
              <View style={styles.iconCardCircle}>
                {operation === "conta" 
                  ?
                  <Feather name="shopping-bag" size={19} color="black" />

                  :
                  <FontAwesome name="credit-card" size={18} color="black" />
                }     
              </View>
              
              <View>
                <Text style={styles.contentTitle}>{category}</Text>
                <View style={styles.contentData}>
                  <Text>{moment(data).format('MMM DD-YYYY')}</Text>
                  <View style={styles.contentCircle}></View>
                  <Text>{operation}</Text>
                </View>                
              </View>       
            </View>
    
          <View style={styles.circle}>
            <Entypo name="circle" size={12} color={type === "despesa" ? "red" : "#058373"} />         
          </View>
        </View>
          
    
        
          <Text style={styles.valueText}>
            {type === "despesa" ? "-": "+"}{" "}
            {Intl.NumberFormat('pt-BR', { 
                style: 'currency', 
                currency: 'BRL',
              }).format(value)}
          </Text>
        </View>
       
      </TouchableOpacity>
    
    </>    
  ) 
}