import { useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native'

import moment from 'moment';

import { useDispatch, useSelector } from 'react-redux'

import User from '../../Components/User'

import { MaterialIcons, Ionicons, Entypo  } from '@expo/vector-icons';

import { getShowTransaction } from '../../store/modules/transaction/actions'

import styles from './styles'

export default function Detail({ route, navigation }){
  const dispatch = useDispatch()
  const { showTrans } = useSelector((state) => state.transactions)

  const { id } = route.params || {}

  useEffect(() => {
    dispatch(getShowTransaction(id))
  },[id])
  
  return (
    <View style={styles.container}>
      <User /> 

      <View style={styles.content}>
        <View style={styles.iconCard}>
          <Entypo name="shopping-bag" size={25} color="black" />
        </View>

        <Text style={styles.detailTitle}>Detalhe da compra</Text>

        <View style={styles.detailBody}>          
        <Text style={styles.contentTitle}>{showTrans.category}</Text>
          <View style={styles.contentData}>
            <Text>{moment(showTrans.data).format('MMM DD-YYYY')}</Text>
              <View style={styles.contentCircle}></View>
            <Text>{showTrans.operation}</Text>
          </View>
          <View style={styles.contentData}>
            <Text>{showTrans.description}</Text>              
          </View>
          <Text style={styles.contentValue}>
            {showTrans.type === "despesa" ? "-": "+"}{" "}
            {Intl.NumberFormat('pt-BR', { 
                style: 'currency', 
                currency: 'BRL',
              }).format(showTrans.value)}</Text>       
        </View>

        <View style={styles.iconEditRemove}>
          <View style={styles.iconEdit}>
            <TouchableOpacity>
              <MaterialIcons name="mode-edit" size={35} color="black" />
            </TouchableOpacity>            
          </View>
          <View style={styles.iconRemove}>
            <TouchableOpacity>
              <MaterialIcons name="delete-forever" size={35} color="black" />
            </TouchableOpacity>           
          </View>
        </View>    
         
      </View>
    </View>
  )
}